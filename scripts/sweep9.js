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
    console.log('Not logged in. Waiting 10 min...');
    try { await page.waitForURL(u => !/login|signin|SignIn/i.test(u.toString()), { timeout: 600000 }); } catch { await context.close(); return; }
  } else {
    console.log('MH: logged in.');
  }

  const shotDir = 'C:/systep/autoresearch-genealogy/scripts/screenshots/sweep9';
  fs.mkdirSync(shotDir, { recursive: true });
  const results = [];

  // === YOUNGBLOOD GROUP: 1850 census finding ===
  results.push(await mhSearch(page, { first: 'William', last: 'Youngblood', year: 1830, place: 'Bibb Alabama' },
    '01_William_Youngblood_1830_Bibb_AL', shotDir));
  await sleep(jitter(15000, 5000));

  results.push(await mhSearch(page, { first: 'Henry', last: 'Youngblood', place: 'Bibb Alabama 1850' },
    '02_Henry_Youngblood_Bibb_AL_1850', shotDir));
  await sleep(jitter(15000, 5000));

  results.push(await mhSearch(page, { first: 'William F', last: 'Youngblood' },
    '03_William_F_Youngblood_FS_lead', shotDir));
  await sleep(jitter(15000, 5000));

  results.push(await mhSearch(page, { last: 'Youngblood', place: 'Bibb Alabama', year: 1810 },
    '04_Any_Youngblood_Bibb_AL_1810', shotDir));
  await sleep(jitter(15000, 5000));

  results.push(await mhSearch(page, { first: 'Caroline', last: 'Covington' },
    '05_Caroline_Covington_mother_lead', shotDir));
  await sleep(jitter(15000, 5000));

  // === SALMANSON/ZALMANSON GROUP: Borisov + Joseph ===
  results.push(await mhSearch(page, { first: 'Srul Mendel', last: 'Zalmanson', place: 'Borisov Belarus' },
    '06_Srul_Mendel_Borisov', shotDir));
  await sleep(jitter(15000, 5000));

  results.push(await mhSearch(page, { first: 'Joseph', last: 'Salmanson' },
    '07_Joseph_Salmanson', shotDir));
  await sleep(jitter(15000, 5000));

  results.push(await mhSearch(page, { first: 'Ida', last: 'Salmanson' },
    '08_Ida_Salmanson', shotDir));
  await sleep(jitter(15000, 5000));

  // Borisov Revision List records directly — any Zelmenzon/Zalmanson
  results.push(await mhSearch(page, { last: 'Zelmenzon', place: 'Borisov' },
    '09_Zelmenzon_Borisov_records', shotDir));
  await sleep(jitter(15000, 5000));

  // Louis Salmanson 1907 death - get the FULL RI Death Index record
  results.push(await mhSearch(page, { first: 'Louis', last: 'Salmonson', year: 1853, place: 'Providence Rhode Island' },
    '10_Louis_Salmonson_RI_death_full', shotDir));
  await sleep(jitter(15000, 5000));

  // Louis Salmanson burial / cemetery
  results.push(await mhSearch(page, { first: 'Louis', last: 'Salmanson', place: 'Lincoln Park Cemetery Rhode Island' },
    '11_Louis_Salmanson_cemetery', shotDir));

  fs.writeFileSync('C:/systep/autoresearch-genealogy/scripts/sweep9-results.json', JSON.stringify(results, null, 2));
  console.log('\n=== sweep9 done ===');
  try { await sleep(120000); } catch (e) {}
  await context.close();
})();
