const { chromium } = require('playwright');
const fs = require('fs');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const jitter = (base, spread = 2000) => base + Math.floor(Math.random() * spread);

async function snapshot(page, tag, shotDir) {
  const landedUrl = page.url();
  const bodyText = (await page.textContent('body').catch(() => '')).replace(/\s+/g, ' ');
  const preview = bodyText.substring(0, 5000);
  await page.screenshot({ path: `${shotDir}/${tag}.png`, fullPage: true });
  console.log(`URL: ${landedUrl}`);
  console.log(`Preview (5000ch):`);
  console.log(preview);
  return { tag, landedUrl, text: bodyText.substring(0, 12000) };
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

  const shotDir = 'C:/systep/autoresearch-genealogy/scripts/screenshots/sweep10';
  fs.mkdirSync(shotDir, { recursive: true });
  const results = [];

  // === JEWISHGEN: enter unified search for ZALMANSON surname (phonetic) ===
  console.log('\n--- JewishGen Unified Search: ZALMANSON phonetic ---');
  await page.goto('https://www.jewishgen.org/JGSearch/', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await sleep(6000);
  const landedInitial = page.url();
  console.log('Landed:', landedInitial);

  if (/login|signin|MyJewishGen/i.test(landedInitial)) {
    console.log('JewishGen requires login. Waiting 10 min...');
    try {
      await page.waitForURL(u => !/login|signin|MyJewishGen/i.test(u.toString()), { timeout: 600000 });
      console.log('JewishGen login detected.');
    } catch (e) {
      console.log('JewishGen login timed out.');
    }
  }

  results.push(await snapshot(page, '01_JewishGen_landing', shotDir));

  // Navigate directly to Unified Search with surname "Zalmanson" phonetic, town "Borisov"
  const searchUrl = 'https://www.jewishgen.org/JGSearch/search.php?q=Zalmanson%20Borisov&order=0';
  console.log('\nNavigating to Unified Search ZALMANSON Borisov...');
  await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await sleep(jitter(8000, 3000));
  results.push(await snapshot(page, '02_Unified_ZALMANSON_Borisov', shotDir));
  await sleep(jitter(15000, 5000));

  // JewishGen Belarus Database direct search - Borisov, surname ZALMANSON phonetic
  const belarusUrl = 'https://www.jewishgen.org/databases/Belarus/BelarusSearch.asp';
  console.log('\nNavigating to Belarus Database...');
  await page.goto(belarusUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await sleep(jitter(8000, 3000));
  results.push(await snapshot(page, '03_Belarus_Database_landing', shotDir));
  await sleep(jitter(10000, 4000));

  // Fill Belarus Search form
  console.log('\nFilling Belarus search form (Zalmanson, Borisov, phonetic)...');
  try {
    const snInput = page.locator('input[name*="Surname"], input[name*="surname"], input#surname').first();
    await snInput.fill('Zalmanson', { timeout: 10000 }).catch(e => console.log('surname fill:', e.message));

    // Phonetic checkbox
    const phoneticBox = page.locator('input[type="radio"][value*="Phonetic"], input[type="checkbox"][name*="phonetic"]').first();
    await phoneticBox.click({ timeout: 5000 }).catch(() => {});

    // Town field
    const townInput = page.locator('input[name*="Town"], input[name*="town"]').first();
    await townInput.fill('Borisov', { timeout: 10000 }).catch(e => console.log('town fill:', e.message));

    // Submit
    const submitBtn = page.locator('input[type="submit"], button[type="submit"]').first();
    await submitBtn.click({ timeout: 10000 }).catch(e => console.log('submit:', e.message));

    await sleep(jitter(10000, 4000));
    results.push(await snapshot(page, '04_Belarus_Zalmanson_Borisov_results', shotDir));
  } catch (err) {
    console.log('Belarus form fill error:', err.message);
  }
  await sleep(jitter(15000, 5000));

  // Try the ALL-BELARUS-DATABASE URL with query string
  const allBelarusUrl = 'https://www.jewishgen.org/databases/Belarus/search.htm?lastname=ZALMANSON&town=Borisov&submit=Search';
  await page.goto(allBelarusUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await sleep(jitter(8000, 3000));
  results.push(await snapshot(page, '05_Belarus_queryparam', shotDir));
  await sleep(jitter(10000, 4000));

  // JOWBR — Jewish burial registry — for Louis Salmanson
  console.log('\nJOWBR for Louis Salmanson Providence...');
  await page.goto('https://www.jewishgen.org/databases/cemetery/', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await sleep(jitter(8000, 3000));
  results.push(await snapshot(page, '06_JOWBR_landing', shotDir));

  // Try the JGFF (JewishGen Family Finder) for researchers of Zalmanson Borisov
  const jgffUrl = 'https://www.jewishgen.org/jgff/jgffweb.htm';
  await page.goto(jgffUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await sleep(jitter(8000, 3000));
  results.push(await snapshot(page, '07_JGFF_landing', shotDir));

  fs.writeFileSync('C:/systep/autoresearch-genealogy/scripts/sweep10-results.json', JSON.stringify(results, null, 2));
  console.log('\n=== sweep10 done, browser stays open 3 min for manual exploration ===');
  try { await sleep(180000); } catch (e) {}
  await context.close();
})();
