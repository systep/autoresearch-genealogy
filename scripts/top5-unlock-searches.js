const { chromium } = require('playwright');
const fs = require('fs');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const jitter = (base, spread = 2000) => base + Math.floor(Math.random() * spread);

(async () => {
  const userDataDir = 'C:/systep/autoresearch-genealogy/scripts/browser-data';
  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    args: [
      '--disable-blink-features=AutomationControlled',
      '--no-sandbox'
    ],
    ignoreDefaultArgs: ['--enable-automation'],
    viewport: { width: 1366, height: 900 }
  });

  const page = context.pages()[0] || await context.newPage();

  // Auth probe: hit an actual search results page. If it redirects to signin, we're not logged in.
  console.log('Auth probe via /search/record/results ...');
  const probeUrl = 'https://www.familysearch.org/search/record/results?q.givenName=John&q.surname=Smith';
  await page.goto(probeUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(5000);

  let probeUrlNow = page.url();
  console.log('After probe, URL =', probeUrlNow);

  if (/signin|login|auth/i.test(probeUrlNow)) {
    console.log('\n=== NOT LOGGED IN AT SEARCH ENDPOINT ===');
    console.log('Log in in the open browser. Waiting up to 10 minutes ...');
    try {
      await page.waitForURL(u => !/signin|login|auth/i.test(u.toString()), { timeout: 600000 });
      console.log('Login detected.');
      await page.goto(probeUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForTimeout(5000);
      probeUrlNow = page.url();
      console.log('Re-probe URL =', probeUrlNow);
      if (/signin|login|auth/i.test(probeUrlNow)) {
        console.log('Still blocked after login attempt. Exiting.');
        await context.close();
        return;
      }
    } catch (e) {
      console.log('Login timed out. Exiting.');
      await context.close();
      return;
    }
  } else {
    console.log('Logged in at search endpoint.');
  }

  // Save fresh status
  fs.writeFileSync('C:/systep/autoresearch-genealogy/scripts/familysearch-status.json', JSON.stringify({
    loggedIn: true,
    timestamp: new Date().toISOString(),
    note: 'Auth verified at search endpoint (not just landing page).'
  }, null, 2));

  const searches = [
    {
      name: '01_Judson_King_1900_census_Pelzer_SC',
      oq: 'OQ#17 H.H. King identity',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Judson&q.surname=King&q.residencePlace=South%20Carolina&q.residenceDate.from=1900&q.residenceDate.to=1900&f.collectionId=1325221'
    },
    {
      name: '02_Berko_Zalmanson_SS_Baltic_1904',
      oq: 'OQ#4 Barnett birth year + immigration',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Berko&q.surname=Zalmanson&q.arrivalDate.from=1904&q.arrivalDate.to=1905&q.arrivalPlace=New%20York'
    },
    {
      name: '02b_Barnett_Salmanson_all_immigration',
      oq: 'OQ#4 Barnett birth year + immigration (Americanized)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Barnett&q.surname=Salmanson&q.arrivalDate.from=1904&q.arrivalDate.to=1906&q.arrivalPlace=New%20York'
    },
    {
      name: '03_Barnett_Salmanson_RI_naturalization',
      oq: 'OQ#4 Barnett naturalization (collection 2622566)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Barnett&q.surname=Salmanson&f.collectionId=2622566'
    },
    {
      name: '03b_Zalmanson_RI_naturalization',
      oq: 'OQ#4 Zalmanson surname variant RI naturalization',
      url: 'https://www.familysearch.org/search/record/results?q.surname=Zalmanson&f.collectionId=2622566'
    },
    {
      name: '04_Charstee_Cooley_1860_Greenville_SC',
      oq: 'OQ#15 Judson King wife maiden name',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Charstee&q.surname=Cooley&q.residencePlace=Greenville%2C%20South%20Carolina&q.residenceDate.from=1860&q.residenceDate.to=1860'
    },
    {
      name: '04b_Charity_Cooley_1860_SC',
      oq: 'OQ#15 Charity variant',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Charity&q.surname=Cooley&q.residencePlace=South%20Carolina&q.residenceDate.from=1860&q.residenceDate.to=1860'
    },
    {
      name: '05_Morris_Markel_1930_census_RI',
      oq: 'OQ#23 Morris Markel household 1930',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Morris&q.surname=Markel&q.residencePlace=Rhode%20Island&q.residenceDate.from=1930&q.residenceDate.to=1930&f.collectionId=1810731'
    }
  ];

  const screenshotDir = 'C:/systep/autoresearch-genealogy/scripts/screenshots/top5';
  fs.mkdirSync(screenshotDir, { recursive: true });

  const results = [];
  let blockedSoFar = 0;

  for (const [idx, search] of searches.entries()) {
    console.log(`\n=== [${idx + 1}/${searches.length}] ${search.name} ===`);
    console.log(`Question: ${search.oq}`);
    try {
      await page.goto(search.url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      // Give React time to hydrate + fetch results; networkidle never fires on FS.
      await sleep(jitter(10000, 4000));
      // Best-effort: wait for a result-list container to appear
      await page.waitForSelector('[data-testid], main, #__next, .results, tbody', { timeout: 15000 }).catch(() => {});
      await sleep(jitter(4000, 2000));

      const bodyText = await page.textContent('body').catch(() => '');
      const urlNow = page.url();

      if (/signin|login|auth/i.test(urlNow)) {
        console.log('Redirected to signin — session lost mid-run.');
        results.push({ name: search.name, oq: search.oq, url: search.url, error: 'Redirected to signin' });
        break;
      }

      if (/Incapsula|Request unsuccessful|Access Denied|blocked by our security/i.test(bodyText)) {
        console.log('Incapsula / bot detection triggered.');
        results.push({ name: search.name, oq: search.oq, url: search.url, error: 'Incapsula block' });
        blockedSoFar++;
        if (blockedSoFar >= 2) {
          console.log('Multiple Incapsula blocks — backing off 60s before continuing.');
          await sleep(60000);
        }
        // Take screenshot even for blocks so we can see what happened
        const blockShot = `${screenshotDir}/${search.name}_BLOCKED.png`;
        await page.screenshot({ path: blockShot, fullPage: true });
        continue;
      }

      // Result-count extraction with multiple FamilySearch-specific patterns
      const countPatterns = [
        /([\d,]+)\s+result[s]?/i,
        /of\s+([\d,]+)/i,
        /About\s+([\d,]+)/i
      ];
      let resultCount = null;
      for (const p of countPatterns) {
        const m = bodyText.match(p);
        if (m) { resultCount = m[1]; break; }
      }

      // FamilySearch result rows — try several known selectors
      const rows = await page.evaluate(() => {
        const selectors = [
          'tr[data-test-id]',
          '[data-testid="result-row"]',
          '[data-testid="search-result"]',
          '.result-row',
          'tbody tr',
          'li[class*="result"]'
        ];
        for (const sel of selectors) {
          const els = Array.from(document.querySelectorAll(sel));
          if (els.length >= 1) {
            return els.slice(0, 10).map(el => el.textContent.trim().replace(/\s+/g, ' ').slice(0, 400));
          }
        }
        return [];
      }).catch(() => []);

      const preview = bodyText.substring(0, 1500).replace(/\s+/g, ' ').trim();

      console.log(`URL landed: ${urlNow}`);
      console.log(`Result count: ${resultCount || 'not extracted'}`);
      if (rows.length) {
        console.log(`Rows extracted: ${rows.length}`);
        rows.slice(0, 5).forEach((r, i) => console.log(`  [${i + 1}] ${r.slice(0, 220)}`));
      } else {
        console.log('No result rows extracted (may be "no matches" page or JS-rendered).');
      }

      const shot = `${screenshotDir}/${search.name}.png`;
      await page.screenshot({ path: shot, fullPage: true });
      console.log(`Screenshot: ${shot}`);

      results.push({
        name: search.name,
        oq: search.oq,
        url: search.url,
        urlLanded: urlNow,
        resultCount,
        rows: rows.slice(0, 10),
        previewStart: preview.substring(0, 700)
      });
    } catch (err) {
      console.log(`Error: ${err.message}`);
      results.push({ name: search.name, oq: search.oq, url: search.url, error: err.message });
    }

    // Pace: 20-30s between searches to avoid Incapsula
    if (idx < searches.length - 1) {
      const pause = jitter(20000, 10000);
      console.log(`Pausing ${pause}ms before next search...`);
      await sleep(pause);
    }
  }

  fs.writeFileSync(
    'C:/systep/autoresearch-genealogy/scripts/top5-results.json',
    JSON.stringify(results, null, 2)
  );
  console.log('\n\n=== Results saved to top5-results.json ===');
  console.log('Screenshots in scripts/screenshots/top5/');
  console.log('Browser stays open 2 minutes for manual follow-up.');

  try { await sleep(120000); } catch (e) {}
  await context.close();
})();
