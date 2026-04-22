const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false }); // visible so user can handle CAPTCHA if needed
  const context = await browser.newContext();
  const page = await context.newPage();

  // Step 1: Go to FamilySearch sign-up
  console.log('Navigating to FamilySearch sign-up...');
  await page.goto('https://www.familysearch.org/auth/familysearch/login');

  // Wait for user to log in or create account (60 seconds)
  console.log('Please log in or create a FamilySearch account in the browser window.');
  console.log('Waiting up to 120 seconds for login...');

  try {
    await page.waitForURL('**/familysearch.org/**', { timeout: 120000 });
    // Check if we're past login
    await page.waitForTimeout(5000);
  } catch (e) {
    console.log('Continuing anyway...');
  }

  const searches = [
    {
      name: 'Morris Markel 1930 Census',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Morris&q.surname=Markel&q.residencePlace=Rhode%20Island&q.residenceDate.from=1930&q.residenceDate.to=1930&f.collectionId=1810731'
    },
    {
      name: 'Morris Markel 1930 Census (all collections)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Morris&q.surname=Markel&q.residencePlace=Rhode%20Island&q.residenceDate.from=1929&q.residenceDate.to=1931'
    },
    {
      name: 'Morris Markel Naturalization RI',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Morris&q.surname=Markel&f.collectionId=2622566'
    },
    {
      name: 'Morris Markel Naturalization Index',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Morris&q.surname=Markel&f.collectionId=2141014'
    },
    {
      name: 'Moishe Markel Naturalization RI',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Moishe&q.surname=Markel&f.collectionId=2622566'
    },
    {
      name: 'Helen Markel 1930 Census',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Helen&q.surname=Markel&q.residencePlace=Rhode%20Island&q.residenceDate.from=1929&q.residenceDate.to=1931'
    },
    {
      name: 'Thelma Markel 1930 Census',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Thelma&q.surname=Markel&q.residencePlace=Rhode%20Island&q.residenceDate.from=1929&q.residenceDate.to=1931'
    },
    {
      name: 'Morris Markel death RI',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Morris&q.surname=Markel&q.deathLikePlace=Rhode%20Island&q.deathLikeDate.from=1960&q.deathLikeDate.to=1965'
    },
    {
      name: 'Helen Markel death RI',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Helen&q.surname=Markel&q.deathLikePlace=Rhode%20Island&q.deathLikeDate.from=1973&q.deathLikeDate.to=1977'
    },
    {
      name: 'Morris Markiel all records',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Morris&q.surname=Markiel'
    },
    {
      name: 'Mojzesz Markiel all records',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Mojzesz&q.surname=Markiel'
    },
    {
      name: 'Brand Lisko marriages',
      url: 'https://www.familysearch.org/search/record/results?q.surname=Brand&q.marriageLikePlace=Lisko%2C%20Galicia'
    },
    {
      name: 'Goldbaum Lisko',
      url: 'https://www.familysearch.org/search/record/results?q.surname=Goldbaum&q.anyPlace=Lisko'
    }
  ];

  const results = [];

  for (const search of searches) {
    console.log(`\n--- Searching: ${search.name} ---`);
    try {
      await page.goto(search.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(3000);

      // Try to get result count
      const resultCount = await page.textContent('.results-count, .search-results-count, [data-testid="result-count"], .total-results').catch(() => null);
      console.log(`Result count: ${resultCount || 'not found'}`);

      // Try to get result entries
      const entries = await page.$$eval(
        '.result-item, .search-result, [data-testid="search-result"], tr.result, .result-card',
        (els) => els.slice(0, 5).map(el => el.textContent.trim().substring(0, 500))
      ).catch(() => []);

      if (entries.length > 0) {
        console.log(`Found ${entries.length} results:`);
        entries.forEach((e, i) => console.log(`  ${i + 1}. ${e}`));
      }

      // Screenshot for review
      const screenshotPath = `C:/systep/autoresearch-genealogy/scripts/screenshots/${search.name.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
      await page.screenshot({ path: screenshotPath, fullPage: false });
      console.log(`Screenshot saved: ${screenshotPath}`);

      results.push({ name: search.name, count: resultCount, entries });
    } catch (err) {
      console.log(`Error: ${err.message}`);
      results.push({ name: search.name, error: err.message });
    }
  }

  // Save results
  const fs = require('fs');
  fs.writeFileSync(
    'C:/systep/autoresearch-genealogy/scripts/familysearch-results.json',
    JSON.stringify(results, null, 2)
  );
  console.log('\n\nAll results saved to familysearch-results.json');

  // Keep browser open for manual exploration
  console.log('Browser staying open for 5 minutes for manual exploration...');
  await page.waitForTimeout(300000);
  await browser.close();
})();
