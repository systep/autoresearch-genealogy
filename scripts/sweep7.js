const { chromium } = require('playwright');
const fs = require('fs');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const jitter = (base, spread = 2000) => base + Math.floor(Math.random() * spread);

async function mhSearch(page, query, tag, shotDir) {
  console.log(`\n=== MH: ${tag} ===`);
  console.log('Query:', JSON.stringify(query));
  try {
    await page.goto('https://www.myheritage.com/research', { waitUntil: 'domcontentloaded', timeout: 45000 });
    await sleep(5000);

    const firstInput = page.locator('input[data-automations="first_name_field"]').first();
    await firstInput.waitFor({ timeout: 15000 }).catch(() => {});
    await firstInput.click({ timeout: 10000 }).catch(() => {});
    await firstInput.fill(query.first || '', { timeout: 10000 }).catch(e => console.log('first fill:', e.message));

    const lastInput = page.locator('input[data-automations="last_name_field"]').first();
    await lastInput.fill(query.last || '', { timeout: 10000 }).catch(e => console.log('last fill:', e.message));

    if (query.year) {
      const yearInput = page.locator('input[data-automations="birth_year_open_field_filter"]').first();
      await yearInput.fill(String(query.year), { timeout: 10000 }).catch(e => console.log('year fill:', e.message));
    }
    if (query.place) {
      const placeInput = page.locator('input[data-automations="place_open_field_filter"]').first();
      await placeInput.fill(query.place, { timeout: 10000 }).catch(e => console.log('place fill:', e.message));
    }

    await sleep(1500);
    const searchBtn = page.locator('button[data-automations="search_button"]').first();
    await searchBtn.click({ timeout: 10000 }).catch(e => console.log('search click:', e.message));

    await page.waitForURL(u => /all-records|research\/category/i.test(u.toString()), { timeout: 30000 }).catch(() => {});
    await sleep(jitter(10000, 4000));

    const landedUrl = page.url();
    console.log('Landed:', landedUrl);

    const rows = await page.evaluate(() => {
      const out = [];
      const selectors = [
        '[class*="record_title"]',
        '[class*="result_title"]',
        '.search-results-item',
        '[data-test*="result"]',
        'a[href*="/research/record-"]',
        'a[href*="/research/"]'
      ];
      const seen = new Set();
      for (const sel of selectors) {
        const els = Array.from(document.querySelectorAll(sel)).slice(0, 15);
        for (const el of els) {
          const row = el.closest('tr') || el.closest('li') || el.closest('[class*="result"]') || el.parentElement;
          const text = (row?.textContent || el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 500);
          if (text && !seen.has(text)) {
            seen.add(text);
            out.push(text);
            if (out.length >= 8) return out;
          }
        }
        if (out.length >= 8) break;
      }
      return out;
    }).catch(() => []);

    const bodyText = (await page.textContent('body').catch(() => '')).replace(/\s+/g, ' ');
    const countMatch = bodyText.match(/([\d,]+)\s+(matches|results|records)/i);
    const resultCount = countMatch ? countMatch[1] : null;

    console.log(`Result count: ${resultCount || 'not extracted'}`);
    rows.slice(0, 5).forEach((r, i) => console.log(`  [${i + 1}] ${r.slice(0, 260)}`));

    await page.screenshot({ path: `${shotDir}/${tag}.png`, fullPage: true });
    return { tag, query, landedUrl, resultCount, rows };
  } catch (err) {
    console.log('Error:', err.message);
    return { tag, query, error: err.message };
  }
}

async function fsDrilldown(page, searchUrl, pickerRegex, tag, shotDir) {
  console.log(`\n--- FS DRILLDOWN: ${tag} ---`);
  try {
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await sleep(jitter(10000, 4000));
    await page.waitForSelector('a[href*="ark:/"]', { timeout: 15000 }).catch(() => {});
    const firstHref = await page.evaluate((rx) => {
      const re = new RegExp(rx, 'i');
      const anchors = Array.from(document.querySelectorAll('a[href*="ark:/"]'));
      for (const a of anchors) {
        const text = (a.textContent || '').trim();
        if (re.test(text)) return a.getAttribute('href');
      }
      return anchors[0]?.getAttribute('href') || null;
    }, pickerRegex.source).catch(() => null);
    console.log('First-result ARK:', firstHref);
    if (!firstHref) return { tag, error: 'no ARK' };
    const absUrl = firstHref.startsWith('http') ? firstHref : `https://www.familysearch.org${firstHref}`;
    await page.goto(absUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await sleep(jitter(10000, 3000));
    const detailUrl = page.url();
    const bodyText = (await page.textContent('body').catch(() => '')).replace(/\s+/g, ' ').trim();
    const preview = bodyText.substring(0, 4000);
    console.log('Detail URL:', detailUrl);
    console.log('Preview:', preview);
    await page.screenshot({ path: `${shotDir}/FS_${tag}.png`, fullPage: true });
    return { tag, detailUrl, text: bodyText.substring(0, 10000) };
  } catch (err) {
    return { tag, error: err.message };
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

  console.log('MyHeritage auth probe...');
  await page.goto('https://www.myheritage.com/research', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await sleep(6000);
  if (/login|signin|SignIn/i.test(page.url())) {
    console.log('MyHeritage not logged in. Waiting 10 min...');
    try { await page.waitForURL(u => !/login|signin|SignIn/i.test(u.toString()), { timeout: 600000 }); } catch { await context.close(); return; }
  } else {
    console.log('MyHeritage: logged in.');
  }

  const shotDir = 'C:/systep/autoresearch-genealogy/scripts/screenshots/sweep7';
  fs.mkdirSync(shotDir, { recursive: true });
  const results = [];

  // === BATCH 1: Rabbi Levi Isaac Salmanson US records (d. Jan 28 1907) ===
  results.push(await mhSearch(page, { first: 'Levi Isaac', last: 'Salmanson', year: 1853, place: 'United States' },
    '01_Levi_Isaac_Salmanson_US', shotDir));
  await sleep(jitter(20000, 6000));

  results.push(await mhSearch(page, { first: 'Levi', last: 'Salmanson', place: 'New York' },
    '02_Levi_Salmanson_NY', shotDir));
  await sleep(jitter(20000, 6000));

  results.push(await mhSearch(page, { first: 'Rabbi Levi', last: 'Salmanson' },
    '03_Rabbi_Levi_Salmanson', shotDir));
  await sleep(jitter(20000, 6000));

  // === BATCH 2: John Joseph Cooley + Emily Susan parents (Charstee's grandparents) ===
  results.push(await mhSearch(page, { first: 'John Joseph', last: 'Cooley', place: 'Greenville South Carolina' },
    '04_John_Joseph_Cooley_Greenville', shotDir));
  await sleep(jitter(20000, 6000));

  results.push(await mhSearch(page, { first: 'Emily Susan', last: 'Chapman', place: 'South Carolina' },
    '05_Emily_Susan_Chapman_SC', shotDir));
  await sleep(jitter(20000, 6000));

  // === BATCH 3: Rokhel Tsine Deych 1861 Vidz birth ===
  results.push(await mhSearch(page, { first: 'Rokhel Tsine', last: 'Deych', year: 1861, place: 'Vidz' },
    '06_Rokhel_Tsine_Deych_Vidz', shotDir));
  await sleep(jitter(20000, 6000));

  results.push(await mhSearch(page, { first: 'Rochel', last: 'Deych', year: 1861, place: 'Vidzy' },
    '07_Rochel_Deych_Vidzy', shotDir));
  await sleep(jitter(20000, 6000));

  // === BATCH 4: Barnett RI Federal Naturalization via FS ===
  const ddBarnettRI = await fsDrilldown(page,
    'https://www.familysearch.org/search/record/results?q.givenName=Barnett&q.surname=Salmanson&q.residencePlace=Rhode%20Island&f.collectionId=2064580',
    /^Barnett Salmanson/i, 'Barnett_Salmanson_RI_Federal_Naturalization', shotDir);
  results.push(ddBarnettRI);
  await sleep(jitter(25000, 8000));

  // Also try the generic "U.S. District and Circuit Court" collection. Unknown collection ID,
  // so search without collectionId and pick by text match.
  const ddBarnettRI2 = await fsDrilldown(page,
    'https://www.familysearch.org/search/record/results?q.givenName=Barnett&q.surname=Salmanson&q.residencePlace=Rhode%20Island',
    /District and Circuit Court|Rhode Island.*Naturalization/i, 'Barnett_Salmanson_RI_DistCourt_Nat', shotDir);
  results.push(ddBarnettRI2);
  await sleep(jitter(25000, 8000));

  // === BATCH 5: Mordko Markiel + Nissen Mendel ===
  results.push(await mhSearch(page, { first: 'Mordko', last: 'Markiel', place: 'Waniowice Sambor' },
    '08_Mordko_Markiel_Waniowice', shotDir));
  await sleep(jitter(20000, 6000));

  results.push(await mhSearch(page, { first: 'Nissen', last: 'Markel', place: 'Galicia' },
    '09_Nissen_Markel_Galicia', shotDir));
  await sleep(jitter(20000, 6000));

  results.push(await mhSearch(page, { first: 'Nissen Mendel', last: 'Markel' },
    '10_Nissen_Mendel_Markel', shotDir));
  await sleep(jitter(20000, 6000));

  // === BONUS: Bella Measroch + Ezekiel Henderson Chatham NC ===
  results.push(await mhSearch(page, { first: 'Bella', last: 'Measroch' },
    '11_Bella_Measroch', shotDir));
  await sleep(jitter(20000, 6000));

  results.push(await mhSearch(page, { first: 'Ezekiel', last: 'Henderson', year: 1760, place: 'Chatham North Carolina' },
    '12_Ezekiel_Henderson_Chatham', shotDir));

  fs.writeFileSync('C:/systep/autoresearch-genealogy/scripts/sweep7-results.json', JSON.stringify(results, null, 2));
  console.log('\n=== sweep7 done ===');
  try { await sleep(120000); } catch (e) {}
  await context.close();
})();
