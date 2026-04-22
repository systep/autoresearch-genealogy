const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const userDataDir = 'C:/systep/autoresearch-genealogy/scripts/browser-data';
  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    args: ['--disable-blink-features=AutomationControlled', '--no-sandbox'],
    ignoreDefaultArgs: ['--enable-automation'],
    viewport: { width: 1366, height: 900 }
  });
  const page = context.pages()[0] || await context.newPage();

  console.log('Navigating to MyHeritage research...');
  await page.goto('https://www.myheritage.com/research', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await new Promise(r => setTimeout(r, 8000));

  // Enumerate all visible inputs with their attributes
  const inputs = await page.evaluate(() => {
    const all = Array.from(document.querySelectorAll('input, button, [role="button"], select'));
    return all
      .filter(el => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.height > 0;
      })
      .slice(0, 50)
      .map((el, i) => ({
        idx: i,
        tag: el.tagName.toLowerCase(),
        type: el.type || null,
        name: el.name || null,
        id: el.id || null,
        placeholder: el.placeholder || null,
        ariaLabel: el.getAttribute('aria-label') || null,
        className: (el.className + '').slice(0, 100),
        value: (el.value + '').slice(0, 60),
        text: (el.textContent || '').trim().slice(0, 60),
        dataAutomations: el.getAttribute('data-automations') || null
      }));
  });

  console.log('INPUTS AND BUTTONS ON PAGE:');
  for (const i of inputs) {
    console.log(JSON.stringify(i));
  }

  // Also look for any form with "research" / "search"
  const forms = await page.evaluate(() => {
    const all = Array.from(document.querySelectorAll('form'));
    return all.map(f => ({
      action: f.action || null,
      id: f.id || null,
      className: (f.className + '').slice(0, 100),
      inputCount: f.querySelectorAll('input').length
    }));
  });
  console.log('\nFORMS:');
  for (const f of forms) console.log(JSON.stringify(f));

  // Label-to-input map
  const labels = await page.evaluate(() => {
    const all = Array.from(document.querySelectorAll('label'));
    return all.slice(0, 30).map(l => ({
      text: (l.textContent || '').trim().slice(0, 80),
      forId: l.htmlFor || null
    }));
  });
  console.log('\nLABELS:');
  for (const l of labels) console.log(JSON.stringify(l));

  const shotPath = 'C:/systep/autoresearch-genealogy/scripts/screenshots/sweep6v2/00_DISCOVERY.png';
  fs.mkdirSync('C:/systep/autoresearch-genealogy/scripts/screenshots/sweep6v2', { recursive: true });
  await page.screenshot({ path: shotPath, fullPage: true });
  console.log(`\nScreenshot: ${shotPath}`);

  fs.writeFileSync('C:/systep/autoresearch-genealogy/scripts/mh-form-discovery.json', JSON.stringify({ inputs, forms, labels }, null, 2));
  console.log('Discovery saved.');

  await new Promise(r => setTimeout(r, 60000));
  await context.close();
})();
