# Test info

- Name: CMS Application Automation >> Create Group
- Location: /home/yaqoob/CMS-End-to-End-Automation-with-Playwright/tests/CMS-Test-Cases.spec.js:66:9

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Enter your email address' })

    at /home/yaqoob/CMS-End-to-End-Automation-with-Playwright/tests/CMS-Test-Cases.spec.js:60:79
```

# Test source

```ts
   1 |     import { test, expect } from '@playwright/test';
   2 |     import { chromium } from 'playwright';
   3 |     import fs from 'fs';
   4 |     import path from 'path';
   5 |     import dotenv from 'dotenv';
   6 |
   7 |     dotenv.config();
   8 |
   9 |     test.describe.serial('CMS Application Automation', () => {
   10 |     let browser, context, page;
   11 |     let groupNumber, groupName, subGroupName, subSubGroupName, playerName, videoFileName, scenarioName, timetableName, scheduleName;
   12 |     let projectRoot, videoDir, firstVideo, videoPath;
   13 |     let uniqueFirstName, uniqueLastName, uniqueEmail;
   14 |
   15 |     const firstNames = ['Ali', 'Sara', 'Usman', 'Ayesha', 'Omar', 'Fatima', 'Bilal', 'Hira', 'Zain', 'Zara'];
   16 |     const lastNames = ['Khan', 'Malik', 'Sheikh', 'Qureshi', 'Butt', 'Raza', 'Shah', 'Chaudhry', 'Hussain', 'Mirza'];
   17 |     const getRandomName = arr => arr[Math.floor(Math.random() * arr.length)];
   18 |
   19 |     
   20 |     test.beforeAll(async () => {
   21 |       
   22 |         // Generate unique test data
   23 |         groupNumber = Math.floor(Math.random() * 100000);
   24 |         groupName = `Group U${groupNumber}`;
   25 |         subGroupName = `Subgroup U${groupNumber}`;
   26 |         subSubGroupName = `Sub Subgroup U${groupNumber}`;
   27 |         playerName = `Player U${groupNumber}`;
   28 |         videoFileName = `test__${groupNumber}.mp4`;
   29 |         scenarioName = `Scenario U${groupNumber}`;
   30 |         timetableName = `Timetable U${groupNumber}`;
   31 |         scheduleName = `Schedule U${groupNumber}`;
   32 |
   33 |         uniqueFirstName = getRandomName(firstNames);
   34 |         uniqueLastName = getRandomName(lastNames);
   35 |         uniqueEmail = `${uniqueFirstName.toLowerCase()}.${uniqueLastName.toLowerCase()}${groupNumber}@mailinator.com`;
   36 |
   37 |         // Prepare video
   38 |         projectRoot = path.resolve(__dirname, '..');
   39 |         videoDir = path.join(projectRoot, 'videos');
   40 |         const existingFiles = fs.existsSync(videoDir) ? fs.readdirSync(videoDir) : [];
   41 |         firstVideo = existingFiles.find(file => file.endsWith('.mp4'));
   42 |         if (!firstVideo) throw new Error('⚠️ No video found in videos/ folder');
   43 |
   44 |         const oldPath = path.join(videoDir, firstVideo);
   45 |         const newPath = path.join(videoDir, videoFileName);
   46 |         fs.renameSync(oldPath, newPath);
   47 |         videoPath = newPath;
   48 |
   49 |         // Launch browser
   50 |         browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
   51 |         context = await browser.newContext({ viewport: null, deviceScaleFactor: undefined });
   52 |         page = await context.newPage();
   53 |     });
   54 |
   55 |     test.beforeAll(async () => {
   56 |         await page.goto('https://moyai-cms.innov8.jp/login', { timeout: 90000 });
   57 |         if (!process.env.CMS_EMAIL || !process.env.CMS_PASSWORD) {
   58 |         throw new Error('Missing required environment variables: CMS_EMAIL and CMS_PASSWORD');
   59 |         }
>  60 |         await page.getByRole('textbox', { name: 'Enter your email address' }).fill(process.env.CMS_EMAIL || '');
      |                                                                               ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
   61 |         await page.getByRole('textbox', { name: 'Enter your password' }).fill(process.env.CMS_PASSWORD || '');
   62 |         await page.getByRole('button', { name: 'Login' }).click();
   63 |         // await page.waitForURL('**/dashboard', { timeout: 60000 });
   64 |     });
   65 |
   66 |     test('Create Group', async () => {
   67 |       await page.getByRole('button', { name: 'Expand Icon' }).click();
   68 |       await page.getByRole('link', { name: 'Groups' }).click();
   69 |       await page.getByRole('listitem').filter({ hasText: /^Groups$/ }).getByRole('link').click();
   70 |       await page.getByRole('button', { name: '+ Add Group' }).click();
   71 |       await page.getByRole('textbox', { name: 'Enter group name' }).fill(groupName);
   72 |       await page.getByRole('button', { name: 'Add' }).click();
   73 |       await page.getByRole('button', { name: 'Done' }).click();
   74 |     });
   75 |
   76 |     test('Create Subgroup', async () => {
   77 |       await page.getByRole('link', { name: 'Subgroups', exact: true }).click();
   78 |       await page.getByRole('button', { name: '+ Add Subgroup' }).click();
   79 |       await page.locator('.css-19bb58m').first().click();
   80 |       await page.getByRole('option', { name: groupName }).click();
   81 |       await page.getByRole('textbox', { name: 'Enter sub group name' }).fill(subGroupName);
   82 |       await page.getByRole('button', { name: 'Add' }).click();
   83 |       await page.getByRole('button', { name: 'Done' }).click();
   84 |     });
   85 |
   86 |     test('Create Sub Subgroup', async () => {
   87 |       await page.getByRole('link', { name: 'Sub Subgroups' }).click();
   88 |       await page.getByRole('button', { name: '+ Add Sub Subgroup' }).click();
   89 |       await page.locator('.css-19bb58m').first().click();
   90 |       await page.getByRole('option', { name: groupName }).click();
   91 |       await page.locator('.css-35k6c7-control .css-19bb58m').click();
   92 |       await page.getByRole('option', { name: subGroupName }).click();
   93 |       await page.getByRole('textbox', { name: 'Enter sub subgroup name' }).fill(subSubGroupName);
   94 |       await page.getByRole('button', { name: 'Add' }).click();
   95 |       await page.getByRole('button', { name: 'Done' }).click();
   96 |     });
   97 |
   98 |     test('Create Player', async () => {
   99 |       await page.getByRole('link', { name: 'Lan Manager' }).click();
  100 |       await page.getByRole('list').filter({ hasText: /^Players$/ }).getByRole('link').click();
  101 |       await page.getByRole('button', { name: '+ Add Player' }).click();
  102 |       await page.locator('.css-19bb58m').first().click();
  103 |       await page.getByRole('option', { name: groupName }).click();
  104 |       await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  105 |       await page.getByRole('option', { name: subGroupName }).click();
  106 |       await page.locator('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  107 |       await page.getByRole('option', { name: subSubGroupName }).click();
  108 |       await page.getByRole('textbox', { name: 'Enter player name' }).fill(playerName);
  109 |       await page.getByRole('button', { name: 'Add' }).click();
  110 |       await page.waitForSelector('text=Player added successfully.', { timeout: 15000 });
  111 |       await page.getByRole('button', { name: 'Done' }).click();
  112 |     });
  113 |
  114 |     test('Upload Video', async () => {
  115 |     await page.getByRole('link', { name: 'Contents' }).click();
  116 |     await page.getByRole('link', { name: 'Scenario' }).click();
  117 |     await page.getByRole('button', { name: 'All Videos' }).click();
  118 |     await page.getByRole('button', { name: '+ Add Videos' }).click();
  119 |     const videoPath = path.join(videoDir, videoFileName);
  120 |     if (!fs.existsSync(videoPath)) {
  121 |       throw new Error(`Video file not found: ${videoPath}`);
  122 |     }
  123 |     const stats = fs.statSync(videoPath);
  124 |     if (stats.size > 50 * 1024 * 1024) {
  125 |       throw new Error(`Video file exceeds 50MB: ${videoFileName}`);
  126 |     }
  127 |     await page.locator('input[type="file"]').setInputFiles(videoPath);
  128 |     await page.waitForSelector(`text=${videoFileName}`, { timeout: 180000 });
  129 |     await page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });
  130 |     const addVideoButton = page.getByRole('button', { name: 'Add' });
  131 |     await addVideoButton.waitFor({ state: 'visible', timeout: 30000 });
  132 |     await addVideoButton.click();
  133 |     const doneButton = page.getByRole('button', { name: 'Done' });
  134 |     await doneButton.waitFor({ state: 'visible', timeout: 30000 });
  135 |     await doneButton.click();
  136 |     });
  137 |
  138 |     test('Create Scenario', async () => {
  139 |       await page.getByRole('button', { name: 'All Scenarios' }).click();
  140 |       await page.getByRole('button', { name: '+ Make Scenario' }).click();
  141 |       await page.getByRole('textbox', { name: 'Enter scenario name' }).fill(scenarioName);
  142 |       await page.locator('.css-19bb58m').click();
  143 |       await page.getByRole('option', { name: videoFileName }).click();
  144 |       const scenarioAddButton = page.getByRole('button', { name: 'Add' });
  145 |       await expect(scenarioAddButton).toBeEnabled({ timeout: 15000 });
  146 |       await scenarioAddButton.click();
  147 |       await page.getByRole('button', { name: 'Done' }).click();
  148 |     });
  149 |
  150 |     test('Create Timetable', async () => {
  151 |       await page.getByRole('link', { name: 'Time Table' }).click();
  152 |       await page.getByRole('button', { name: '+ Add Time Table' }).click();
  153 |       const now = new Date();
  154 |       const startTime = now.toTimeString().slice(0, 5);
  155 |       const endTime = new Date(now.getTime() + 5 * 60000).toTimeString().slice(0, 5);
  156 |       await page.getByRole('textbox', { name: 'Enter time table name' }).fill(timetableName);
  157 |       await page.locator('.css-19bb58m').click();
  158 |       await page.getByRole('option', { name: scenarioName }).click();
  159 |       await page.getByPlaceholder('Select start time').fill(startTime);
  160 |       await page.getByPlaceholder('Select end time').fill(endTime);
```