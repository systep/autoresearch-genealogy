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

    // Fill the search form. MyHeritage research page has:
    //   "First and middle name" input
    //   "Last name" input
    //   "Year of birth" input
    //   "Place" input (may hide behind more filters)
    // Use placeholder-text matching which is robust.
    // MyHeritage form selectors (discovered 2026-04-22):
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

    // Wait for results — MyHeritage routes to /research/category.../all-records?...
    await page.waitForURL(u => /all-records|search-results|research\/category/i.test(u.toString()), { timeout: 30000 }).catch(() => {});
    await sleep(jitter(10000, 4000));

    const landedUrl = page.url();
    console.log('Landed:', landedUrl);

    // Pull visible result cards. MyHeritage uses result-card div with class "record_title" or similar.
    const rows = await page.evaluate(() => {
      const out = [];
      // Try several heuristics
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
    rows.slice(0, 5).forEach((r, i) => console.log(`  [${i + 1}] ${r.slice(0, 240)}`));

    await page.screenshot({ path: `${shotDir}/${tag}.png`, fullPage: true });
    return { tag, query, landedUrl, resultCount, rows };
  } catch (err) {
    console.log('Error:', err.message);
    return { tag, query, error: err.message };
  }
}

async function geniSearch(page, names, tag, shotDir) {
  console.log(`\n=== GN: ${tag} ===`);
  const url = `https://www.geni.com/search?search_type=people&names=${encodeURIComponent(names)}`;
  console.log('URL:', url);
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await sleep(jitter(10000, 4000));

    const landedUrl = page.url();
    if (/login|sign_in/i.test(landedUrl)) {
      console.log('Session lost.');
      return { tag, url, error: 'Session lost' };
    }

    const rows = await page.evaluate(() => {
      const out = [];
      const cards = Array.from(document.querySelectorAll('[class*="result"], [class*="person"], [class*="profile"]')).slice(0, 20);
      const seen = new Set();
      for (const c of cards) {
        const t = (c.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 400);
        if (t && !seen.has(t) && t.length > 10) {
          seen.add(t);
          out.push(t);
          if (out.length >= 8) break;
        }
      }
      return out;
    }).catch(() => []);

    const bodyText = (await page.textContent('body').catch(() => '')).replace(/\s+/g, ' ');
    const countMatch = bodyText.match(/([\d,]+)\s+(profile|result|match)/i);
    const resultCount = countMatch ? countMatch[1] : null;

    console.log(`Result count: ${resultCount || 'not extracted'}`);
    rows.slice(0, 5).forEach((r, i) => console.log(`  [${i + 1}] ${r.slice(0, 240)}`));

    await page.screenshot({ path: `${shotDir}/${tag}.png`, fullPage: true });
    return { tag, url, landedUrl, resultCount, rows };
  } catch (err) {
    console.log('Error:', err.message);
    return { tag, url, error: err.message };
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

  // Auth verification for MyHeritage
  console.log('MyHeritage auth probe...');
  await page.goto('https://www.myheritage.com/research', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await sleep(6000);
  if (/login|signin|SignIn/i.test(page.url())) {
    console.log('MyHeritage not logged in. Waiting 10 min...');
    try { await page.waitForURL(u => !/login|signin|SignIn/i.test(u.toString()), { timeout: 600000 }); } catch { await context.close(); return; }
  } else {
    console.log('MyHeritage: logged in.');
  }

  const shotDir = 'C:/systep/autoresearch-genealogy/scripts/screenshots/sweep6v2';
  fs.mkdirSync(shotDir, { recursive: true });
  const results = [];

  // ===== MYHERITAGE SEARCHES =====
  results.push(await mhSearch(page, { first: 'Levi Itzhak', last: 'Zalmanson', year: 1851, place: 'Vilna' },
    'MH_01_Levi_Itzhak_Zalmanson_Vilna', shotDir));
  await sleep(jitter(20000, 6000));

  results.push(await mhSearch(page, { first: 'Levi', last: 'Salmanson' },
    'MH_02_Levi_Salmanson_any', shotDir));
  await sleep(jitter(20000, 6000));

  results.push(await mhSearch(page, { first: 'Charstee', last: 'Cooley', place: 'South Carolina' },
    'MH_03_Charstee_Cooley_SC', shotDir));
  await sleep(jitter(20000, 6000));

  results.push(await mhSearch(page, { first: 'Charity', last: 'Cooley', year: 1842, place: 'Greenville South Carolina' },
    'MH_04_Charity_Cooley_1842_Greenville', shotDir));
  await sleep(jitter(20000, 6000));

  results.push(await mhSearch(page, { first: 'Hersch', last: 'Markel', place: 'Sambor' },
    'MH_05_Hersch_Markel_Sambor', shotDir));
  await sleep(jitter(20000, 6000));

  results.push(await mhSearch(page, { first: 'Zawel', last: 'Deych', place: 'Rokiskis' },
    'MH_06_Zawel_Deych_Rokiskis', shotDir));
  await sleep(jitter(20000, 6000));

  results.push(await mhSearch(page, { first: 'Elizabeth', last: 'Brasher', year: 1765, place: 'North Carolina' },
    'MH_07_Elizabeth_Brasher_NC', shotDir));
  await sleep(jitter(20000, 6000));

  // ===== GENI AUTH + SEARCHES =====
  console.log('\nGeni auth probe...');
  await page.goto('https://www.geni.com/home', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await sleep(6000);
  if (/login|sign_in/i.test(page.url())) {
    console.log('Geni not logged in. Waiting 10 min...');
    try { await page.waitForURL(u => !/login|sign_in/i.test(u.toString()), { timeout: 600000 }); } catch { /* continue */ }
  } else {
    console.log('Geni: logged in.');
  }

  results.push(await geniSearch(page, 'Levi Yitzchak Zalmanson', 'GN_08_Levi_Yitzchak_Zalmanson', shotDir));
  await sleep(jitter(20000, 6000));

  results.push(await geniSearch(page, 'Zawel Deych Rokiskis', 'GN_09_Zawel_Deych_Rokiskis', shotDir));
  await sleep(jitter(20000, 6000));

  results.push(await geniSearch(page, 'Mordko Ber Markiel Sambor', 'GN_10_Mordko_Ber_Markiel', shotDir));
  await sleep(jitter(20000, 6000));

  results.push(await geniSearch(page, 'Nissen Mendel Markel', 'GN_11_Nissen_Mendel_Markel', shotDir));
  await sleep(jitter(20000, 6000));

  results.push(await geniSearch(page, 'Charstee Cooley King', 'GN_12_Charstee_Cooley', shotDir));

  fs.writeFileSync('C:/systep/autoresearch-genealogy/scripts/sweep6v2-results.json', JSON.stringify(results, null, 2));
  console.log('\n=== sweep6v2 done ===');
  try { await sleep(120000); } catch (e) {}
  await context.close();
})();
