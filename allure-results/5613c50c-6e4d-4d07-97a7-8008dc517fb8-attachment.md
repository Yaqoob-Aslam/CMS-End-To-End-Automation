# Test info

- Name: CMS Application End-to-End Tests >> Create a new player
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:403:7

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Lan Manager' })

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:405:59
```

# Test source

```ts
  305 |   const groupNumber = Math.floor(Math.random() * 100000);
  306 |   const groupName = `Group U${groupNumber}`;
  307 |   const subGroupName = `Subgroup U${groupNumber}`;
  308 |   const subSubGroupName = `Sub Subgroup U${groupNumber}`;
  309 |   const playerName = `Player U${groupNumber}`;
  310 |   const videoFileName = `test__${groupNumber}.mp4`;
  311 |   const scenarioName = `Scenario U${groupNumber}`;
  312 |   const timetableName = `Timetable U${groupNumber}`;
  313 |   const scheduleName = `Schedule U${groupNumber}`;
  314 |   const firstNames = ['Ali', 'Sara', 'Usman', 'Ayesha', 'Omar', 'Fatima', 'Bilal', 'Hira', 'Zain', 'Zara'];
  315 |   const lastNames = ['Khan', 'Malik', 'Sheikh', 'Qureshi', 'Butt', 'Raza', 'Shah', 'Chaudhry', 'Hussain', 'Mirza'];
  316 |   const getRandomName = (arr) => arr[Math.floor(Math.random() * arr.length)];
  317 |   const uniqueFirstName = getRandomName(firstNames);
  318 |   const uniqueLastName = getRandomName(lastNames);
  319 |   const uniqueEmail = `${uniqueFirstName.toLowerCase()}.${uniqueLastName.toLowerCase()}${groupNumber}@mailinator.com`;
  320 |
  321 |   // Setup before all tests
  322 |   test.beforeAll(async () => {
  323 |     browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
  324 |     context = await browser.newContext({ viewport: null, deviceScaleFactor: undefined });
  325 |     page = await context.newPage();
  326 |   });
  327 |
  328 |   // Teardown after all tests
  329 |   test.afterAll(async () => {
  330 |     await browser.close();
  331 |   });
  332 |
  333 |   // Attach screenshot on test failure
  334 |   test.afterEach(async ({}, testInfo) => {
  335 |     if (testInfo.status === 'failed') {
  336 |       await testInfo.attach('error-screenshot', {
  337 |         body: await page.screenshot(),
  338 |         contentType: 'image/png',
  339 |       });
  340 |     }
  341 |   });
  342 |
  343 |   test('Login with valid credentials', async () => {
  344 |     test.slow();
  345 |     await page.goto('https://moyai-cms.innov8.jp/login', { timeout: 90000 });
  346 |     if (!process.env.CMS_EMAIL || !process.env.CMS_PASSWORD) {
  347 |       throw new Error('Missing required environment variables: CMS_EMAIL and CMS_PASSWORD');
  348 |     }
  349 |     await page.getByRole('textbox', { name: 'Enter your email address' }).fill(process.env.CMS_EMAIL);
  350 |     await page.getByRole('textbox', { name: 'Enter your password' }).fill(process.env.CMS_PASSWORD);
  351 |     await page.getByRole('button', { name: 'Login' }).click();
  352 |     await expect(page).toHaveURL(/dashboard/, { timeout: 60000 });
  353 |   });
  354 |
  355 |   test('Login with invalid credentials', async () => {
  356 |     test.slow();
  357 |     await page.goto('https://moyai-cms.innov8.jp/login', { timeout: 90000 });
  358 |     await page.getByRole('textbox', { name: 'Enter your email address' }).fill('invalid@email.com');
  359 |     await page.getByRole('textbox', { name: 'Enter your password' }).fill('wrongpassword');
  360 |     await page.getByRole('button', { name: 'Login' }).click();
  361 |     await expect(page.getByText('Invalid email or password')).toBeVisible({ timeout: 10000 });
  362 |   });
  363 |
  364 |   test('Create a new group', async () => {
  365 |     test.slow();
  366 |     await page.getByRole('button', { name: 'Expand Icon' }).click();
  367 |     await page.getByRole('link', { name: 'Groups' }).click();
  368 |     await page.getByRole('listitem').filter({ hasText: /^Groups$/ }).getByRole('link').click();
  369 |     await page.getByRole('button', { name: '+ Add Group' }).click();
  370 |     await page.getByRole('textbox', { name: 'Enter group name' }).fill(groupName);
  371 |     await page.getByRole('button', { name: 'Add' }).click();
  372 |     await page.getByRole('button', { name: 'Done' }).click();
  373 |     await expect(page.getByText(groupName)).toBeVisible({ timeout: 10000 });
  374 |   });
  375 |
  376 |   test('Create a new subgroup', async () => {
  377 |     test.slow();
  378 |     await page.getByRole('link', { name: 'Subgroups', exact: true }).click();
  379 |     await page.getByRole('button', { name: '+ Add Subgroup' }).click();
  380 |     await page.locator('.css-19bb58m').first().click();
  381 |     await page.getByRole('option', { name: groupName }).click();
  382 |     await page.getByRole('textbox', { name: 'Enter sub group name' }).fill(subGroupName);
  383 |     await page.getByRole('button', { name: 'Add' }).click();
  384 |     await page.getByRole('button', { name: 'Done' }).click();
  385 |     await expect(page.getByText(subGroupName)).toBeVisible({ timeout: 10000 });
  386 |   });
  387 |
  388 |   test('Create a new sub-subgroup', async () => {
  389 |     test.slow();
  390 |     await page.getByRole('link', { name: 'Sub Subgroups' }).click();
  391 |     await page.getByRole('button', { name: '+ Add Sub Subgroup' }).click();
  392 |     await page.locator('.css-19bb58m').first().click();
  393 |     await page.getByRole('option', { name: groupName }).click();
  394 |     await page.locator('.css-35k6c7-control .css-19bb58m').click();
  395 |     await page.getByRole('option', { name: subGroupName }).waitFor({ state: 'visible', timeout: 10000 });
  396 |     await page.getByRole('option', { name: subGroupName }).click();
  397 |     await page.getByRole('textbox', { name: 'Enter sub subgroup name' }).fill(subSubGroupName);
  398 |     await page.getByRole('button', { name: 'Add' }).click();
  399 |     await page.getByRole('button', { name: 'Done' }).click();
  400 |     await expect(page.getByText(subSubGroupName)).toBeVisible({ timeout: 10000 });
  401 |   });
  402 |
  403 |   test('Create a new player', async () => {
  404 |     test.slow();
> 405 |     await page.getByRole('link', { name: 'Lan Manager' }).click();
      |                                                           ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  406 |     await page.getByRole('list').filter({ hasText: /^Players$/ }).getByRole('link').click();
  407 |     await page.getByRole('button', { name: '+ Add Player' }).click();
  408 |     await page.locator('.css-19bb58m').first().click();
  409 |     await page.getByRole('option', { name: groupName }).click();
  410 |     await page.waitForSelector('.css-35k6c7-control > .css-hlgwow > .css-19bb58m:not([aria-disabled="true"])', { timeout: 10000 });
  411 |     await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  412 |     await page.getByRole('option', { name: subGroupName }).click();
  413 |     await page.waitForSelector('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m:not([aria-disabled="true"])', { timeout: 10000 });
  414 |     await page.locator('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  415 |     await page.getByRole('option', { name: subSubGroupName }).click();
  416 |     await page.getByRole('textbox', { name: 'Enter player name' }).fill(playerName);
  417 |     await page.getByRole('button', { name: 'Add' }).click();
  418 |     await page.waitForSelector('text=Player added successfully.', { timeout: 15000 });
  419 |     await page.getByRole('button', { name: 'Done' }).click();
  420 |     await expect(page.getByText(playerName)).toBeVisible({ timeout: 10000 });
  421 |   });
  422 |
  423 |   test('Upload a video', async () => {
  424 |     test.slow();
  425 |     const projectRoot = path.resolve(__dirname, '..');
  426 |     const videoDir = path.join(projectRoot, 'videos');
  427 |     const existingFiles = fs.existsSync(videoDir) ? fs.readdirSync(videoDir) : [];
  428 |     const firstVideo = existingFiles.find(file => file.endsWith('.mp4'));
  429 |     if (!firstVideo) {
  430 |       console.warn('⚠️ No video found in videos/ folder');
  431 |       test.skip();
  432 |       return;
  433 |     }
  434 |     const oldPath = path.join(videoDir, firstVideo);
  435 |     const newPath = path.join(videoDir, videoFileName);
  436 |     fs.renameSync(oldPath, newPath);
  437 |     await page.getByRole('link', { name: 'Contents' }).click();
  438 |     await page.getByRole('link', { name: 'Scenario' }).click();
  439 |     await page.getByRole('button', { name: 'All Videos' }).click();
  440 |     await page.getByRole('button', { name: '+ Add Videos' }).click();
  441 |     const videoPath = path.join(videoDir, videoFileName);
  442 |     if (!fs.existsSync(videoPath)) {
  443 |       throw new Error(`Video file not found: ${videoPath}`);
  444 |     }
  445 |     const stats = fs.statSync(videoPath);
  446 |     if (stats.size > 50 * 1024 * 1024) {
  447 |       throw new Error(`Video file exceeds 50MB: ${videoFileName}`);
  448 |     }
  449 |     await page.locator('input[type="file"]').setInputFiles(videoPath);
  450 |     await page.waitForSelector(`text=${videoFileName}`, { timeout: 180000 });
  451 |     await page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });
  452 |     const addVideoButton = page.getByRole('button', { name: 'Add' });
  453 |     await addVideoButton.waitFor({ state: 'visible', timeout: 30000 });
  454 |     await addVideoButton.click();
  455 |     const doneButton = page.getByRole('button', { name: 'Done' });
  456 |     await doneButton.waitFor({ state: 'visible', timeout: 30000 });
  457 |     await doneButton.click();
  458 |     await expect(page.getByText(videoFileName)).toBeVisible({ timeout: 10000 });
  459 |   });
  460 |
  461 |   test('Create a new scenario', async () => {
  462 |     test.slow();
  463 |     await page.getByRole('button', { name: 'All Scenarios' }).click();
  464 |     await page.getByRole('button', { name: '+ Make Scenario' }).click();
  465 |     await page.getByRole('textbox', { name: 'Enter scenario name' }).fill(scenarioName);
  466 |     await page.locator('.css-19bb58m').click();
  467 |     await page.getByRole('option', { name: videoFileName }).click();
  468 |     const scenarioAddButton = page.getByRole('button', { name: 'Add' });
  469 |     await scenarioAddButton.waitFor({ state: 'visible', timeout: 15000 });
  470 |     await expect(scenarioAddButton).toBeEnabled({ timeout: 15000 });
  471 |     await scenarioAddButton.click();
  472 |     const scenarioDoneButton = page.getByRole('button', { name: 'Done' });
  473 |     await scenarioDoneButton.waitFor({ state: 'visible', timeout: 5000 });
  474 |     await scenarioDoneButton.click();
  475 |     await expect(page.getByText(scenarioName)).toBeVisible({ timeout: 10000 });
  476 |   });
  477 |
  478 |   test('Create a new timetable', async () => {
  479 |     test.slow();
  480 |     await page.getByRole('link', { name: 'Time Table' }).click({ timeout: 10000 });
  481 |     await page.getByRole('button', { name: '+ Add Time Table' }).click();
  482 |     const now = new Date();
  483 |     const startTime = now.toTimeString().slice(0, 5);
  484 |     const endDate = new Date(now.getTime() + 5 * 60000);
  485 |     const endTime = endDate.toTimeString().slice(0, 5);
  486 |     await page.getByRole('textbox', { name: 'Enter time table name' }).click();
  487 |     await page.getByRole('textbox', { name: 'Enter time table name' }).fill(timetableName);
  488 |     await page.locator('.css-19bb58m').click();
  489 |     await page.getByRole('option', { name: scenarioName }).click();
  490 |     await page.getByPlaceholder('Select start time').click();
  491 |     await page.getByPlaceholder('Select start time').fill(startTime);
  492 |     await page.getByPlaceholder('Select end time').click();
  493 |     await page.getByPlaceholder('Select end time').fill(endTime);
  494 |     await page.getByRole('button', { name: 'Add' }).click();
  495 |     await page.getByRole('button', { name: 'Done' }).click();
  496 |     await expect(page.getByText(timetableName)).toBeVisible({ timeout: 10000 });
  497 |   });
  498 |
  499 |   test('Create a new schedule', async () => {
  500 |     test.slow();
  501 |     await page.getByRole('link', { name: 'Schedule' }).click();
  502 |     await page.getByRole('button', { name: '+ Add Schedule' }).click();
  503 |     await page.getByRole('textbox', { name: 'Enter schedule name' }).fill(scheduleName);
  504 |     await page.locator('.css-19bb58m').click();
  505 |     await page.getByRole('option', { name: timetableName }).click();
```