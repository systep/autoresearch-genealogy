const { chromium } = require('playwright');
const fs = require('fs');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const jitter = (base, spread = 2000) => base + Math.floor(Math.random() * spread);

async function drilldown(page, searchUrl, pickerRegex, tag, shotDir, collectionHint) {
  console.log(`\n--- DRILLDOWN: ${tag} ---`);
  try {
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await sleep(jitter(10000, 4000));
    await page.waitForSelector('a[href*="ark:/"]', { timeout: 15000 }).catch(() => {});
    const firstHref = await page.evaluate(({ nameRx, colHint }) => {
      const nre = new RegExp(nameRx, 'i');
      const anchors = Array.from(document.querySelectorAll('a[href*="ark:/"]'));
      // Try to find matching the name AND collection hint
      for (const a of anchors) {
        const row = a.closest('tr') || a.closest('li') || a.parentElement;
        const text = (row?.textContent || a.textContent || '').trim();
        if (nre.test(text) && (!colHint || new RegExp(colHint, 'i').test(text))) {
          return a.getAttribute('href');
        }
      }
      // Fallback: first that matches name
      for (const a of anchors) {
        const text = (a.textContent || '').trim();
        if (nre.test(text)) return a.getAttribute('href');
      }
      return anchors[0]?.getAttribute('href') || null;
    }, { nameRx: pickerRegex.source, colHint: collectionHint || null }).catch(() => null);
    console.log('First-result ARK:', firstHref);
    if (!firstHref) return { tag, error: 'no ARK link found' };
    const absUrl = firstHref.startsWith('http') ? firstHref : `https://www.familysearch.org${firstHref}`;
    await page.goto(absUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await sleep(jitter(10000, 3000));
    const detailUrl = page.url();
    const bodyText = (await page.textContent('body').catch(() => '')).replace(/\s+/g, ' ').trim();
    const preview = bodyText.substring(0, 4500);
    console.log('Detail URL:', detailUrl);
    console.log('Preview:');
    console.log(preview);
    await page.screenshot({ path: `${shotDir}/DETAIL_${tag}.png`, fullPage: true });
    return { tag, detailUrl, text: bodyText.substring(0, 10000) };
  } catch (err) {
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

  const shotDir = 'C:/systep/autoresearch-genealogy/scripts/screenshots/sweep5';
  fs.mkdirSync(shotDir, { recursive: true });

  const out = { drilldowns: [], searches: [] };

  // === DRILLDOWN A: Barnett Salmanson 1912 NY Naturalization (filter by naturalization collection) ===
  const ddA = await drilldown(page,
    'https://www.familysearch.org/search/record/results?q.givenName=Barnett&q.surname=Salmanson&q.anyPlace=New%20York&q.anyDate.from=1910&q.anyDate.to=1915',
    /^Barnett Salmanson/i, 'Barnett_Salmanson_NY_Naturalization_1912', shotDir,
    'Naturalization');
  out.drilldowns.push(ddA);
  await sleep(jitter(25000, 8000));

  // === DRILLDOWN B: Charstee / Charity Cooley 1850 SC census ===
  const ddB = await drilldown(page,
    'https://www.familysearch.org/search/record/results?q.surname=Cooley&q.residencePlace=Greenville%2C%20South%20Carolina&q.residenceDate.from=1850&q.residenceDate.to=1850&f.collectionId=1401638',
    /Cooley/i, 'Cooley_family_1850_Greenville_SC', shotDir);
  out.drilldowns.push(ddB);
  await sleep(jitter(25000, 8000));

  // === DRILLDOWN C: Judson King 1920 Census (get ED/sheet for H.H. King neighbor analysis) ===
  const ddC = await drilldown(page,
    'https://www.familysearch.org/search/record/results?q.givenName=Judson&q.surname=King&q.residencePlace=South%20Carolina&q.residenceDate.from=1920&q.residenceDate.to=1920&f.collectionId=1488411',
    /^Judson King/i, 'Judson_King_1920_Census', shotDir);
  out.drilldowns.push(ddC);
  await sleep(jitter(25000, 8000));

  // === STANDARD SEARCHES ===
  const searches = [
    // Levi Itzhak Zalmanson US presence (4 queries)
    {
      name: '29_Levi_Salmanson_RI_Naturalization',
      oq: 'Levi Salmanson RI naturalization (coll 2622566)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Levi&q.surname=Salmanson&f.collectionId=2622566'
    },
    {
      name: '30_Levi_Zalmanson_any',
      oq: 'Levi Zalmanson broad search (any collection)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Levi&q.surname=Zalmanson'
    },
    {
      name: '31_Louis_Salmanson_US_1900_1910',
      oq: 'Louis Salmanson US 1900-1910 (anglicized name)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Louis&q.surname=Salmanson&q.residenceDate.from=1900&q.residenceDate.to=1910'
    },
    {
      name: '32_Levi_Itzhak_Zalmanson_all',
      oq: 'Levi Itzhak / Itsak / Ytzhak Zalmanson',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Levi%20Itzhak&q.surname=Zalmanson'
    },
    // Elizabeth Brasher parentage (1 query - Chatham NC marriage bonds 1782)
    {
      name: '33_Ezekiel_Henderson_Chatham_NC_1782',
      oq: 'OQ#13 Ezekiel Henderson Chatham NC 1782 marriage bond',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Ezekiel&q.surname=Henderson&q.marriagePlace=Chatham%2C%20North%20Carolina&q.marriageDate.from=1780&q.marriageDate.to=1790'
    },
    // All King heads of household in Oaklawn 1920 (H.H. King candidate) - surname-only with residence
    {
      name: '34_All_Kings_Oaklawn_1920',
      oq: 'OQ#17 All King households Oaklawn 1920',
      url: 'https://www.familysearch.org/search/record/results?q.surname=King&q.residencePlace=Oaklawn%2C%20Greenville%2C%20South%20Carolina&q.residenceDate.from=1920&q.residenceDate.to=1920&f.collectionId=1488411'
    },
    // Hersch Markel + Mordko Ber / Dov / Nissen Markel in Sambor records
    {
      name: '35_Hersch_Markel_Sambor',
      oq: 'OQ#10 Hersch Markel Sambor Galicia',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Hersch&q.surname=Markel&q.anyPlace=Sambor'
    },
    {
      name: '36_Nissen_Markel_Galicia',
      oq: 'OQ#10 Nissen Markel Galicia (grandfather candidate)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Nissen&q.surname=Markel'
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

  fs.writeFileSync('C:/systep/autoresearch-genealogy/scripts/sweep5-results.json', JSON.stringify(out, null, 2));
  console.log('\n=== sweep5 done ===');
  try { await sleep(90000); } catch (e) {}
  await context.close();
})();
