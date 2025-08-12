# Test info

- Name: Create Player
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:389:5

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Lan Manager' })

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:390:57
```

# Test source

```ts
  290 | // await page.waitForURL('**/login', { timeout: 60000 });
  291 | // console.log('✅ Logout successful');
  292 |
  293 | // await browser.close();
  294 | // });
  295 |
  296 | //--------------------------------------------------------------------------------------------------------------------------------------
  297 |
  298 | import { test, expect } from '@playwright/test';
  299 | import { chromium } from 'playwright';
  300 | import fs from 'fs';
  301 | import path from 'path';
  302 | import dotenv from 'dotenv';
  303 |
  304 | dotenv.config();
  305 |
  306 | let browser, context, page;
  307 | let groupNumber, groupName, subGroupName, subSubGroupName, playerName, videoFileName, scenarioName, timetableName, scheduleName;
  308 | let videoDir, videoPath;
  309 |
  310 | test.beforeAll(async () => {
  311 |   groupNumber = Math.floor(Math.random() * 100000);
  312 |   groupName = `Group U${groupNumber}`;
  313 |   subGroupName = `Subgroup U${groupNumber}`;
  314 |   subSubGroupName = `Sub Subgroup U${groupNumber}`;
  315 |   playerName = `Player U${groupNumber}`;
  316 |   videoFileName = `test__${groupNumber}.mp4`;
  317 |   scenarioName = `Scenario U${groupNumber}`;
  318 |   timetableName = `Timetable U${groupNumber}`;
  319 |   scheduleName = `Schedule U${groupNumber}`;
  320 |
  321 |   const projectRoot = path.resolve(__dirname, '..');
  322 |   videoDir = path.join(projectRoot, 'videos');
  323 |
  324 |   const existingFiles = fs.existsSync(videoDir) ? fs.readdirSync(videoDir) : [];
  325 |   const firstVideo = existingFiles.find(file => file.endsWith('.mp4'));
  326 |   if (!firstVideo) throw new Error('⚠️ No video found in videos/ folder');
  327 |
  328 |   fs.renameSync(path.join(videoDir, firstVideo), path.join(videoDir, videoFileName));
  329 |
  330 |   browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
  331 |   context = await browser.newContext({ viewport: null, deviceScaleFactor: undefined });
  332 |   page = await context.newPage();
  333 | });
  334 |
  335 | test.afterAll(async () => {
  336 |   await browser.close();
  337 | });
  338 |
  339 | // 1️⃣ Login Test
  340 | test('Login to CMS', async () => {
  341 |   await page.goto('https://moyai-cms.innov8.jp/login', { timeout: 90000 });
  342 |
  343 |   if (!process.env.CMS_EMAIL || !process.env.CMS_PASSWORD) {
  344 |     throw new Error('Missing required environment variables: CMS_EMAIL and CMS_PASSWORD');
  345 |   }
  346 |
  347 |   await page.getByRole('textbox', { name: 'Enter your email address' }).fill(process.env.CMS_EMAIL);
  348 |   await page.getByRole('textbox', { name: 'Enter your password' }).fill(process.env.CMS_PASSWORD);
  349 |   await page.getByRole('button', { name: 'Login' }).click();
  350 |   await page.waitForURL('**/dashboard', { timeout: 60000 });
  351 | });
  352 |
  353 | // 2️⃣ Create Group
  354 | test('Create Group', async () => {
  355 |   await page.getByRole('button', { name: 'Expand Icon' }).click();
  356 |   await page.getByRole('link', { name: 'Groups' }).click();
  357 |   await page.getByRole('listitem').filter({ hasText: /^Groups$/ }).getByRole('link').click();
  358 |   await page.getByRole('button', { name: '+ Add Group' }).click();
  359 |   await page.getByRole('textbox', { name: 'Enter group name' }).fill(groupName);
  360 |   await page.getByRole('button', { name: 'Add' }).click();
  361 |   await page.getByRole('button', { name: 'Done' }).click();
  362 | });
  363 |
  364 | // 3️⃣ Create Subgroup
  365 | test('Create Subgroup', async () => {
  366 |   await page.getByRole('link', { name: 'Subgroups', exact: true }).click();
  367 |   await page.getByRole('button', { name: '+ Add Subgroup' }).click();
  368 |   await page.locator('.css-19bb58m').first().click();
  369 |   await page.getByRole('option', { name: groupName }).click();
  370 |   await page.getByRole('textbox', { name: 'Enter sub group name' }).fill(subGroupName);
  371 |   await page.getByRole('button', { name: 'Add' }).click();
  372 |   await page.getByRole('button', { name: 'Done' }).click();
  373 | });
  374 |
  375 | // 4️⃣ Create Sub Subgroup
  376 | test('Create Sub Subgroup', async () => {
  377 |   await page.getByRole('link', { name: 'Sub Subgroups' }).click();
  378 |   await page.getByRole('button', { name: '+ Add Sub Subgroup' }).click();
  379 |   await page.locator('.css-19bb58m').first().click();
  380 |   await page.getByRole('option', { name: groupName }).click();
  381 |   await page.locator('.css-35k6c7-control .css-19bb58m').click();
  382 |   await page.getByRole('option', { name: subGroupName }).click();
  383 |   await page.getByRole('textbox', { name: 'Enter sub subgroup name' }).fill(subSubGroupName);
  384 |   await page.getByRole('button', { name: 'Add' }).click();
  385 |   await page.getByRole('button', { name: 'Done' }).click();
  386 | });
  387 |
  388 | // 5️⃣ Create Player
  389 | test('Create Player', async () => {
> 390 |   await page.getByRole('link', { name: 'Lan Manager' }).click();
      |                                                         ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  391 |   await page.getByRole('list').filter({ hasText: /^Players$/ }).getByRole('link').click();
  392 |   await page.getByRole('button', { name: '+ Add Player' }).click();
  393 |   await page.locator('.css-19bb58m').first().click();
  394 |   await page.getByRole('option', { name: groupName }).click();
  395 |   await page.waitForSelector('.css-35k6c7-control > .css-hlgwow > .css-19bb58m:not([aria-disabled="true"])', { timeout: 10000 });
  396 |   await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  397 |   await page.getByRole('option', { name: subGroupName }).click();
  398 |   await page.waitForSelector('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m:not([aria-disabled="true"])', { timeout: 10000 });
  399 |   await page.locator('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  400 |   await page.getByRole('option', { name: subSubGroupName }).click();
  401 |   await page.getByRole('textbox', { name: 'Enter player name' }).fill(playerName);
  402 |   await page.getByRole('button', { name: 'Add' }).click();
  403 |   await page.waitForSelector('text=Player added successfully.', { timeout: 15000 });
  404 |   await page.getByRole('button', { name: 'Done' }).click();
  405 | });
  406 |
  407 | // 6️⃣ Upload Video
  408 | test('Upload Video', async () => {
  409 |   videoPath = path.join(videoDir, videoFileName);
  410 |
  411 |   if (!fs.existsSync(videoPath)) {
  412 |     throw new Error(`Video file not found: ${videoPath}`);
  413 |   }
  414 |   const stats = fs.statSync(videoPath);
  415 |   if (stats.size > 50 * 1024 * 1024) {
  416 |     throw new Error(`Video file exceeds 50MB: ${videoFileName}`);
  417 |   }
  418 |
  419 |   await page.getByRole('link', { name: 'Contents' }).click();
  420 |   await page.getByRole('link', { name: 'Scenario' }).click();
  421 |   await page.getByRole('button', { name: 'All Videos' }).click();
  422 |   await page.getByRole('button', { name: '+ Add Videos' }).click();
  423 |   await page.locator('input[type="file"]').setInputFiles(videoPath);
  424 |
  425 |   await page.waitForSelector(`text=${videoFileName}`, { timeout: 180000 });
  426 |   await page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });
  427 |
  428 |   const addVideoButton = page.getByRole('button', { name: 'Add' });
  429 |   await addVideoButton.waitFor({ state: 'visible', timeout: 30000 });
  430 |   await addVideoButton.click();
  431 |
  432 |   const doneButton = page.getByRole('button', { name: 'Done' });
  433 |   await doneButton.waitFor({ state: 'visible', timeout: 30000 });
  434 |   await doneButton.click();
  435 | });
  436 |
  437 | // 7️⃣ Create Scenario
  438 | test('Create Scenario', async () => {
  439 |   await page.getByRole('button', { name: 'All Scenarios' }).click();
  440 |   await page.getByRole('button', { name: '+ Make Scenario' }).click();
  441 |   await page.getByRole('textbox', { name: 'Enter scenario name' }).fill(scenarioName);
  442 |   await page.locator('.css-19bb58m').click();
  443 |   await page.getByRole('option', { name: videoFileName }).click();
  444 |
  445 |   const scenarioAddButton = page.getByRole('button', { name: 'Add' });
  446 |   await scenarioAddButton.waitFor({ state: 'visible', timeout: 15000 });
  447 |   await expect(scenarioAddButton).toBeEnabled({ timeout: 15000 });
  448 |   await scenarioAddButton.click();
  449 |
  450 |   const scenarioDoneButton = page.getByRole('button', { name: 'Done' });
  451 |   await scenarioDoneButton.waitFor({ state: 'visible', timeout: 5000 });
  452 |   await scenarioDoneButton.click();
  453 | });
  454 |
  455 | // 8️⃣ Create Timetable
  456 | test('Create Timetable', async () => {
  457 |   const now = new Date();
  458 |   const startTime = now.toTimeString().slice(0, 5);
  459 |   const endTime = new Date(now.getTime() + 5 * 60000).toTimeString().slice(0, 5);
  460 |
  461 |   await page.getByRole('link', { name: 'Time Table' }).click({ timeout: 10000 });
  462 |   await page.getByRole('button', { name: '+ Add Time Table' }).click();
  463 |   await page.getByRole('textbox', { name: 'Enter time table name' }).fill(timetableName);
  464 |   await page.locator('.css-19bb58m').click();
  465 |   await page.getByRole('option', { name: scenarioName }).click();
  466 |   await page.getByPlaceholder('Select start time').fill(startTime);
  467 |   await page.getByPlaceholder('Select end time').fill(endTime);
  468 |   await page.getByRole('button', { name: 'Add' }).click();
  469 |   await page.getByRole('button', { name: 'Done' }).click();
  470 | });
  471 |
  472 | // 9️⃣ Create Schedule
  473 | test('Create Schedule', async () => {
  474 |   const today = new Date().getDate().toString();
  475 |
  476 |   await page.getByRole('link', { name: 'Schedule' }).click();
  477 |   await page.getByRole('button', { name: '+ Add Schedule' }).click();
  478 |   await page.getByRole('textbox', { name: 'Enter schedule name' }).fill(scheduleName);
  479 |   await page.locator('.css-19bb58m').click();
  480 |   await page.getByRole('option', { name: timetableName }).click();
  481 |
  482 |   await page.getByRole('textbox', { name: 'Select start date' }).click();
  483 |   await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
  484 |   await page.getByRole('textbox', { name: 'Select end date' }).click();
  485 |   await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
  486 |
  487 |   const addButton = page.getByRole('button', { name: 'Add' });
  488 |   await addButton.waitFor({ state: 'visible', timeout: 10000 });
  489 |   await addButton.click();
  490 |
```