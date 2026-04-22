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
        const els = Array.from(document.querySelectorAll(sel)).slice(0, 25);
        for (const el of els) {
          const row = el.closest('tr') || el.closest('li') || el.closest('[class*="result"]') || el.parentElement;
          const text = (row?.textContent || el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 900);
          if (text && !seen.has(text)) {
            seen.add(text);
            out.push(text);
            if (out.length >= 20) return out;
          }
        }
        if (out.length >= 20) break;
      }
      return out;
    }).catch(() => []);

    const bodyText = (await page.textContent('body').catch(() => '')).replace(/\s+/g, ' ');
    const countMatch = bodyText.match(/([\d,]+)\s+(matches|results|records)/i);
    const resultCount = countMatch ? countMatch[1] : null;

    console.log(`Result count: ${resultCount || 'not extracted'}`);
    rows.slice(0, 10).forEach((r, i) => console.log(`  [${i + 1}] ${r.slice(0, 500)}`));

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

  console.log('MH auth probe...');
  await page.goto('https://www.myheritage.com/research', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await sleep(6000);
  if (/login|signin|SignIn/i.test(page.url())) {
    console.log('Not logged in. Waiting 10 min...');
    try { await page.waitForURL(u => !/login|signin|SignIn/i.test(u.toString()), { timeout: 600000 }); } catch { await context.close(); return; }
  } else {
    console.log('MH: logged in.');
  }

  const shotDir = 'C:/systep/autoresearch-genealogy/scripts/screenshots/sweep11';
  fs.mkdirSync(shotDir, { recursive: true });
  const results = [];

  // 1. Yekutiel Zalman Wallis FULL children list — most-complete MH tree
  results.push(await mhSearch(page, { first: 'Yekutiel Zalman', last: 'Wallis' },
    '01_Yekutiel_Zalman_Wallis', shotDir));
  await sleep(jitter(15000, 5000));

  // 2. Rivka Beila Shneuri full details — Chabad maternal anchor
  results.push(await mhSearch(page, { first: 'Rivka Beila', last: 'Shneuri' },
    '02_Rivka_Beila_Shneuri', shotDir));
  await sleep(jitter(15000, 5000));

  // 3. All Chabad-era Zalmanzon in Minsk gubernia (Belarus)
  results.push(await mhSearch(page, { last: 'Zalmanzon', place: 'Minsk Belarus' },
    '03_Zalmanzon_Minsk', shotDir));
  await sleep(jitter(15000, 5000));

  // 4. Rabbi Yekutiel Zalman Wallis's descendants in Borisov — specific place query
  results.push(await mhSearch(page, { last: 'Wallis', place: 'Borisov Belarus' },
    '04_Wallis_Borisov', shotDir));
  await sleep(jitter(15000, 5000));

  // 5. Zavel Mogil Rokiskis: any Chabad rabbi connection
  results.push(await mhSearch(page, { first: 'Zavel', last: 'Mogil', place: 'Rokiskis' },
    '05_Zavel_Mogil_Rokiskis', shotDir));
  await sleep(jitter(15000, 5000));

  // 6. Leyb Deych / Leyb Zalmanzon - Gita's father
  results.push(await mhSearch(page, { first: 'Leyb', last: 'Deych' },
    '06_Leyb_Deych', shotDir));
  await sleep(jitter(15000, 5000));

  // 7. Rabbi Levi Yitzchok Zalmanson 1812 all siblings (spouse, descendants)
  results.push(await mhSearch(page, { first: 'Dvorah Leah', last: 'Schneerson', year: 1814 },
    '07_Dvorah_Leah_Schneerson', shotDir));
  await sleep(jitter(15000, 5000));

  // 8. Borisov + Chabad rabbi surname
  results.push(await mhSearch(page, { first: 'Zalman', last: 'Zalmanzon', place: 'Borisov' },
    '08_Zalman_Zalmanzon_Borisov_patriarch', shotDir));
  await sleep(jitter(15000, 5000));

  // 9. Zelmanzon / Zelmanson Chabad-related
  results.push(await mhSearch(page, { first: 'Sroel', last: 'Zelmanzon' },
    '09_Sroel_Zelmanzon_variants', shotDir));
  await sleep(jitter(15000, 5000));

  // 10. Yisroel Zalmanson — Hebrew version of Srol'
  results.push(await mhSearch(page, { first: 'Yisroel', last: 'Zalmanson' },
    '10_Yisroel_Zalmanson', shotDir));

  fs.writeFileSync('C:/systep/autoresearch-genealogy/scripts/sweep11-results.json', JSON.stringify(results, null, 2));
  console.log('\n=== sweep11 done ===');
  try { await sleep(120000); } catch (e) {}
  await context.close();
})();
