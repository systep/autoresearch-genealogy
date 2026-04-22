const { chromium } = require('playwright');
const fs = require('fs');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const jitter = (base, spread = 2000) => base + Math.floor(Math.random() * spread);

async function navScrape(page, url, tag, shotDir, waitSel) {
  console.log(`\n=== ${tag} ===`);
  console.log(`URL: ${url}`);
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await sleep(jitter(10000, 4000));
    if (waitSel) {
      await page.waitForSelector(waitSel, { timeout: 15000 }).catch(() => {});
    }
    await sleep(jitter(4000, 2000));

    const urlNow = page.url();
    const bodyText = (await page.textContent('body').catch(() => '')).replace(/\s+/g, ' ').trim();
    const preview = bodyText.substring(0, 3000);

    // Check for signin redirects
    if (/signin|login|auth0|signin.myheritage|account\/login|accounts\.geni/i.test(urlNow)) {
      console.log('SESSION NOT AUTHENTICATED. URL:', urlNow);
      await page.screenshot({ path: `${shotDir}/${tag}_LOGIN.png`, fullPage: true });
      return { tag, url, error: 'not authenticated', landed: urlNow };
    }

    console.log('Landed URL:', urlNow);
    console.log('Preview:');
    console.log(preview);
    const shotPath = `${shotDir}/${tag}.png`;
    await page.screenshot({ path: shotPath, fullPage: true });

    return { tag, url, landed: urlNow, preview };
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

  // Step 1: Check MyHeritage auth
  console.log('MyHeritage auth probe...');
  await page.goto('https://www.myheritage.com/research', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await sleep(7000);
  let url = page.url();
  console.log('MyHeritage landed:', url);
  if (/login|signin/i.test(url) || /SignIn/i.test(url)) {
    console.log('\n=== NOT LOGGED IN TO MYHERITAGE ===');
    console.log('Log in manually in the chromium window. Waiting up to 10 min...');
    try {
      await page.waitForURL(u => !/login|signin|SignIn/i.test(u.toString()), { timeout: 600000 });
      console.log('MyHeritage login detected.');
    } catch (e) {
      console.log('MyHeritage login timed out. Continuing anyway...');
    }
  } else {
    console.log('MyHeritage: already logged in.');
  }
  await sleep(3000);

  // Step 2: Check Geni auth
  console.log('\nGeni auth probe...');
  await page.goto('https://www.geni.com/home', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await sleep(7000);
  url = page.url();
  console.log('Geni landed:', url);
  if (/login|signin|sign_in/i.test(url)) {
    console.log('\n=== NOT LOGGED IN TO GENI ===');
    console.log('Log in manually. Waiting up to 10 min...');
    try {
      await page.waitForURL(u => !/login|signin|sign_in/i.test(u.toString()), { timeout: 600000 });
      console.log('Geni login detected.');
    } catch (e) {
      console.log('Geni login timed out. Continuing anyway...');
    }
  } else {
    console.log('Geni: already logged in.');
  }
  await sleep(3000);

  const shotDir = 'C:/systep/autoresearch-genealogy/scripts/screenshots/sweep6';
  fs.mkdirSync(shotDir, { recursive: true });

  const results = [];

  // === MYHERITAGE SEARCHES ===

  // 1. Levi Itzhak Zalmanson — search across MyHeritage
  results.push(await navScrape(page,
    'https://www.myheritage.com/FP/API/Search/get-research-search-results.php?action=query&s=1&qname=Name+fn.Levi+Itzhak+ln.Zalmanson',
    'MH_01_Levi_Itzhak_Zalmanson', shotDir));
  await sleep(jitter(25000, 8000));

  // Use the UI search instead for reliability
  results.push(await navScrape(page,
    'https://www.myheritage.com/research?formId=master&formMode=1&useTranslation=1&exactSearch=0&p=name_first%3DLevi+Itzhak+name_last%3DZalmanson+event_type%3D_birth+event_date%3D1851+event_place%3DVilna',
    'MH_02_Levi_Itzhak_Zalmanson_UI', shotDir));
  await sleep(jitter(25000, 8000));

  // 2. Levi / Louis Salmanson US records
  results.push(await navScrape(page,
    'https://www.myheritage.com/research?formId=master&formMode=1&p=name_first%3DLevi+name_last%3DSalmanson+event_country%3DUS',
    'MH_03_Levi_Salmanson_US', shotDir));
  await sleep(jitter(25000, 8000));

  // 3. Charstee / Charity Cooley 1850 SC
  results.push(await navScrape(page,
    'https://www.myheritage.com/research?formId=master&formMode=1&p=name_first%3DCharstee+name_last%3DCooley+event_place%3DSouth+Carolina+event_date%3D1850',
    'MH_04_Charstee_Cooley_1850_SC', shotDir));
  await sleep(jitter(25000, 8000));

  results.push(await navScrape(page,
    'https://www.myheritage.com/research?formId=master&formMode=1&p=name_first%3DCharity+name_last%3DCooley+event_place%3DGreenville+South+Carolina+event_date%3D1850',
    'MH_05_Charity_Cooley_1850_Greenville', shotDir));
  await sleep(jitter(25000, 8000));

  // 4. Hersch Markel Sambor / Nissen Markel Galicia
  results.push(await navScrape(page,
    'https://www.myheritage.com/research?formId=master&formMode=1&p=name_first%3DHersch+name_last%3DMarkel+event_place%3DSambor',
    'MH_06_Hersch_Markel_Sambor', shotDir));
  await sleep(jitter(25000, 8000));

  results.push(await navScrape(page,
    'https://www.myheritage.com/research?formId=master&formMode=1&p=name_first%3DNissen+name_last%3DMarkel',
    'MH_07_Nissen_Markel', shotDir));
  await sleep(jitter(25000, 8000));

  // 5. Zawel Deykh Rokiskis
  results.push(await navScrape(page,
    'https://www.myheritage.com/research?formId=master&formMode=1&p=name_first%3DZawel+name_last%3DDeych+event_place%3DRokiskis',
    'MH_08_Zawel_Deych_Rokiskis', shotDir));
  await sleep(jitter(25000, 8000));

  // 6. Barnett Salmanson NY Naturalization 1912
  results.push(await navScrape(page,
    'https://www.myheritage.com/research?formId=master&formMode=1&p=name_first%3DBarnett+name_last%3DSalmanson+event_place%3DNew+York+event_date%3D1912',
    'MH_09_Barnett_Salmanson_NY_1912', shotDir));
  await sleep(jitter(25000, 8000));

  // === GENI SEARCHES ===

  // 7. Geni profile search: Levi Yitzchak Zalmanson (rabbi, Chabad)
  results.push(await navScrape(page,
    'https://www.geni.com/search?search_type=people&names=Levi+Yitzchak+Zalmanson',
    'GN_10_Levi_Yitzchak_Zalmanson', shotDir));
  await sleep(jitter(25000, 8000));

  // 8. Geni profile search: Zawel Deykh / Deych
  results.push(await navScrape(page,
    'https://www.geni.com/search?search_type=people&names=Zawel+Deych',
    'GN_11_Zawel_Deych', shotDir));
  await sleep(jitter(25000, 8000));

  // 9. Geni: Hersch Markel Sambor / Mordko Ber Markiel
  results.push(await navScrape(page,
    'https://www.geni.com/search?search_type=people&names=Mordko+Ber+Markiel',
    'GN_12_Mordko_Ber_Markiel', shotDir));
  await sleep(jitter(25000, 8000));

  // 10. Geni: Nissen Mendel Markel (grandfather hypothesis)
  results.push(await navScrape(page,
    'https://www.geni.com/search?search_type=people&names=Nissen+Markel',
    'GN_13_Nissen_Markel', shotDir));

  fs.writeFileSync('C:/systep/autoresearch-genealogy/scripts/sweep6-results.json', JSON.stringify(results, null, 2));
  console.log('\n=== sweep6 done, saved to sweep6-results.json ===');
  try { await sleep(120000); } catch (e) {}
  await context.close();
})();
