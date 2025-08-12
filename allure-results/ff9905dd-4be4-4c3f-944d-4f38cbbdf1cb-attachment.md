# Test info

- Name: Create Subgroup
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:373:5

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Subgroups', exact: true })

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:374:68
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
  296 | // //--------------------------------------------------------------------------------------------------------------------------------------
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
  307 | let groupNumber, groupName, subGroupName, subSubGroupName, playerName;
  308 | let videoFileName, scenarioName, timetableName, scheduleName;
  309 | let videoDir, videoPath;
  310 |
  311 | // Utility: generate random number and names
  312 | function generateUniqueNames() {
  313 |   groupNumber = Math.floor(Math.random() * 100000);
  314 |   groupName = `Group U${groupNumber}`;
  315 |   subGroupName = `Subgroup U${groupNumber}`;
  316 |   subSubGroupName = `Sub Subgroup U${groupNumber}`;
  317 |   playerName = `Player U${groupNumber}`;
  318 |   videoFileName = `test__${groupNumber}.mp4`;
  319 |   scenarioName = `Scenario U${groupNumber}`;
  320 |   timetableName = `Timetable U${groupNumber}`;
  321 |   scheduleName = `Schedule U${groupNumber}`;
  322 | }
  323 |
  324 | test.beforeAll(async () => {
  325 |   generateUniqueNames();
  326 |   const projectRoot = path.resolve(__dirname, '..');
  327 |   videoDir = path.join(projectRoot, 'videos');
  328 |
  329 |   const existingFiles = fs.existsSync(videoDir) ? fs.readdirSync(videoDir) : [];
  330 |   const firstVideo = existingFiles.find(file => file.endsWith('.mp4'));
  331 |   if (!firstVideo) throw new Error('⚠️ No video found in videos/ folder');
  332 |
  333 |   const oldPath = path.join(videoDir, firstVideo);
  334 |   const newPath = path.join(videoDir, videoFileName);
  335 |   fs.renameSync(oldPath, newPath);
  336 |   videoPath = path.join(videoDir, videoFileName);
  337 |
  338 |   browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
  339 |   context = await browser.newContext({ viewport: null, deviceScaleFactor: undefined });
  340 |   page = await context.newPage();
  341 | });
  342 |
  343 | test.afterAll(async () => {
  344 |   await browser.close();
  345 | });
  346 |
  347 | // 1️⃣ Login
  348 | test('Login to CMS', async () => {
  349 |   await page.goto('https://moyai-cms.innov8.jp/login', { timeout: 90000 });
  350 |
  351 |   if (!process.env.CMS_EMAIL || !process.env.CMS_PASSWORD) {
  352 |     throw new Error('Missing required environment variables: CMS_EMAIL and CMS_PASSWORD');
  353 |   }
  354 |
  355 |   await page.getByRole('textbox', { name: 'Enter your email address' }).fill(process.env.CMS_EMAIL);
  356 |   await page.getByRole('textbox', { name: 'Enter your password' }).fill(process.env.CMS_PASSWORD);
  357 |   await page.getByRole('button', { name: 'Login' }).click();
  358 |   await page.waitForURL('**/dashboard', { timeout: 60000 });
  359 | });
  360 |
  361 | // 2️⃣ Create Group
  362 | test('Create Group', async () => {
  363 |   await page.getByRole('button', { name: 'Expand Icon' }).click();
  364 |   await page.getByRole('link', { name: 'Groups' }).click();
  365 |   await page.getByRole('listitem').filter({ hasText: /^Groups$/ }).getByRole('link').click();
  366 |   await page.getByRole('button', { name: '+ Add Group' }).click();
  367 |   await page.getByRole('textbox', { name: 'Enter group name' }).fill(groupName);
  368 |   await page.getByRole('button', { name: 'Add' }).click();
  369 |   await page.getByRole('button', { name: 'Done' }).click();
  370 | });
  371 |
  372 | // 3️⃣ Create Subgroup
  373 | test('Create Subgroup', async () => {
> 374 |   await page.getByRole('link', { name: 'Subgroups', exact: true }).click();
      |                                                                    ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  375 |   await page.getByRole('button', { name: '+ Add Subgroup' }).click();
  376 |   await page.locator('.css-19bb58m').first().click();
  377 |   await page.getByRole('option', { name: groupName }).click();
  378 |   await page.getByRole('textbox', { name: 'Enter sub group name' }).fill(subGroupName);
  379 |   await page.getByRole('button', { name: 'Add' }).click();
  380 |   await page.getByRole('button', { name: 'Done' }).click();
  381 | });
  382 |
  383 | // 4️⃣ Create Sub Subgroup
  384 | test('Create Sub Subgroup', async () => {
  385 |   await page.getByRole('link', { name: 'Sub Subgroups' }).click();
  386 |   await page.getByRole('button', { name: '+ Add Sub Subgroup' }).click();
  387 |   await page.locator('.css-19bb58m').first().click();
  388 |   await page.getByRole('option', { name: groupName }).click();
  389 |   await page.locator('.css-35k6c7-control .css-19bb58m').click();
  390 |   await page.getByRole('option', { name: subGroupName }).click();
  391 |   await page.getByRole('textbox', { name: 'Enter sub subgroup name' }).fill(subSubGroupName);
  392 |   await page.getByRole('button', { name: 'Add' }).click();
  393 |   await page.getByRole('button', { name: 'Done' }).click();
  394 | });
  395 |
  396 | // 5️⃣ Create Player
  397 | test('Create Player', async () => {
  398 |   await page.getByRole('link', { name: 'Lan Manager' }).click();
  399 |   await page.getByRole('list').filter({ hasText: /^Players$/ }).getByRole('link').click();
  400 |   await page.getByRole('button', { name: '+ Add Player' }).click();
  401 |   await page.locator('.css-19bb58m').first().click();
  402 |   await page.getByRole('option', { name: groupName }).click();
  403 |   await page.waitForSelector('.css-35k6c7-control > .css-hlgwow > .css-19bb58m:not([aria-disabled="true"])');
  404 |   await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  405 |   await page.getByRole('option', { name: subGroupName }).click();
  406 |   await page.waitForSelector('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m:not([aria-disabled="true"])');
  407 |   await page.locator('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  408 |   await page.getByRole('option', { name: subSubGroupName }).click();
  409 |   await page.getByRole('textbox', { name: 'Enter player name' }).fill(playerName);
  410 |   await page.getByRole('button', { name: 'Add' }).click();
  411 |   await page.waitForSelector('text=Player added successfully.');
  412 |   await page.getByRole('button', { name: 'Done' }).click();
  413 | });
  414 |
  415 | // 6️⃣ Upload Video
  416 | test('Upload Video', async () => {
  417 |   if (!fs.existsSync(videoPath)) throw new Error(`Video file not found: ${videoPath}`);
  418 |   const stats = fs.statSync(videoPath);
  419 |   if (stats.size > 50 * 1024 * 1024) throw new Error(`Video file exceeds 50MB`);
  420 |
  421 |   await page.getByRole('link', { name: 'Contents' }).click();
  422 |   await page.getByRole('link', { name: 'Scenario' }).click();
  423 |   await page.getByRole('button', { name: 'All Videos' }).click();
  424 |   await page.getByRole('button', { name: '+ Add Videos' }).click();
  425 |   await page.locator('input[type="file"]').setInputFiles(videoPath);
  426 |   await page.waitForSelector(`text=${videoFileName}`, { timeout: 180000 });
  427 |   await page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });
  428 |   await page.getByRole('button', { name: 'Add' }).click();
  429 |   await page.getByRole('button', { name: 'Done' }).click();
  430 | });
  431 |
  432 | // … (continue splitting into separate tests for Scenario, Timetable, Schedule, Assign Scenario, Create Manager, and Logout)
  433 |
```