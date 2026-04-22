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

  // Auth probe
  console.log('Auth probe...');
  const probeUrl = 'https://www.familysearch.org/search/record/results?q.givenName=John&q.surname=Smith';
  await page.goto(probeUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await sleep(5000);
  if (/signin|login|auth/i.test(page.url())) {
    console.log('NOT LOGGED IN. Exiting.');
    await context.close();
    return;
  }
  console.log('Logged in.');

  const shotDir = 'C:/systep/autoresearch-genealogy/scripts/screenshots/top5';
  fs.mkdirSync(shotDir, { recursive: true });

  const results = {};

  // === PART 1: Judson King 1900 record detail (full household) ===
  console.log('\n\n========= PART 1: Judson King 1900 record detail =========');
  try {
    const searchUrl = 'https://www.familysearch.org/search/record/results?q.givenName=Judson&q.surname=King&q.residencePlace=South%20Carolina&q.residenceDate.from=1900&q.residenceDate.to=1900&f.collectionId=1325221';
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await sleep(jitter(10000, 3000));

    // First result row's name is a link; click it.
    const firstLink = await page.locator('a', { hasText: /^Judson King/i }).first();
    const href = await firstLink.getAttribute('href').catch(() => null);
    console.log('First-result link href:', href);
    if (href) {
      const absUrl = href.startsWith('http') ? href : `https://www.familysearch.org${href}`;
      await page.goto(absUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await sleep(jitter(10000, 3000));

      const detailUrl = page.url();
      console.log('Detail page URL:', detailUrl);

      const bodyText = await page.textContent('body').catch(() => '');
      const preview = bodyText.replace(/\s+/g, ' ').trim().substring(0, 4000);
      console.log('Detail page preview (first 4000 chars):');
      console.log(preview);

      const shotPath = `${shotDir}/01_DETAIL_Judson_King_1900_record.png`;
      await page.screenshot({ path: shotPath, fullPage: true });
      console.log('Screenshot:', shotPath);

      results.judsonKing1900Detail = {
        url: detailUrl,
        fullText: bodyText.replace(/\s+/g, ' ').trim().substring(0, 10000)
      };
    } else {
      console.log('Could not find Judson King link — trying visible-text click.');
      await page.click('text=Judson King', { timeout: 10000 }).catch(e => console.log('Click failed:', e.message));
      await sleep(8000);
      const shotPath = `${shotDir}/01_DETAIL_fallback.png`;
      await page.screenshot({ path: shotPath, fullPage: true });
      results.judsonKing1900Detail = {
        url: page.url(),
        fullText: (await page.textContent('body').catch(() => '')).replace(/\s+/g, ' ').trim().substring(0, 10000)
      };
    }
  } catch (err) {
    console.log('Part 1 error:', err.message);
    results.judsonKing1900Detail = { error: err.message };
  }

  await sleep(jitter(25000, 8000));

  // === PART 2: Immigration retries with varied parameters ===
  const retries = [
    {
      name: 'R1_Berko_Zalmanson_1904_1905_NoPlace',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Berko&q.surname=Zalmanson&q.anyDate.from=1904&q.anyDate.to=1905'
    },
    {
      name: 'R2_Barnett_Salmanson_no_place',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Barnett&q.surname=Salmanson'
    },
    {
      name: 'R3_Berko_Zalmanson_no_filters',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Berko&q.surname=Zalmanson'
    },
    {
      name: 'R4_Zalmanson_surname_only',
      url: 'https://www.familysearch.org/search/record/results?q.surname=Zalmanson'
    },
    {
      name: 'R5_Salmanson_surname_only',
      url: 'https://www.familysearch.org/search/record/results?q.surname=Salmanson'
    }
  ];

  for (const [idx, r] of retries.entries()) {
    console.log(`\n\n=== RETRY [${idx + 1}/${retries.length}] ${r.name} ===`);
    try {
      await page.goto(r.url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await sleep(jitter(10000, 4000));
      await page.waitForSelector('[data-testid], main, #__next, .results, tbody', { timeout: 15000 }).catch(() => {});
      await sleep(jitter(4000, 2000));

      const bodyText = await page.textContent('body').catch(() => '');
      if (/Something Went Wrong/i.test(bodyText)) {
        console.log('FamilySearch server error.');
        results[r.name] = { url: r.url, error: 'FS server error' };
        await page.screenshot({ path: `${shotDir}/${r.name}_ERROR.png`, fullPage: true });
        continue;
      }
      if (/Incapsula|Access Denied|blocked by our security/i.test(bodyText)) {
        console.log('Incapsula block.');
        results[r.name] = { url: r.url, error: 'Incapsula' };
        await page.screenshot({ path: `${shotDir}/${r.name}_BLOCKED.png`, fullPage: true });
        await sleep(60000);
        continue;
      }

      // Look for "Search Results (N)" heading — the authoritative count
      const m = bodyText.match(/Search Results\s*\((\d[\d,]*)\)/i)
            || bodyText.match(/Filtered Search Results\s*\((\d[\d,]*)\)/i)
            || bodyText.match(/([\d,]+)\s+result[s]?/i);
      const resultCount = m ? m[1] : null;

      const rows = await page.evaluate(() => {
        const out = [];
        const nameLinks = Array.from(document.querySelectorAll('a[href*="ark:/"]')).slice(0, 8);
        for (const a of nameLinks) {
          const row = a.closest('tr') || a.closest('li') || a.closest('[role="row"]') || a.parentElement;
          if (row) {
            out.push((row.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 400));
          } else {
            out.push((a.textContent || '').trim());
          }
        }
        return out;
      }).catch(() => []);

      console.log(`Result count: ${resultCount || 'not extracted'}`);
      if (rows.length) {
        rows.slice(0, 5).forEach((row, i) => console.log(`  [${i + 1}] ${row.slice(0, 220)}`));
      } else {
        console.log('No rows extracted.');
      }

      const shotPath = `${shotDir}/${r.name}.png`;
      await page.screenshot({ path: shotPath, fullPage: true });

      results[r.name] = { url: r.url, resultCount, rows: rows.slice(0, 10) };
    } catch (err) {
      console.log('Error:', err.message);
      results[r.name] = { url: r.url, error: err.message };
    }
    if (idx < retries.length - 1) {
      const pause = jitter(22000, 8000);
      console.log(`Pausing ${pause}ms...`);
      await sleep(pause);
    }
  }

  fs.writeFileSync(
    'C:/systep/autoresearch-genealogy/scripts/top5-followup-results.json',
    JSON.stringify(results, null, 2)
  );
  console.log('\n\n=== Results saved to top5-followup-results.json ===');
  console.log('Browser stays open 2 min...');
  try { await sleep(120000); } catch (e) {}
  await context.close();
})();
