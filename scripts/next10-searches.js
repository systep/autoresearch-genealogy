const { chromium } = require('playwright');
const fs = require('fs');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const jitter = (base, spread = 2000) => base + Math.floor(Math.random() * spread);

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
  const probeUrl = 'https://www.familysearch.org/search/record/results?q.givenName=John&q.surname=Smith';
  await page.goto(probeUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await sleep(5000);
  if (/signin|login|auth/i.test(page.url())) {
    console.log('NOT LOGGED IN. Log in manually, waiting 10 min...');
    try {
      await page.waitForURL(u => !/signin|login|auth/i.test(u.toString()), { timeout: 600000 });
      console.log('Login detected.');
    } catch (e) { console.log('Timeout.'); await context.close(); return; }
  } else {
    console.log('Logged in.');
  }

  // 1900 census collection id: 1325221
  // 1910 census collection id: 1727033
  // 1920 census collection id: 1488411
  // 1930 census collection id: 1810731
  // 1940 census collection id: 2000219
  // 1850 census collection id: 1401638
  // 1880 census collection id: 1417683

  const searches = [
    {
      name: '06_King_surname_Pelzer_1910',
      oq: 'OQ#17 H.H. King identity (1910 Pelzer)',
      url: 'https://www.familysearch.org/search/record/results?q.surname=King&q.residencePlace=Pelzer%2C%20Greenville%2C%20South%20Carolina&q.residenceDate.from=1910&q.residenceDate.to=1910&f.collectionId=1727033'
    },
    {
      name: '07_King_surname_Pelzer_1920',
      oq: 'OQ#17 H.H. King identity (1920 Pelzer)',
      url: 'https://www.familysearch.org/search/record/results?q.surname=King&q.residencePlace=Pelzer%2C%20Greenville%2C%20South%20Carolina&q.residenceDate.from=1920&q.residenceDate.to=1920&f.collectionId=1488411'
    },
    {
      name: '08_H_King_Greenville_1900',
      oq: 'OQ#17 H initial King Greenville 1900',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=H&q.surname=King&q.residencePlace=Greenville%2C%20South%20Carolina&q.residenceDate.from=1900&q.residenceDate.to=1900&f.collectionId=1325221'
    },
    {
      name: '09_Landrath_King_1910',
      oq: 'New son Landrath King (b. ~1881) in 1910',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Landrath&q.surname=King&q.residencePlace=South%20Carolina&f.collectionId=1727033'
    },
    {
      name: '10_Charstee_Cooley_1850_SC',
      oq: 'OQ#15 Charstee parents (age ~7 in 1850)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Charstee&q.surname=Cooley&q.residencePlace=South%20Carolina&q.residenceDate.from=1850&q.residenceDate.to=1850'
    },
    {
      name: '10b_Charity_Cooley_1850_SC',
      oq: 'OQ#15 Charity variant parents (1850)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Charity&q.surname=Cooley&q.residencePlace=South%20Carolina&q.residenceDate.from=1850&q.residenceDate.to=1850&f.collectionId=1401638'
    },
    {
      name: '11_Oryley_Cooley_1880_SC',
      oq: 'OQ#15 Oryley H Cooley parents (age ~4 in 1880)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Oryley&q.surname=Cooley&q.residencePlace=South%20Carolina&f.collectionId=1417683'
    },
    {
      name: '12_Barnett_Salmanson_1910',
      oq: 'OQ#4 Barnett 1910 residency',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Barnett&q.surname=Salmanson&q.residenceDate.from=1910&q.residenceDate.to=1910'
    },
    {
      name: '13_Morris_Markal_1930_RI',
      oq: 'OQ#23 Morris Markel 1930 (Markal spelling)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Morris&q.surname=Markal&q.residencePlace=Rhode%20Island&q.residenceDate.from=1930&q.residenceDate.to=1930&f.collectionId=1810731'
    },
    {
      name: '14_Morris_Workel_1930_RI',
      oq: 'OQ#23 Morris Markel 1930 (Workel spelling)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Morris&q.surname=Workel&q.residencePlace=Rhode%20Island&q.residenceDate.from=1930&q.residenceDate.to=1930&f.collectionId=1810731'
    },
    {
      name: '15_Albert_G_Bright_1940',
      oq: 'OQ#1 Mary E Bright parents (Albert G 1940)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Albert%20G&q.surname=Bright&q.residenceDate.from=1940&q.residenceDate.to=1940&f.collectionId=2000219'
    }
  ];

  const shotDir = 'C:/systep/autoresearch-genealogy/scripts/screenshots/next10';
  fs.mkdirSync(shotDir, { recursive: true });

  const results = [];

  for (const [idx, search] of searches.entries()) {
    console.log(`\n=== [${idx + 1}/${searches.length}] ${search.name} ===`);
    console.log(`OQ: ${search.oq}`);
    try {
      await page.goto(search.url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await sleep(jitter(10000, 4000));
      await page.waitForSelector('[data-testid], main, #__next, .results, tbody', { timeout: 15000 }).catch(() => {});
      await sleep(jitter(4000, 2000));

      const bodyText = await page.textContent('body').catch(() => '');
      const urlNow = page.url();

      if (/signin|login|auth/i.test(urlNow)) {
        console.log('Redirected to signin — session lost.');
        results.push({ name: search.name, oq: search.oq, url: search.url, error: 'Session lost' });
        break;
      }
      if (/Something Went Wrong/i.test(bodyText)) {
        console.log('FamilySearch server error.');
        results.push({ name: search.name, oq: search.oq, url: search.url, error: 'FS server error' });
        await page.screenshot({ path: `${shotDir}/${search.name}_ERROR.png`, fullPage: true });
        continue;
      }
      if (/Incapsula|Access Denied|blocked by our security/i.test(bodyText)) {
        console.log('Incapsula block.');
        results.push({ name: search.name, oq: search.oq, url: search.url, error: 'Incapsula' });
        await page.screenshot({ path: `${shotDir}/${search.name}_BLOCKED.png`, fullPage: true });
        await sleep(60000);
        continue;
      }

      const m = bodyText.match(/Search Results\s*\((\d[\d,]*)\)/i)
            || bodyText.match(/Filtered Search Results\s*\((\d[\d,]*)\)/i)
            || bodyText.match(/([\d,]+)\s+result[s]?/i);
      const resultCount = m ? m[1] : null;

      const rows = await page.evaluate(() => {
        const out = [];
        const nameLinks = Array.from(document.querySelectorAll('a[href*="ark:/"]')).slice(0, 10);
        for (const a of nameLinks) {
          const row = a.closest('tr') || a.closest('li') || a.closest('[role="row"]') || a.parentElement;
          if (row) {
            out.push((row.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 500));
          }
        }
        return out;
      }).catch(() => []);

      console.log(`Result count: ${resultCount || 'not extracted'}`);
      if (rows.length) {
        rows.slice(0, 5).forEach((r, i) => console.log(`  [${i + 1}] ${r.slice(0, 240)}`));
      } else {
        console.log('No rows extracted (possibly 0 results).');
      }

      const shot = `${shotDir}/${search.name}.png`;
      await page.screenshot({ path: shot, fullPage: true });

      results.push({
        name: search.name, oq: search.oq, url: search.url, urlLanded: urlNow,
        resultCount, rows: rows.slice(0, 10)
      });
    } catch (err) {
      console.log(`Error: ${err.message}`);
      results.push({ name: search.name, oq: search.oq, url: search.url, error: err.message });
    }

    if (idx < searches.length - 1) {
      const pause = jitter(22000, 8000);
      console.log(`Pausing ${pause}ms...`);
      await sleep(pause);
    }
  }

  fs.writeFileSync(
    'C:/systep/autoresearch-genealogy/scripts/next10-results.json',
    JSON.stringify(results, null, 2)
  );
  console.log('\n\n=== Results saved to next10-results.json ===');
  try { await sleep(90000); } catch (e) {}
  await context.close();
})();
