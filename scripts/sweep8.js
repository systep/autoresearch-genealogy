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
    await firstInput.fill(query.first || '', { timeout: 10000 }).catch(() => {});

    const lastInput = page.locator('input[data-automations="last_name_field"]').first();
    await lastInput.fill(query.last || '', { timeout: 10000 }).catch(() => {});

    if (query.year) {
      const yearInput = page.locator('input[data-automations="birth_year_open_field_filter"]').first();
      await yearInput.fill(String(query.year), { timeout: 10000 }).catch(() => {});
    }
    if (query.place) {
      const placeInput = page.locator('input[data-automations="place_open_field_filter"]').first();
      await placeInput.fill(query.place, { timeout: 10000 }).catch(() => {});
    }

    await sleep(1500);
    const searchBtn = page.locator('button[data-automations="search_button"]').first();
    await searchBtn.click({ timeout: 10000 }).catch(() => {});

    await page.waitForURL(u => /all-records|research\/category/i.test(u.toString()), { timeout: 30000 }).catch(() => {});
    await sleep(jitter(11000, 4000));

    const landedUrl = page.url();
    console.log('Landed:', landedUrl);

    // Pull ALL result rows visible; longer limit (we want chain detail)
    const rows = await page.evaluate(() => {
      const out = [];
      const selectors = [
        '[class*="record_title"]',
        '[class*="result_title"]',
        '.search-results-item',
        'a[href*="/research/record-"]',
        'a[href*="/research/"]'
      ];
      const seen = new Set();
      for (const sel of selectors) {
        const els = Array.from(document.querySelectorAll(sel)).slice(0, 20);
        for (const el of els) {
          const row = el.closest('tr') || el.closest('li') || el.closest('[class*="result"]') || el.parentElement;
          const text = (row?.textContent || el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 700);
          if (text && !seen.has(text)) {
            seen.add(text);
            out.push(text);
            if (out.length >= 15) return out;
          }
        }
        if (out.length >= 15) break;
      }
      return out;
    }).catch(() => []);

    const bodyText = (await page.textContent('body').catch(() => '')).replace(/\s+/g, ' ');
    const countMatch = bodyText.match(/([\d,]+)\s+(matches|results|records)/i);
    const resultCount = countMatch ? countMatch[1] : null;

    console.log(`Result count: ${resultCount || 'not extracted'}`);
    rows.slice(0, 8).forEach((r, i) => console.log(`  [${i + 1}] ${r.slice(0, 360)}`));

    await page.screenshot({ path: `${shotDir}/${tag}.png`, fullPage: true });
    return { tag, query, landedUrl, resultCount, rows };
  } catch (err) {
    return { tag, query, error: err.message };
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
    console.log('Not logged in to MH. Wait 10 min...');
    try { await page.waitForURL(u => !/login|signin|SignIn/i.test(u.toString()), { timeout: 600000 }); } catch { await context.close(); return; }
  } else {
    console.log('MH: logged in.');
  }

  const shotDir = 'C:/systep/autoresearch-genealogy/scripts/screenshots/sweep8';
  fs.mkdirSync(shotDir, { recursive: true });
  const results = [];

  // === BIG UNLOCK TARGETS — each aimed at a documented multi-generation chain ===

  // 1. Srul Mendel Zalmanson — parents + Chabad-lineage link verification
  results.push(await mhSearch(page, { first: 'Srul Mendel', last: 'Zalmanson' },
    '01_Srul_Mendel_Zalmanson', shotDir));
  await sleep(jitter(15000, 5000));

  // 2. Menachem Srul (Israel) Zelmanzon — alt spelling per Magen tree
  results.push(await mhSearch(page, { first: 'Menachem Srul', last: 'Zelmanzon' },
    '02_Menachem_Srul_Zelmanzon', shotDir));
  await sleep(jitter(15000, 5000));

  // 3. Rabbi Levi Yitzchok Zalmanson 1812-1872 Chabad — verify children list includes Srul Mendel
  results.push(await mhSearch(page, { first: 'Levi Yitzchok', last: 'Zalmanson', year: 1812 },
    '03_Rabbi_Levi_Yitzchok_1812_children', shotDir));
  await sleep(jitter(15000, 5000));

  // 4. Louis Zalmanson 1907 Providence RI death (Tier 1 anchor)
  results.push(await mhSearch(page, { first: 'Louis', last: 'Zalmanson', year: 1855, place: 'Providence Rhode Island' },
    '04_Louis_Zalmanson_Providence_1907_death', shotDir));
  await sleep(jitter(15000, 5000));

  // 5. Thomas Levi Brasher Jr. 1731 — Huguenot chain anchor
  results.push(await mhSearch(page, { first: 'Thomas Levi', last: 'Brasher', year: 1731, place: 'Maryland' },
    '05_Thomas_Levi_Brasher_Jr_1731', shotDir));
  await sleep(jitter(15000, 5000));

  // 6. Thomas Brasher Sr. 1710 — Maryland colonial + his father (Huguenot immigrant)
  results.push(await mhSearch(page, { first: 'Thomas', last: 'Brasher', year: 1710, place: 'Maryland' },
    '06_Thomas_Brasher_Sr_1710', shotDir));
  await sleep(jitter(15000, 5000));

  // 7. James Youngblood Edgefield SC 1740 — colonial chain
  results.push(await mhSearch(page, { first: 'James', last: 'Youngblood', year: 1740, place: 'Edgefield South Carolina' },
    '07_James_Youngblood_1740_Edgefield', shotDir));
  await sleep(jitter(15000, 5000));

  // 8. Willie H Youngblood (Albert Bright's mother) - verify parents
  results.push(await mhSearch(page, { first: 'Willie H', last: 'Youngblood', year: 1863 },
    '08_Willie_H_Youngblood_1863', shotDir));
  await sleep(jitter(15000, 5000));

  // 9. William H Youngblood 1830 Alabama — middle generation
  results.push(await mhSearch(page, { first: 'William H', last: 'Youngblood', year: 1830, place: 'Alabama' },
    '09_William_H_Youngblood_1830_AL', shotDir));
  await sleep(jitter(15000, 5000));

  // 10. Henie Markel née Löw — drilldown for Löw family origin
  results.push(await mhSearch(page, { first: 'Henie', last: 'Löw', place: 'Sambor Galicia' },
    '10_Henie_Low_Sambor', shotDir));
  await sleep(jitter(15000, 5000));

  // 11. Jankiel Markiel (newly found 2026-04-22, Mordko's father) — his parents
  results.push(await mhSearch(page, { first: 'Jankiel', last: 'Markiel', place: 'Sambor' },
    '11_Jankiel_Markiel_Sambor', shotDir));

  fs.writeFileSync('C:/systep/autoresearch-genealogy/scripts/sweep8-results.json', JSON.stringify(results, null, 2));
  console.log('\n=== sweep8 done ===');
  try { await sleep(120000); } catch (e) {}
  await context.close();
})();
