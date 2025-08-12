# Test info

- Name: CMS Application Automation >> Create Group
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS-Test-Cases.spec.js:64:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Done' })

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS-Test-Cases.spec.js:71:56
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
   19 |     test.beforeAll(async () => {
   20 |         // Generate unique test data
   21 |         groupNumber = Math.floor(Math.random() * 100000);
   22 |         groupName = `Group U${groupNumber}`;
   23 |         subGroupName = `Subgroup U${groupNumber}`;
   24 |         subSubGroupName = `Sub Subgroup U${groupNumber}`;
   25 |         playerName = `Player U${groupNumber}`;
   26 |         videoFileName = `test__${groupNumber}.mp4`;
   27 |         scenarioName = `Scenario U${groupNumber}`;
   28 |         timetableName = `Timetable U${groupNumber}`;
   29 |         scheduleName = `Schedule U${groupNumber}`;
   30 |
   31 |         uniqueFirstName = getRandomName(firstNames);
   32 |         uniqueLastName = getRandomName(lastNames);
   33 |         uniqueEmail = `${uniqueFirstName.toLowerCase()}.${uniqueLastName.toLowerCase()}${groupNumber}@mailinator.com`;
   34 |
   35 |         // Prepare video
   36 |         projectRoot = path.resolve(__dirname, '..');
   37 |         videoDir = path.join(projectRoot, 'videos');
   38 |         const existingFiles = fs.existsSync(videoDir) ? fs.readdirSync(videoDir) : [];
   39 |         firstVideo = existingFiles.find(file => file.endsWith('.mp4'));
   40 |         if (!firstVideo) throw new Error('⚠️ No video found in videos/ folder');
   41 |
   42 |         const oldPath = path.join(videoDir, firstVideo);
   43 |         const newPath = path.join(videoDir, videoFileName);
   44 |         fs.renameSync(oldPath, newPath);
   45 |         videoPath = newPath;
   46 |
   47 |         // Launch browser
   48 |         browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
   49 |         context = await browser.newContext({ viewport: null, deviceScaleFactor: undefined });
   50 |         page = await context.newPage();
   51 |     });
   52 |
   53 |     test.beforeAll(async () => {
   54 |         await page.goto('https://moyai-cms.innov8.jp/login', { timeout: 90000 });
   55 |         if (!process.env.CMS_EMAIL || !process.env.CMS_PASSWORD) {
   56 |         throw new Error('Missing required environment variables: CMS_EMAIL and CMS_PASSWORD');
   57 |         }
   58 |         await page.getByRole('textbox', { name: 'Enter your email address' }).fill(process.env.CMS_EMAIL || '');
   59 |         await page.getByRole('textbox', { name: 'Enter your password' }).fill(process.env.CMS_PASSWORD || '');
   60 |         await page.getByRole('button', { name: 'Login' }).click();
   61 |         // await page.waitForURL('**/dashboard', { timeout: 60000 });
   62 |     });
   63 |
   64 |     test('Create Group', async () => {
   65 |       await page.getByRole('button', { name: 'Expand Icon' }).click();
   66 |       await page.getByRole('link', { name: 'Groups' }).click();
   67 |       await page.getByRole('listitem').filter({ hasText: /^Groups$/ }).getByRole('link').click();
   68 |       await page.getByRole('button', { name: '+ Add Group' }).click();
   69 |       await page.getByRole('textbox', { name: 'Enter group name' }).fill(groupName);
   70 |       await page.getByRole('button', { name: 'Add' }).click();
>  71 |       await page.getByRole('button', { name: 'Done' }).click();
      |                                                        ^ Error: locator.click: Target page, context or browser has been closed
   72 |     });
   73 |
   74 |     test('Create Subgroup', async () => {
   75 |       await page.getByRole('link', { name: 'Subgroups', exact: true }).click();
   76 |       await page.getByRole('button', { name: '+ Add Subgroup' }).click();
   77 |       await page.locator('.css-19bb58m').first().click();
   78 |       await page.getByRole('option', { name: groupName }).click();
   79 |       await page.getByRole('textbox', { name: 'Enter sub group name' }).fill(subGroupName);
   80 |       await page.getByRole('button', { name: 'Add' }).click();
   81 |       await page.getByRole('button', { name: 'Done' }).click();
   82 |     });
   83 |
   84 |     test('Create Sub Subgroup', async () => {
   85 |       await page.getByRole('link', { name: 'Sub Subgroups' }).click();
   86 |       await page.getByRole('button', { name: '+ Add Sub Subgroup' }).click();
   87 |       await page.locator('.css-19bb58m').first().click();
   88 |       await page.getByRole('option', { name: groupName }).click();
   89 |       await page.locator('.css-35k6c7-control .css-19bb58m').click();
   90 |       await page.getByRole('option', { name: subGroupName }).click();
   91 |       await page.getByRole('textbox', { name: 'Enter sub subgroup name' }).fill(subSubGroupName);
   92 |       await page.getByRole('button', { name: 'Add' }).click();
   93 |       await page.getByRole('button', { name: 'Done' }).click();
   94 |     });
   95 |
   96 |     test('Create Player', async () => {
   97 |       await page.getByRole('link', { name: 'Lan Manager' }).click();
   98 |       await page.getByRole('list').filter({ hasText: /^Players$/ }).getByRole('link').click();
   99 |       await page.getByRole('button', { name: '+ Add Player' }).click();
  100 |       await page.locator('.css-19bb58m').first().click();
  101 |       await page.getByRole('option', { name: groupName }).click();
  102 |       await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  103 |       await page.getByRole('option', { name: subGroupName }).click();
  104 |       await page.locator('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  105 |       await page.getByRole('option', { name: subSubGroupName }).click();
  106 |       await page.getByRole('textbox', { name: 'Enter player name' }).fill(playerName);
  107 |       await page.getByRole('button', { name: 'Add' }).click();
  108 |       await page.waitForSelector('text=Player added successfully.', { timeout: 15000 });
  109 |       await page.getByRole('button', { name: 'Done' }).click();
  110 |     });
  111 |
  112 |     test('Upload Video', async () => {
  113 |     //   const stats = fs.statSync(videoPath);
  114 |     //   if (stats.size > 50 * 1024 * 1024) throw new Error(`Video file exceeds 50MB: ${videoFileName}`);
  115 |     //   await page.getByRole('link', { name: 'Contents' }).click();
  116 |     //   await page.getByRole('link', { name: 'Scenario' }).click();
  117 |     //   await page.getByRole('button', { name: 'All Videos' }).click();
  118 |     //   await page.getByRole('button', { name: '+ Add Videos' }).click();
  119 |     //   await page.locator('input[type="file"]').setInputFiles(videoPath);
  120 |     //   await page.waitForSelector(`text=${videoFileName}`, { timeout: 180000 });
  121 |     //   await page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });
  122 |     //   await page.getByRole('button', { name: 'Add' }).click();
  123 |     //   await page.getByRole('button', { name: 'Done' }).click();
  124 |     await page.getByRole('link', { name: 'Contents' }).click();
  125 |     await page.getByRole('link', { name: 'Scenario' }).click();
  126 |     await page.getByRole('button', { name: 'All Videos' }).click();
  127 |     await page.getByRole('button', { name: '+ Add Videos' }).click();
  128 |     // Check if video file exists and is under 50MB before upload
  129 |     const videoPath = path.join(videoDir, videoFileName);
  130 |     if (!fs.existsSync(videoPath)) {
  131 |       throw new Error(`Video file not found: ${videoPath}`);
  132 |     }
  133 |     const stats = fs.statSync(videoPath);
  134 |     if (stats.size > 50 * 1024 * 1024) {
  135 |       throw new Error(`Video file exceeds 50MB: ${videoFileName}`);
  136 |     }
  137 |     
  138 |     await page.locator('input[type="file"]').setInputFiles(videoPath);
  139 |     await page.waitForSelector(`text=${videoFileName}`, { timeout: 180000 });
  140 |     await page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });
  141 |     
  142 |     const addVideoButton = page.getByRole('button', { name: 'Add' });
  143 |     await addVideoButton.waitFor({ state: 'visible', timeout: 30000 });
  144 |     await addVideoButton.click();
  145 |     
  146 |     const doneButton = page.getByRole('button', { name: 'Done' });
  147 |     await doneButton.waitFor({ state: 'visible', timeout: 30000 });
  148 |     await doneButton.click();
  149 |     });
  150 |
  151 |     test('Create Scenario', async () => {
  152 |       await page.getByRole('button', { name: 'All Scenarios' }).click();
  153 |       await page.getByRole('button', { name: '+ Make Scenario' }).click();
  154 |       await page.getByRole('textbox', { name: 'Enter scenario name' }).fill(scenarioName);
  155 |       await page.locator('.css-19bb58m').click();
  156 |       await page.getByRole('option', { name: videoFileName }).click();
  157 |       const scenarioAddButton = page.getByRole('button', { name: 'Add' });
  158 |       await expect(scenarioAddButton).toBeEnabled({ timeout: 15000 });
  159 |       await scenarioAddButton.click();
  160 |       await page.getByRole('button', { name: 'Done' }).click();
  161 |     });
  162 |
  163 |     test('Create Timetable', async () => {
  164 |       await page.getByRole('link', { name: 'Time Table' }).click();
  165 |       await page.getByRole('button', { name: '+ Add Time Table' }).click();
  166 |       const now = new Date();
  167 |       const startTime = now.toTimeString().slice(0, 5);
  168 |       const endTime = new Date(now.getTime() + 5 * 60000).toTimeString().slice(0, 5);
  169 |       await page.getByRole('textbox', { name: 'Enter time table name' }).fill(timetableName);
  170 |       await page.locator('.css-19bb58m').click();
  171 |       await page.getByRole('option', { name: scenarioName }).click();
```