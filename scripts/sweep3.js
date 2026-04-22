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
    console.log('First-result ARK href:', firstHref);
    if (!firstHref) return { tag, error: 'no ARK link found' };
    const absUrl = firstHref.startsWith('http') ? firstHref : `https://www.familysearch.org${firstHref}`;
    await page.goto(absUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await sleep(jitter(10000, 3000));
    const detailUrl = page.url();
    const bodyText = (await page.textContent('body').catch(() => '')).replace(/\s+/g, ' ').trim();
    const preview = bodyText.substring(0, 3500);
    console.log('Detail URL:', detailUrl);
    console.log('Preview (first 3500 chars):');
    console.log(preview);
    const shotPath = `${shotDir}/DETAIL_${tag}.png`;
    await page.screenshot({ path: shotPath, fullPage: true });
    return { tag, detailUrl, text: bodyText.substring(0, 8000) };
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
    const urlNow = page.url();
    if (/signin|login|auth/i.test(urlNow)) return { ...search, error: 'Session lost' };
    if (/Something Went Wrong/i.test(bodyText)) {
      await page.screenshot({ path: `${shotDir}/${search.name}_ERROR.png`, fullPage: true });
      return { ...search, error: 'FS server error' };
    }
    if (/Incapsula|Access Denied|blocked by our security/i.test(bodyText)) {
      await page.screenshot({ path: `${shotDir}/${search.name}_BLOCKED.png`, fullPage: true });
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
    console.log('NOT LOGGED IN. Log in manually; waiting 10 min...');
    try { await page.waitForURL(u => !/signin|login|auth/i.test(u.toString()), { timeout: 600000 }); } catch { await context.close(); return; }
  } else {
    console.log('Logged in.');
  }

  const shotDir = 'C:/systep/autoresearch-genealogy/scripts/screenshots/sweep3';
  fs.mkdirSync(shotDir, { recursive: true });

  const out = { drilldowns: [], searches: [] };

  // ===== PART 1: RECORD DETAIL DRILLDOWNS =====
  const dd1 = await drilldown(page,
    'https://www.familysearch.org/search/record/results?q.givenName=Landreth&q.surname=King&q.residencePlace=South%20Carolina&f.collectionId=1727033',
    /^Landreth King/i, 'Landreth_King_1910', shotDir);
  out.drilldowns.push(dd1);
  await sleep(jitter(25000, 8000));

  const dd2 = await drilldown(page,
    'https://www.familysearch.org/search/record/results?q.givenName=Halbert&q.surname=Cooley&q.residencePlace=South%20Carolina&f.collectionId=1417683',
    /^Halbert/i, 'Halbert_Cooley_1880', shotDir);
  out.drilldowns.push(dd2);
  await sleep(jitter(25000, 8000));

  const dd3 = await drilldown(page,
    'https://www.familysearch.org/search/record/results?q.givenName=Barnett&q.surname=Solomon&q.residencePlace=Brooklyn%2C%20Kings%2C%20New%20York&q.residenceDate.from=1910&q.residenceDate.to=1910&f.collectionId=1727033',
    /^Barnett Solomon/i, 'Barnett_Solomon_1910_Brooklyn', shotDir);
  out.drilldowns.push(dd3);
  await sleep(jitter(25000, 8000));

  // ===== PART 2: JUDSON'S SONS AS INDEPENDENT HEADS =====
  const searches = [
    {
      name: '16_Andrew_Lewis_King_1910_Greenville',
      oq: 'OQ#17 Andrew Lewis King household (H.H. King candidate neighbor)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Andrew%20Lewis&q.surname=King&q.residencePlace=Greenville%2C%20South%20Carolina&q.residenceDate.from=1910&q.residenceDate.to=1910&f.collectionId=1727033'
    },
    {
      name: '17_James_Edward_King_1910_Greenville',
      oq: 'OQ#17 James Edward King 1910',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=James%20Edward&q.surname=King&q.residencePlace=Greenville%2C%20South%20Carolina&q.residenceDate.from=1910&q.residenceDate.to=1910&f.collectionId=1727033'
    },
    {
      name: '18_William_C_King_1910_Greenville',
      oq: 'OQ#17 William C King 1910',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=William%20C&q.surname=King&q.residencePlace=Greenville%2C%20South%20Carolina&q.residenceDate.from=1910&q.residenceDate.to=1910&f.collectionId=1727033'
    },
    {
      name: '19_John_W_King_1910_Greenville',
      oq: 'OQ#17 John W King 1910',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=John%20W&q.surname=King&q.residencePlace=Greenville%2C%20South%20Carolina&q.residenceDate.from=1910&q.residenceDate.to=1910&f.collectionId=1727033'
    },
    {
      name: '20_Albert_G_Bright_1940_Virginia',
      oq: 'OQ#1 Albert G Bright VA-born (filter birthplace)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Albert%20G&q.surname=Bright&q.birthPlace=Virginia&q.residenceDate.from=1940&q.residenceDate.to=1940&f.collectionId=2000219'
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

  fs.writeFileSync('C:/systep/autoresearch-genealogy/scripts/sweep3-results.json', JSON.stringify(out, null, 2));
  console.log('\n=== Results saved to sweep3-results.json ===');
  try { await sleep(90000); } catch (e) {}
  await context.close();
})();
