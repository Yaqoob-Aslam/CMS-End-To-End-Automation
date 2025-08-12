# Test info

- Name: CMS Application End-to-End Tests >> Create a new subgroup
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:373:7

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Subgroups', exact: true })

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:374:70
```

# Test source

```ts
  274 | // // ✅ Select newly created group
  275 | // await page.locator('.css-19bb58m').click();
  276 | // await page.getByRole('option', { name: groupName }).click();
  277 |
  278 | // // Wait for "Add" button to be enabled and visible before clicking
  279 | // const managerAddButton = page.getByRole('button', { name: 'Add' });
  280 | // await managerAddButton.waitFor({ state: 'visible', timeout: 10000 });
  281 | // await expect(managerAddButton).toBeEnabled({ timeout: 10000 });
  282 | // await managerAddButton.click();
  283 | // await page.getByRole('button', { name: 'Done' }).click();
  284 | // console.log(`✅ Manager Created: ${uniqueFirstName} ${uniqueLastName}, Email: ${uniqueEmail}, Group: ${groupName}`);
  285 |
  286 | // // ✅ Logout
  287 | // await page.getByRole('button', { name: 'A', exact: true }).click();
  288 | // await page.getByRole('button', { name: 'Logout' }).click();
  289 | // await page.getByRole('button', { name: 'Yes' }).click();
  290 | // await page.waitForURL('**/login', { timeout: 60000 });
  291 | // console.log('✅ Logout successful');
  292 |
  293 | // await browser.close();
  294 | // });
  295 |
  296 | //--------------------------------------------------------------------------------------------------------------------------------------
  297 | import { test, expect } from '@playwright/test';
  298 | import { chromium } from 'playwright';
  299 | import fs from 'fs';
  300 | import path from 'path';
  301 | require('dotenv').config();
  302 |
  303 | test.describe('CMS Application End-to-End Tests', () => {
  304 |   let browser, context, page;
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
  344 |     await page.goto('https://moyai-cms.innov8.jp/login', { timeout: 90000 });
  345 |     if (!process.env.CMS_EMAIL || !process.env.CMS_PASSWORD) {
  346 |       throw new Error('Missing required environment variables: CMS_EMAIL and CMS_PASSWORD');
  347 |     }
  348 |     await page.getByRole('textbox', { name: 'Enter your email address' }).fill(process.env.CMS_EMAIL);
  349 |     await page.getByRole('textbox', { name: 'Enter your password' }).fill(process.env.CMS_PASSWORD);
  350 |     await page.getByRole('button', { name: 'Login' }).click();
  351 |     await expect(page).toHaveURL(/dashboard/, { timeout: 60000 });
  352 |   });
  353 |
  354 |   test('Login with invalid credentials', async () => {
  355 |     await page.goto('https://moyai-cms.innov8.jp/login', { timeout: 90000 });
  356 |     await page.getByRole('textbox', { name: 'Enter your email address' }).fill('invalid@email.com');
  357 |     await page.getByRole('textbox', { name: 'Enter your password' }).fill('wrongpassword');
  358 |     await page.getByRole('button', { name: 'Login' }).click();
  359 |     await expect(page.getByText('Invalid email or password')).toBeVisible({ timeout: 10000 });
  360 |   });
  361 |
  362 |   test('Create a new group', async () => {
  363 |     await page.getByRole('button', { name: 'Expand Icon' }).click();
  364 |     await page.getByRole('link', { name: 'Groups' }).click();
  365 |     await page.getByRole('listitem').filter({ hasText: /^Groups$/ }).getByRole('link').click();
  366 |     await page.getByRole('button', { name: '+ Add Group' }).click();
  367 |     await page.getByRole('textbox', { name: 'Enter group name' }).fill(groupName);
  368 |     await page.getByRole('button', { name: 'Add' }).click();
  369 |     await page.getByRole('button', { name: 'Done' }).click();
  370 |     await expect(page.getByText(groupName)).toBeVisible({ timeout: 10000 });
  371 |   });
  372 |
  373 |   test('Create a new subgroup', async () => {
> 374 |     await page.getByRole('link', { name: 'Subgroups', exact: true }).click();
      |                                                                      ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  375 |     await page.getByRole('button', { name: '+ Add Subgroup' }).click();
  376 |     await page.locator('.css-19bb58m').first().click();
  377 |     await page.getByRole('option', { name: groupName }).click();
  378 |     await page.getByRole('textbox', { name: 'Enter sub group name' }).fill(subGroupName);
  379 |     await page.getByRole('button', { name: 'Add' }).click();
  380 |     await page.getByRole('button', { name: 'Done' }).click();
  381 |     await expect(page.getByText(subGroupName)).toBeVisible({ timeout: 10000 });
  382 |   });
  383 |
  384 |   test('Create a new sub-subgroup', async () => {
  385 |     await page.getByRole('link', { name: 'Sub Subgroups' }).click();
  386 |     await page.getByRole('button', { name: '+ Add Sub Subgroup' }).click();
  387 |     await page.locator('.css-19bb58m').first().click();
  388 |     await page.getByRole('option', { name: groupName }).click();
  389 |     await page.locator('.css-35k6c7-control .css-19bb58m').click();
  390 |     await page.getByRole('option', { name: subGroupName }).waitFor({ state: 'visible', timeout: 10000 });
  391 |     await page.getByRole('option', { name: subGroupName }).click();
  392 |     await page.getByRole('textbox', { name: 'Enter sub subgroup name' }).fill(subSubGroupName);
  393 |     await page.getByRole('button', { name: 'Add' }).click();
  394 |     await page.getByRole('button', { name: 'Done' }).click();
  395 |     await expect(page.getByText(subSubGroupName)).toBeVisible({ timeout: 10000 });
  396 |   });
  397 |
  398 |   test('Create a new player', async () => {
  399 |     await page.getByRole('link', { name: 'Lan Manager' }).click();
  400 |     await page.getByRole('list').filter({ hasText: /^Players$/ }).getByRole('link').click();
  401 |     await page.getByRole('button', { name: '+ Add Player' }).click();
  402 |     await page.locator('.css-19bb58m').first().click();
  403 |     await page.getByRole('option', { name: groupName }).click();
  404 |     await page.waitForSelector('.css-35k6c7-control > .css-hlgwow > .css-19bb58m:not([aria-disabled="true"])', { timeout: 10000 });
  405 |     await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  406 |     await page.getByRole('option', { name: subGroupName }).click();
  407 |     await page.waitForSelector('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m:not([aria-disabled="true"])', { timeout: 10000 });
  408 |     await page.locator('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  409 |     await page.getByRole('option', { name: subSubGroupName }).click();
  410 |     await page.getByRole('textbox', { name: 'Enter player name' }).fill(playerName);
  411 |     await page.getByRole('button', { name: 'Add' }).click();
  412 |     await page.waitForSelector('text=Player added successfully.', { timeout: 15000 });
  413 |     await page.getByRole('button', { name: 'Done' }).click();
  414 |     await expect(page.getByText(playerName)).toBeVisible({ timeout: 10000 });
  415 |   });
  416 |
  417 |   test('Upload a video', async () => {
  418 |     const projectRoot = path.resolve(__dirname, '..');
  419 |     const videoDir = path.join(projectRoot, 'videos');
  420 |     const existingFiles = fs.existsSync(videoDir) ? fs.readdirSync(videoDir) : [];
  421 |     const firstVideo = existingFiles.find(file => file.endsWith('.mp4'));
  422 |     if (!firstVideo) {
  423 |       console.warn('⚠️ No video found in videos/ folder');
  424 |       test.skip();
  425 |       return;
  426 |     }
  427 |     const oldPath = path.join(videoDir, firstVideo);
  428 |     const newPath = path.join(videoDir, videoFileName);
  429 |     fs.renameSync(oldPath, newPath);
  430 |     await page.getByRole('link', { name: 'Contents' }).click();
  431 |     await page.getByRole('link', { name: 'Scenario' }).click();
  432 |     await page.getByRole('button', { name: 'All Videos' }).click();
  433 |     await page.getByRole('button', { name: '+ Add Videos' }).click();
  434 |     const videoPath = path.join(videoDir, videoFileName);
  435 |     if (!fs.existsSync(videoPath)) {
  436 |       throw new Error(`Video file not found: ${videoPath}`);
  437 |     }
  438 |     const stats = fs.statSync(videoPath);
  439 |     if (stats.size > 50 * 1024 * 1024) {
  440 |       throw new Error(`Video file exceeds 50MB: ${videoFileName}`);
  441 |     }
  442 |     await page.locator('input[type="file"]').setInputFiles(videoPath);
  443 |     await page.waitForSelector(`text=${videoFileName}`, { timeout: 180000 });
  444 |     await page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });
  445 |     const addVideoButton = page.getByRole('button', { name: 'Add' });
  446 |     await addVideoButton.waitFor({ state: 'visible', timeout: 30000 });
  447 |     await addVideoButton.click();
  448 |     const doneButton = page.getByRole('button', { name: 'Done' });
  449 |     await doneButton.waitFor({ state: 'visible', timeout: 30000 });
  450 |     await doneButton.click();
  451 |     await expect(page.getByText(videoFileName)).toBeVisible({ timeout: 10000 });
  452 |   });
  453 |
  454 |   test('Create a new scenario', async () => {
  455 |     await page.getByRole('button', { name: 'All Scenarios' }).click();
  456 |     await page.getByRole('button', { name: '+ Make Scenario' }).click();
  457 |     await page.getByRole('textbox', { name: 'Enter scenario name' }).fill(scenarioName);
  458 |     await page.locator('.css-19bb58m').click();
  459 |     await page.getByRole('option', { name: videoFileName }).click();
  460 |     const scenarioAddButton = page.getByRole('button', { name: 'Add' });
  461 |     await scenarioAddButton.waitFor({ state: 'visible', timeout: 15000 });
  462 |     await expect(scenarioAddButton).toBeEnabled({ timeout: 15000 });
  463 |     await scenarioAddButton.click();
  464 |     const scenarioDoneButton = page.getByRole('button', { name: 'Done' });
  465 |     await scenarioDoneButton.waitFor({ state: 'visible', timeout: 5000 });
  466 |     await scenarioDoneButton.click();
  467 |     await expect(page.getByText(scenarioName)).toBeVisible({ timeout: 10000 });
  468 |   });
  469 |
  470 |   test('Create a new timetable', async () => {
  471 |     await page.getByRole('link', { name: 'Time Table' }).click({ timeout: 10000 });
  472 |     await page.getByRole('button', { name: '+ Add Time Table' }).click();
  473 |     const now = new Date();
  474 |     const startTime = now.toTimeString().slice(0, 5);
```