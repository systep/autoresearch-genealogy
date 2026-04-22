const { chromium } = require('playwright');
const fs = require('fs');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const jitter = (base, spread = 2000) => base + Math.floor(Math.random() * spread);

async function drilldown(page, searchUrl, firstNameRegex, tag, shotDir) {
  console.log(`\n--- DRILLDOWN: ${tag} ---`);
  try {
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await sleep(jitter(10000, 4000));
    await page.waitForSelector('a[href*="ark:/"]', { timeout: 15000 }).catch(() => {});
    const firstHref = await page.evaluate((rx) => {
      const re = new RegExp(rx, 'i');
      const anchors = Array.from(document.querySelectorAll('a[href*="ark:/"]'));
      for (const a of anchors) {
        const t = (a.textContent || '').trim();
        if (re.test(t)) return a.getAttribute('href');
      }
      return anchors[0]?.getAttribute('href') || null;
    }, firstNameRegex.source).catch(() => null);
    console.log('First-result ARK:', firstHref);
    if (!firstHref) return { tag, error: 'no ARK link found' };
    const absUrl = firstHref.startsWith('http') ? firstHref : `https://www.familysearch.org${firstHref}`;
    await page.goto(absUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await sleep(jitter(10000, 3000));
    const detailUrl = page.url();
    const bodyText = (await page.textContent('body').catch(() => '')).replace(/\s+/g, ' ').trim();
    const preview = bodyText.substring(0, 4000);
    console.log('Detail URL:', detailUrl);
    console.log('Preview:');
    console.log(preview);
    await page.screenshot({ path: `${shotDir}/DETAIL_${tag}.png`, fullPage: true });
    return { tag, detailUrl, text: bodyText.substring(0, 9000) };
  } catch (err) {
    console.log('Error:', err.message);
    return { tag, error: err.message };
  }
}

async function runSearch(page, search, shotDir) {
  console.log(`\n=== ${search.name} ===`);
  console.log(`OQ: ${search.oq}`);
  try {
    await page.goto(search.url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await sleep(jitter(10000, 4000));
    await page.waitForSelector('[data-testid], main, #__next, .results, tbody', { timeout: 15000 }).catch(() => {});
    await sleep(jitter(4000, 2000));
    const bodyText = await page.textContent('body').catch(() => '');
    if (/signin|login|auth/i.test(page.url())) return { ...search, error: 'Session lost' };
    if (/Something Went Wrong/i.test(bodyText)) {
      await page.screenshot({ path: `${shotDir}/${search.name}_ERROR.png`, fullPage: true });
      return { ...search, error: 'FS server error' };
    }
    if (/Incapsula|blocked by our security/i.test(bodyText)) {
      await page.screenshot({ path: `${shotDir}/${search.name}_BLOCKED.png`, fullPage: true });
      await sleep(60000);
      return { ...search, error: 'Incapsula' };
    }
    const m = bodyText.match(/Search Results\s*\((\d[\d,]*)\)/i) || bodyText.match(/Filtered Search Results\s*\((\d[\d,]*)\)/i) || bodyText.match(/([\d,]+)\s+result[s]?/i);
    const resultCount = m ? m[1] : null;
    const rows = await page.evaluate(() => {
      const nameLinks = Array.from(document.querySelectorAll('a[href*="ark:/"]')).slice(0, 10);
      return nameLinks.map(a => {
        const row = a.closest('tr') || a.closest('li') || a.closest('[role="row"]') || a.parentElement;
        return row ? (row.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 500) : '';
      });
    }).catch(() => []);
    console.log(`Result count: ${resultCount || 'not extracted'}`);
    rows.slice(0, 5).forEach((r, i) => console.log(`  [${i + 1}] ${r.slice(0, 240)}`));
    await page.screenshot({ path: `${shotDir}/${search.name}.png`, fullPage: true });
    return { ...search, resultCount, rows: rows.slice(0, 10) };
  } catch (err) {
    return { ...search, error: err.message };
  }
}

(async () => {
  const userDataDir = 'C:/systep/autoresearch-genealogy/scripts/browser-data';
  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    args: ['--disable-blink-features=AutomationControlled', '--no-sandbox'],
    ignoreDefaultArgs: ['--enable-automation'],
    viewport: { width: 1366, height: 900 }
  });
  const page = context.pages()[0] || await context.newPage();

  console.log('Auth probe...');
  await page.goto('https://www.familysearch.org/search/record/results?q.givenName=John&q.surname=Smith', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await sleep(5000);
  if (/signin|login|auth/i.test(page.url())) {
    console.log('NOT LOGGED IN. Log in manually, waiting 10 min...');
    try { await page.waitForURL(u => !/signin|login|auth/i.test(u.toString()), { timeout: 600000 }); } catch { await context.close(); return; }
  } else {
    console.log('Logged in.');
  }

  const shotDir = 'C:/systep/autoresearch-genealogy/scripts/screenshots/sweep4';
  fs.mkdirSync(shotDir, { recursive: true });

  const out = { drilldowns: [], searches: [] };

  // ===== DRILLDOWNS =====

  // 1. Barnett Salmanson NY naturalization 1912 (pull full record)
  const dd1 = await drilldown(page,
    'https://www.familysearch.org/search/record/results?q.givenName=Barnett&q.surname=Salmanson',
    /^Barnett Salmanson/i, 'Barnett_Salmanson_NY_Naturalization', shotDir);
  out.drilldowns.push(dd1);
  await sleep(jitter(25000, 8000));

  // 2. James Cooley 1860 SC (age 2, should show parents)
  const dd2 = await drilldown(page,
    'https://www.familysearch.org/search/record/results?q.givenName=James&q.surname=Cooley&q.residencePlace=South%20Carolina&q.residenceDate.from=1860&q.residenceDate.to=1860',
    /^James Cooley/i, 'James_Cooley_1860_SC', shotDir);
  out.drilldowns.push(dd2);
  await sleep(jitter(25000, 8000));

  // ===== STANDARD SEARCHES =====
  const searches = [
    {
      name: '21_HH_King_Pelzer_1920',
      oq: 'OQ#17 literal H H King Pelzer SC 1920',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=H%20H&q.surname=King&q.residencePlace=Pelzer%2C%20Greenville%2C%20South%20Carolina&q.residenceDate.from=1920&q.residenceDate.to=1920&f.collectionId=1488411'
    },
    {
      name: '22_Henry_King_Pelzer_1920',
      oq: 'OQ#17 Henry King Pelzer SC 1920',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Henry&q.surname=King&q.residencePlace=Pelzer%2C%20Greenville%2C%20South%20Carolina&q.residenceDate.from=1920&q.residenceDate.to=1920&f.collectionId=1488411'
    },
    {
      name: '23_Hiram_King_Greenville_1920',
      oq: 'OQ#17 Hiram King Greenville SC 1920',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Hiram&q.surname=King&q.residencePlace=Greenville%2C%20South%20Carolina&q.residenceDate.from=1920&q.residenceDate.to=1920&f.collectionId=1488411'
    },
    {
      name: '24_Dora_King_SC_1900',
      oq: 'OQ#17 Dora King (daughter of Judson, possible H.H. wife)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Dora&q.surname=King&q.residencePlace=South%20Carolina&q.residenceDate.from=1900&q.residenceDate.to=1900&f.collectionId=1325221'
    },
    {
      name: '25_Albert_G_Bright_VA_1893_1895',
      oq: 'OQ#1 Albert G Bright b. 1893-1895 VA (1940 census)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Albert%20G&q.surname=Bright&q.birthPlace=Virginia&q.birthLikeDate.from=1893&q.birthLikeDate.to=1895&f.collectionId=2000219'
    },
    {
      name: '26_Morris_Markiel_1930_RI',
      oq: 'OQ#23 Morris Markiel (Polish spelling) 1930 RI',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Morris&q.surname=Markiel&q.residencePlace=Rhode%20Island&q.residenceDate.from=1930&q.residenceDate.to=1930&f.collectionId=1810731'
    },
    {
      name: '27_Mojzesz_Markel_1930_RI',
      oq: 'OQ#23 Mojzesz Markel (Polish given name) 1930 RI',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Mojzesz&q.surname=Markel&q.residencePlace=Rhode%20Island&q.residenceDate.from=1930&q.residenceDate.to=1930&f.collectionId=1810731'
    },
    {
      name: '28_Markel_surname_1930_RI',
      oq: 'OQ#23 any Markel 1930 RI (surname only)',
      url: 'https://www.familysearch.org/search/record/results?q.surname=Markel&q.residencePlace=Rhode%20Island&q.residenceDate.from=1930&q.residenceDate.to=1930&f.collectionId=1810731'
    }
  ];

  for (const [idx, s] of searches.entries()) {
    out.searches.push(await runSearch(page, s, shotDir));
    if (idx < searches.length - 1) {
      const pause = jitter(22000, 8000);
      console.log(`Pausing ${pause}ms...`);
      await sleep(pause);
    }
  }

  fs.writeFileSync('C:/systep/autoresearch-genealogy/scripts/sweep4-results.json', JSON.stringify(out, null, 2));
  console.log('\n=== sweep4 done. Saved to sweep4-results.json ===');
  try { await sleep(90000); } catch (e) {}
  await context.close();
})();
