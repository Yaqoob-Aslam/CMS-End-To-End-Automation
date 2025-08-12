# Test info

- Name: CMS Application End-to-End Tests >> Create a new group
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:362:7

# Error details

```
Error: Timed out 10000ms waiting for expect(locator).toBeVisible()

Locator: getByText('Group U50293')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 10000ms
  - waiting for getByText('Group U50293')

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:370:45
```

# Page snapshot

```yaml
- banner:
  - heading "CMS" [level=1]
  - button "A"
- button "Expand Icon":
  - img "Expand Icon"
- navigation "Breadcrumb":
  - list:
    - list:
      - listitem:
        - paragraph: Groups Master
      - listitem:
        - paragraph: Groups
- main:
  - complementary:
    - navigation:
      - list:
        - listitem:
          - link "Dashboard":
            - /url: /dashboard
            - img
            - text: Dashboard
        - listitem:
          - link "User Account":
            - /url: /managers
            - img
            - text: User Account
        - listitem:
          - link "Groups":
            - /url: /groups-master/groups
            - img
            - text: Groups
          - list:
            - listitem:
              - link "Groups":
                - /url: /groups-master/groups
            - listitem:
              - link "Subgroups":
                - /url: /groups-master/subgroups
            - listitem:
              - link "Sub Subgroups":
                - /url: /groups-master/sub-subgroups
        - listitem:
          - link "Lan Manager":
            - /url: /groups-master/groups
            - img
            - text: Lan Manager
        - listitem:
          - link "Contents":
            - /url: /groups-master/groups
        - listitem:
          - link "Players":
            - /url: /groups-master/groups
  - article:
    - searchbox "Search..."
    - button "+ Add Group"
    - button "Refresh"
    - table:
      - rowgroup:
        - row "S.No. Groups Actions":
          - cell "S.No."
          - cell "Groups"
          - cell "Actions"
      - rowgroup:
        - row "1 Japan":
          - cell "1":
            - paragraph: "1"
          - cell "Japan":
            - paragraph: Japan
          - cell:
            - button
            - button
        - row "2 Moyai Head Office Main":
          - cell "2":
            - paragraph: "2"
          - cell "Moyai Head Office Main":
            - paragraph: Moyai Head Office Main
          - cell:
            - button
            - button
        - row "3 Group A1":
          - cell "3":
            - paragraph: "3"
          - cell "Group A1":
            - paragraph: Group A1
          - cell:
            - button
            - button
        - row "4 Group W_1":
          - cell "4":
            - paragraph: "4"
          - cell "Group W_1":
            - paragraph: Group W_1
          - cell:
            - button
            - button
        - row "5 First":
          - cell "5":
            - paragraph: "5"
          - cell "First":
            - paragraph: First
          - cell:
            - button
            - button
        - row "6 Group A2":
          - cell "6":
            - paragraph: "6"
          - cell "Group A2":
            - paragraph: Group A2
          - cell:
            - button
            - button
        - row "7 Lahore":
          - cell "7":
            - paragraph: "7"
          - cell "Lahore":
            - paragraph: Lahore
          - cell:
            - button
            - button
        - row "8 Group A3":
          - cell "8":
            - paragraph: "8"
          - cell "Group A3":
            - paragraph: Group A3
          - cell:
            - button
            - button
        - row "9 Group A4":
          - cell "9":
            - paragraph: "9"
          - cell "Group A4":
            - paragraph: Group A4
          - cell:
            - button
            - button
        - row "10 Osaka Branch":
          - cell "10":
            - paragraph: "10"
          - cell "Osaka Branch":
            - paragraph: Osaka Branch
          - cell:
            - button
            - button
    - paragraph: Showing 1-10 from 358
    - combobox:
      - option "10" [selected]
      - option "20"
      - option "50"
    - navigation "Pagination":
      - listitem:
        - button "Previous page" [disabled]
      - listitem:
        - button "Page 1 is your current page": "1"
      - listitem:
        - button "Page 2": "2"
      - listitem:
        - button "Page 3": "3"
      - listitem:
        - button "Page 4": "4"
      - listitem:
        - button "Page 5": "5"
      - listitem:
        - button "Jump forward": ...
      - listitem:
        - button "Page 35": "35"
      - listitem:
        - button "Page 36": "36"
      - listitem:
        - button "Next page"
```

# Test source

```ts
  270 | // // Ensure email field is focused before filling
  271 | // await page.getByRole('textbox', { name: 'Enter email' }).click();
  272 | // await page.getByRole('textbox', { name: 'Enter email' }).fill(uniqueEmail);
  273 |
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
  354 |   test.skip('Login with invalid credentials', async () => {
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
> 370 |     await expect(page.getByText(groupName)).toBeVisible({ timeout: 10000 });
      |                                             ^ Error: Timed out 10000ms waiting for expect(locator).toBeVisible()
  371 |   });
  372 |
  373 |   test('Create a new subgroup', async () => {
  374 |     await page.getByRole('link', { name: 'Subgroups', exact: true }).click();
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
```