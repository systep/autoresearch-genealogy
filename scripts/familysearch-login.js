const { chromium } = require('playwright');

(async () => {
  // Use persistent browser context to save login state
  const userDataDir = 'C:/systep/autoresearch-genealogy/scripts/browser-data';
  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    args: [
      '--disable-blink-features=AutomationControlled',
      '--no-sandbox'
    ],
    ignoreDefaultArgs: ['--enable-automation'],
    viewport: { width: 1280, height: 900 }
  });

  const page = context.pages()[0] || await context.newPage();

  // Step 1: Navigate to FamilySearch
  console.log('Opening FamilySearch...');
  await page.goto('https://www.familysearch.org/en/signin/', { waitUntil: 'domcontentloaded', timeout: 30000 });

  // Check if already logged in
  const currentUrl = page.url();
  console.log('Current URL:', currentUrl);

  if (currentUrl.includes('signin') || currentUrl.includes('login') || currentUrl.includes('auth')) {
    console.log('');
    console.log('=== PLEASE LOG IN OR CREATE AN ACCOUNT ===');
    console.log('The browser window is open. Log in manually.');
    console.log('Waiting up to 10 minutes for you to complete login...');
    console.log('');

    // Wait for navigation away from login page (up to 10 minutes)
    try {
      await page.waitForURL(url => !url.toString().includes('signin') && !url.toString().includes('login') && !url.toString().includes('auth'), { timeout: 600000 });
      console.log('Login detected! Proceeding with searches...');
    } catch (e) {
      console.log('Timeout waiting for login. Check the browser window.');
      // Save context anyway so credentials persist
      console.log('Saving browser state...');
      await context.close();
      return;
    }
  } else {
    console.log('Already logged in!');
  }

  // Wait a moment after login
  await page.waitForTimeout(3000);

  // Save credentials file for reference
  const fs = require('fs');
  fs.writeFileSync('C:/systep/autoresearch-genealogy/scripts/familysearch-status.json', JSON.stringify({
    loggedIn: true,
    timestamp: new Date().toISOString(),
    note: 'Browser data saved in browser-data/ directory. Re-run this script to resume.'
  }, null, 2));

  // Now run searches
  const searches = [
    {
      name: 'Morris Markel 1930 Census (collection 1810731)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Morris&q.surname=Markel&q.residencePlace=Rhode%20Island&q.residenceDate.from=1930&q.residenceDate.to=1930&f.collectionId=1810731'
    },
    {
      name: 'Morris Markal 1930 Census (misspelling from 1940)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Morris&q.surname=Markal&q.residencePlace=Rhode%20Island&q.residenceDate.from=1929&q.residenceDate.to=1931&f.collectionId=1810731'
    },
    {
      name: 'Morris Workel 1930 Census (misspelling from 1950)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Morris&q.surname=Workel&q.residencePlace=Rhode%20Island&q.residenceDate.from=1929&q.residenceDate.to=1931&f.collectionId=1810731'
    },
    {
      name: 'Morris Markel Naturalization RI (collection 2622566)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Morris&q.surname=Markel&f.collectionId=2622566'
    },
    {
      name: 'Morris Markel Naturalization Index (collection 2141014)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Morris&q.surname=Markel&f.collectionId=2141014'
    },
    {
      name: 'Moishe Markel Naturalization (collection 2622566)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Moishe&q.surname=Markel&f.collectionId=2622566'
    },
    {
      name: 'Helen Markel 1930 Census',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Helen&q.surname=Markel&q.residencePlace=Rhode%20Island&q.residenceDate.from=1929&q.residenceDate.to=1931&f.collectionId=1810731'
    },
    {
      name: 'Thelma Markel 1930 Census (daughter, age ~10)',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Thelma&q.surname=Markel&q.residencePlace=Rhode%20Island&q.residenceDate.from=1929&q.residenceDate.to=1931&f.collectionId=1810731'
    },
    {
      name: 'Morris Markel death RI 1960-1965',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Morris&q.surname=Markel&q.deathLikePlace=Rhode%20Island&q.deathLikeDate.from=1960&q.deathLikeDate.to=1966'
    },
    {
      name: 'Morris Markel death Florida 1963-1965',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Morris&q.surname=Markel&q.deathLikePlace=Florida&q.deathLikeDate.from=1963&q.deathLikeDate.to=1965'
    },
    {
      name: 'Helen Markel death RI 1975-1977',
      url: 'https://www.familysearch.org/search/record/results?q.givenName=Helen&q.surname=Markel&q.deathLikePlace=Rhode%20Island&q.deathLikeDate.from=1975&q.deathLikeDate.to=1977'
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
      name: 'Goldbaum Lisko all records',
      url: 'https://www.familysearch.org/search/record/results?q.surname=Goldbaum&q.anyPlace=Lisko'
    },
    {
      name: 'Markel West Warwick 1935 RI State Census',
      url: 'https://www.familysearch.org/search/record/results?q.surname=Markel&q.residencePlace=West%20Warwick%2C%20Rhode%20Island&f.collectionId=1529126'
    }
  ];

  const screenshotDir = 'C:/systep/autoresearch-genealogy/scripts/screenshots';
  fs.mkdirSync(screenshotDir, { recursive: true });

  const results = [];

  for (const search of searches) {
    console.log(`\n--- Searching: ${search.name} ---`);
    try {
      await page.goto(search.url, { waitUntil: 'networkidle', timeout: 45000 });
      await page.waitForTimeout(4000);

      // Get page text content for analysis
      const bodyText = await page.textContent('body').catch(() => '');

      // Check for access denied
      if (bodyText.includes('Access Denied') || bodyText.includes('blocked by our security')) {
        console.log('ACCESS DENIED - bot detection triggered');
        results.push({ name: search.name, error: 'Access Denied' });
        continue;
      }

      // Try to get result count from various selectors
      const resultText = await page.textContent('[data-testid="resultsCount"], .results-count, .search-count, #resultsCount').catch(() => null);
      console.log('Result count element:', resultText || 'not found');

      // Get first 500 chars of body to identify content
      const preview = bodyText.substring(0, 800).replace(/\s+/g, ' ').trim();
      console.log('Page preview:', preview.substring(0, 300));

      // Screenshot
      const fname = search.name.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 80);
      const screenshotPath = `${screenshotDir}/${fname}.png`;
      await page.screenshot({ path: screenshotPath, fullPage: false });
      console.log(`Screenshot: ${screenshotPath}`);

      results.push({ name: search.name, resultText, preview: preview.substring(0, 500) });
    } catch (err) {
      console.log(`Error: ${err.message}`);
      results.push({ name: search.name, error: err.message });
    }
  }

  // Save all results
  fs.writeFileSync(
    'C:/systep/autoresearch-genealogy/scripts/familysearch-results.json',
    JSON.stringify(results, null, 2)
  );
  console.log('\n\n=== All results saved to familysearch-results.json ===');
  console.log('Screenshots saved to scripts/screenshots/');
  console.log('Browser staying open for 10 minutes for manual exploration...');

  try {
    await page.waitForTimeout(600000);
  } catch (e) {
    // browser closed by user
  }
  await context.close();
})();
