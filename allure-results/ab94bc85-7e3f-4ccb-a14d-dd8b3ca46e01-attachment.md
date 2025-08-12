# Test info

- Name: CMS Application End-to-End Tests >> Create a new sub-subgroup
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:399:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Sub Subgroups' })

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:402:63
```

# Test source

```ts
  302 | test.describe('CMS Application End-to-End Tests', () => {
  303 |   let browser, context, page;
  304 |   const groupNumber = Math.floor(Math.random() * 100000);
  305 |   const groupName = `Group U${groupNumber}`;
  306 |   const subGroupName = `Subgroup U${groupNumber}`;
  307 |   const subSubGroupName = `Sub Subgroup U${groupNumber}`;
  308 |   const playerName = `Player U${groupNumber}`;
  309 |   const videoFileName = `test__${groupNumber}.mp4`;
  310 |   const scenarioName = `Scenario U${groupNumber}`;
  311 |   const timetableName = `Timetable U${groupNumber}`;
  312 |   const scheduleName = `Schedule U${groupNumber}`;
  313 |   const firstNames = ['Ali', 'Sara', 'Usman', 'Ayesha', 'Omar'];
  314 |   const lastNames = ['Khan', 'Malik', 'Sheikh', 'Qureshi', 'Butt'];
  315 |   const getRandomName = (arr) => arr[Math.floor(Math.random() * arr.length)];
  316 |   const uniqueFirstName = getRandomName(firstNames);
  317 |   const uniqueLastName = getRandomName(lastNames);
  318 |   const uniqueEmail = `${uniqueFirstName.toLowerCase()}.${uniqueLastName.toLowerCase()}${groupNumber}@mailinator.com`;
  319 |
  320 |   test.beforeAll(async () => {
  321 |     browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
  322 |     context = await browser.newContext({ viewport: null, deviceScaleFactor: undefined, });
  323 |     page = await context.newPage();
  324 |   });
  325 |
  326 |   test.afterAll(async () => {
  327 |     await browser.close();
  328 |   });
  329 |
  330 |   test('Login with valid credentials', async ({}, testInfo) => {
  331 |     test.slow();
  332 |     try {
  333 |       await page.goto('https://moyai-cms.innov8.jp/login', { timeout: 90000 });
  334 |       if (!process.env.CMS_EMAIL || !process.env.CMS_PASSWORD) {
  335 |         throw new Error('Missing required environment variables: CMS_EMAIL and CMS_PASSWORD');
  336 |       }
  337 |       await page.getByRole('textbox', { name: 'Enter your email address' }).fill(process.env.CMS_EMAIL);
  338 |       await page.getByRole('textbox', { name: 'Enter your password' }).fill(process.env.CMS_PASSWORD);
  339 |       await page.getByRole('button', { name: 'Login' }).click();
  340 |       await expect(page).toHaveURL(/dashboard/, { timeout: 60000 });
  341 |     } catch (error) {
  342 |       await testInfo.attach('error-screenshot', {
  343 |         body: await page.screenshot(),
  344 |         contentType: 'image/png',
  345 |       });
  346 |       throw error;
  347 |     }
  348 |   });
  349 |
  350 |   test('Login with invalid credentials', async () => {
  351 |     test.slow();
  352 |     await page.goto('https://moyai-cms.innov8.jp/login', { timeout: 90000 });
  353 |     await page.getByRole('textbox', { name: 'Enter your email address' }).fill('invalid@email.com');
  354 |     await page.getByRole('textbox', { name: 'Enter your password' }).fill('wrongpassword');
  355 |     await page.getByRole('button', { name: 'Login' }).click();
  356 |     await expect(page.getByText('Invalid email or password')).toBeVisible({ timeout: 10000 });
  357 |   });
  358 |
  359 |   test('Create a new group', async ({}, testInfo) => {
  360 |     test.slow();
  361 |     try {
  362 |       await page.getByRole('button', { name: 'Expand Icon' }).click();
  363 |       await page.getByRole('link', { name: 'Groups' }).click();
  364 |       await page.getByRole('listitem').filter({ hasText: /^Groups$/ }).getByRole('link').click();
  365 |       await page.getByRole('button', { name: '+ Add Group' }).click();
  366 |       await page.getByRole('textbox', { name: 'Enter group name' }).fill(groupName);
  367 |       await page.getByRole('button', { name: 'Add' }).click();
  368 |       await page.getByRole('button', { name: 'Done' }).click();
  369 |       await expect(page.getByText(groupName)).toBeVisible({ timeout: 10000 });
  370 |     } catch (error) {
  371 |       await testInfo.attach('error-screenshot', {
  372 |         body: await page.screenshot(),
  373 |         contentType: 'image/png',
  374 |       });
  375 |       throw error;
  376 |     }
  377 |   });
  378 |
  379 |   test('Create a new subgroup', async ({}, testInfo) => {
  380 |     test.slow();
  381 |     try {
  382 |       await page.getByRole('link', { name: 'Subgroups', exact: true }).click();
  383 |       await page.getByRole('button', { name: '+ Add Subgroup' }).click();
  384 |       await page.locator('.css-19bb58m').first().click();
  385 |       await page.getByRole('option', { name: groupName }).click();
  386 |       await page.getByRole('textbox', { name: 'Enter sub group name' }).fill(subGroupName);
  387 |       await page.getByRole('button', { name: 'Add' }).click();
  388 |       await page.getByRole('button', { name: 'Done' }).click();
  389 |       await expect(page.getByText(subGroupName)).toBeVisible({ timeout: 10000 });
  390 |     } catch (error) {
  391 |       await testInfo.attach('error-screenshot', {
  392 |         body: await page.screenshot(),
  393 |         contentType: 'image/png',
  394 |       });
  395 |       throw error;
  396 |     }
  397 |   });
  398 |
  399 |   test('Create a new sub-subgroup', async ({}, testInfo) => {
  400 |     test.slow();
  401 |     try {
> 402 |       await page.getByRole('link', { name: 'Sub Subgroups' }).click();
      |                                                               ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  403 |       await page.getByRole('button', { name: '+ Add Sub Subgroup' }).click();
  404 |       await page.locator('.css-19bb58m').first().click();
  405 |       await page.getByRole('option', { name: groupName }).click();
  406 |       await page.locator('.css-35k6c7-control .css-19bb58m').click();
  407 |       await page.getByRole('option', { name: subGroupName }).waitFor({ state: 'visible', timeout: 10000 });
  408 |       await page.getByRole('option', { name: subGroupName }).click();
  409 |       await page.getByRole('textbox', { name: 'Enter sub subgroup name' }).fill(subSubGroupName);
  410 |       await page.getByRole('button', { name: 'Add' }).click();
  411 |       await page.getByRole('button', { name: 'Done' }).click();
  412 |       await expect(page.getByText(subSubGroupName)).toBeVisible({ timeout: 10000 });
  413 |     } catch (error) {
  414 |       await testInfo.attach('error-screenshot', {
  415 |         body: await page.screenshot(),
  416 |         contentType: 'image/png',
  417 |       });
  418 |       throw error;
  419 |     }
  420 |   });
  421 |
  422 |   test('Create a new player', async ({}, testInfo) => {
  423 |     test.slow();
  424 |     try {
  425 |       await page.getByRole('link', { name: 'Lan Manager' }).click();
  426 |       await page.getByRole('list').filter({ hasText: /^Players$/ }).getByRole('link').click();
  427 |       await page.getByRole('button', { name: '+ Add Player' }).click();
  428 |       await page.locator('.css-19bb58m').first().click();
  429 |       await page.getByRole('option', { name: groupName }).click();
  430 |       await page.waitForSelector('.css-35k6c7-control > .css-hlgwow > .css-19bb58m:not([aria-disabled="true"])', { timeout: 10000 });
  431 |       await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  432 |       await page.getByRole('option', { name: subGroupName }).click();
  433 |       await page.waitForSelector('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m:not([aria-disabled="true"])', { timeout: 10000 });
  434 |       await page.locator('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  435 |       await page.getByRole('option', { name: subSubGroupName }).click();
  436 |       await page.getByRole('textbox', { name: 'Enter player name' }).fill(playerName);
  437 |       await page.getByRole('button', { name: 'Add' }).click();
  438 |       await page.waitForSelector('text=Player added successfully.', { timeout: 15000 });
  439 |       await page.getByRole('button', { name: 'Done' }).click();
  440 |       await expect(page.getByText(playerName)).toBeVisible({ timeout: 10000 });
  441 |     } catch (error) {
  442 |       await testInfo.attach('error-screenshot', {
  443 |         body: await page.screenshot(),
  444 |         contentType: 'image/png',
  445 |       });
  446 |       throw error;
  447 |     }
  448 |   });
  449 |
  450 |   test('Upload a video', async ({}, testInfo) => {
  451 |     test.slow();
  452 |     try {
  453 |       const projectRoot = path.resolve(__dirname, '..');
  454 |       const videoDir = path.join(projectRoot, 'videos');
  455 |       const existingFiles = fs.existsSync(videoDir) ? fs.readdirSync(videoDir) : [];
  456 |       const firstVideo = existingFiles.find(file => file.endsWith('.mp4'));
  457 |       if (!firstVideo) {
  458 |         throw new Error('No video found in videos/ folder');
  459 |       }
  460 |       const oldPath = path.join(videoDir, firstVideo);
  461 |       const newPath = path.join(videoDir, videoFileName);
  462 |       fs.renameSync(oldPath, newPath);
  463 |       await page.getByRole('link', { name: 'Contents' }).click();
  464 |       await page.getByRole('link', { name: 'Scenario' }).click();
  465 |       await page.getByRole('button', { name: 'All Videos' }).click();
  466 |       await page.getByRole('button', { name: '+ Add Videos' }).click();
  467 |       const videoPath = path.join(videoDir, videoFileName);
  468 |       if (!fs.existsSync(videoPath)) {
  469 |         throw new Error(`Video file not found: ${videoPath}`);
  470 |       }
  471 |       const stats = fs.statSync(videoPath);
  472 |       if (stats.size > 50 * 1024 * 1024) {
  473 |         throw new Error(`Video file exceeds 50MB: ${videoFileName}`);
  474 |       }
  475 |       await page.locator('input[type="file"]').setInputFiles(videoPath);
  476 |       await page.waitForSelector(`text=${videoFileName}`, { timeout: 180000 });
  477 |       await page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });
  478 |       const addVideoButton = page.getByRole('button', { name: 'Add' });
  479 |       await addVideoButton.waitFor({ state: 'visible', timeout: 30000 });
  480 |       await addVideoButton.click();
  481 |       const doneButton = page.getByRole('button', { name: 'Done' });
  482 |       await doneButton.waitFor({ state: 'visible', timeout: 30000 });
  483 |       await doneButton.click();
  484 |       await expect(page.getByText(videoFileName)).toBeVisible({ timeout: 10000 });
  485 |     } catch (error) {
  486 |       await testInfo.attach('error-screenshot', {
  487 |         body: await page.screenshot(),
  488 |         contentType: 'image/png',
  489 |       });
  490 |       throw error;
  491 |     }
  492 |   });
  493 |
  494 |   test('Create a new scenario', async ({}, testInfo) => {
  495 |     test.slow();
  496 |     try {
  497 |       await page.getByRole('button', { name: 'All Scenarios' }).click();
  498 |       await page.getByRole('button', { name: '+ Make Scenario' }).click();
  499 |       await page.getByRole('textbox', { name: 'Enter scenario name' }).fill(scenarioName);
  500 |       await page.locator('.css-19bb58m').click();
  501 |       await page.getByRole('option', { name: videoFileName }).click();
  502 |       const scenarioAddButton = page.getByRole('button', { name: 'Add' });
```