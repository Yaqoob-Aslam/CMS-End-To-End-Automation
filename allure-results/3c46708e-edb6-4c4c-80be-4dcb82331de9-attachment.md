# Test info

- Name: CMS Application Automation >> Create Subgroup
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS-Test-Cases.spec.js:72:7

# Error details

```
Error: page.waitForURL: Target page, context or browser has been closed
=========================== logs ===========================
waiting for navigation to "**/dashboard" until "load"
============================================================
    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS-Test-Cases.spec.js:59:16
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { chromium } from 'playwright';
   3 | import fs from 'fs';
   4 | import path from 'path';
   5 | import dotenv from 'dotenv';
   6 |
   7 | dotenv.config();
   8 |
   9 | test.describe('CMS Application Automation', () => {
   10 |   let browser, context, page;
   11 |   let groupNumber, groupName, subGroupName, subSubGroupName, playerName, videoFileName, scenarioName, timetableName, scheduleName;
   12 |   let projectRoot, videoDir, firstVideo, videoPath;
   13 |   let uniqueFirstName, uniqueLastName, uniqueEmail;
   14 |
   15 |   const firstNames = ['Ali', 'Sara', 'Usman', 'Ayesha', 'Omar', 'Fatima', 'Bilal', 'Hira', 'Zain', 'Zara'];
   16 |   const lastNames = ['Khan', 'Malik', 'Sheikh', 'Qureshi', 'Butt', 'Raza', 'Shah', 'Chaudhry', 'Hussain', 'Mirza'];
   17 |
   18 |   const getRandomName = arr => arr[Math.floor(Math.random() * arr.length)];
   19 |
   20 |   test.beforeAll(async () => {
   21 |     groupNumber = Math.floor(Math.random() * 100000);
   22 |     groupName = `Group U${groupNumber}`;
   23 |     subGroupName = `Subgroup U${groupNumber}`;
   24 |     subSubGroupName = `Sub Subgroup U${groupNumber}`;
   25 |     playerName = `Player U${groupNumber}`;
   26 |     videoFileName = `test__${groupNumber}.mp4`;
   27 |     scenarioName = `Scenario U${groupNumber}`;
   28 |     timetableName = `Timetable U${groupNumber}`;
   29 |     scheduleName = `Schedule U${groupNumber}`;
   30 |
   31 |     uniqueFirstName = getRandomName(firstNames);
   32 |     uniqueLastName = getRandomName(lastNames);
   33 |     uniqueEmail = `${uniqueFirstName.toLowerCase()}.${uniqueLastName.toLowerCase()}${groupNumber}@mailinator.com`;
   34 |
   35 |     projectRoot = path.resolve(__dirname, '..');
   36 |     videoDir = path.join(projectRoot, 'videos');
   37 |     const existingFiles = fs.existsSync(videoDir) ? fs.readdirSync(videoDir) : [];
   38 |     firstVideo = existingFiles.find(file => file.endsWith('.mp4'));
   39 |     if (!firstVideo) throw new Error('⚠️ No video found in videos/ folder');
   40 |
   41 |     const oldPath = path.join(videoDir, firstVideo);
   42 |     const newPath = path.join(videoDir, videoFileName);
   43 |     fs.renameSync(oldPath, newPath);
   44 |     videoPath = newPath;
   45 |
   46 |     browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
   47 |     context = await browser.newContext({ viewport: null, deviceScaleFactor: undefined });
   48 |     page = await context.newPage();
   49 |   });
   50 |
   51 |   test.beforeEach(async () => {
   52 |     await page.goto('https://moyai-cms.innov8.jp/login', { timeout: 90000 });
   53 |     if (!process.env.CMS_EMAIL || !process.env.CMS_PASSWORD) {
   54 |       throw new Error('Missing required environment variables: CMS_EMAIL and CMS_PASSWORD');
   55 |     }
   56 |     await page.getByRole('textbox', { name: 'Enter your email address' }).fill(process.env.CMS_EMAIL);
   57 |     await page.getByRole('textbox', { name: 'Enter your password' }).fill(process.env.CMS_PASSWORD);
   58 |     await page.getByRole('button', { name: 'Login' }).click();
>  59 |     await page.waitForURL('**/dashboard', { timeout: 60000 });
      |                ^ Error: page.waitForURL: Target page, context or browser has been closed
   60 |   });
   61 |
   62 |   test('Create Group', async () => {
   63 |     await page.getByRole('button', { name: 'Expand Icon' }).click();
   64 |     await page.getByRole('link', { name: 'Groups' }).click();
   65 |     await page.getByRole('listitem').filter({ hasText: /^Groups$/ }).getByRole('link').click();
   66 |     await page.getByRole('button', { name: '+ Add Group' }).click();
   67 |     await page.getByRole('textbox', { name: 'Enter group name' }).fill(groupName);
   68 |     await page.getByRole('button', { name: 'Add' }).click();
   69 |     await page.getByRole('button', { name: 'Done' }).click();
   70 |   });
   71 |
   72 |   test('Create Subgroup', async () => {
   73 |     await page.getByRole('link', { name: 'Subgroups', exact: true }).click();
   74 |     await page.getByRole('button', { name: '+ Add Subgroup' }).click();
   75 |     await page.locator('.css-19bb58m').first().click();
   76 |     await page.getByRole('option', { name: groupName }).click();
   77 |     await page.getByRole('textbox', { name: 'Enter sub group name' }).fill(subGroupName);
   78 |     await page.getByRole('button', { name: 'Add' }).click();
   79 |     await page.getByRole('button', { name: 'Done' }).click();
   80 |   });
   81 |
   82 |   test('Create Sub Subgroup', async () => {
   83 |     await page.getByRole('link', { name: 'Sub Subgroups' }).click();
   84 |     await page.getByRole('button', { name: '+ Add Sub Subgroup' }).click();
   85 |     await page.locator('.css-19bb58m').first().click();
   86 |     await page.getByRole('option', { name: groupName }).click();
   87 |     await page.locator('.css-35k6c7-control .css-19bb58m').click();
   88 |     await page.getByRole('option', { name: subGroupName }).click();
   89 |     await page.getByRole('textbox', { name: 'Enter sub subgroup name' }).fill(subSubGroupName);
   90 |     await page.getByRole('button', { name: 'Add' }).click();
   91 |     await page.getByRole('button', { name: 'Done' }).click();
   92 |   });
   93 |
   94 |   test('Create Player', async () => {
   95 |     await page.getByRole('link', { name: 'Lan Manager' }).click();
   96 |     await page.getByRole('list').filter({ hasText: /^Players$/ }).getByRole('link').click();
   97 |     await page.getByRole('button', { name: '+ Add Player' }).click();
   98 |     await page.locator('.css-19bb58m').first().click();
   99 |     await page.getByRole('option', { name: groupName }).click();
  100 |     await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  101 |     await page.getByRole('option', { name: subGroupName }).click();
  102 |     await page.locator('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  103 |     await page.getByRole('option', { name: subSubGroupName }).click();
  104 |     await page.getByRole('textbox', { name: 'Enter player name' }).fill(playerName);
  105 |     await page.getByRole('button', { name: 'Add' }).click();
  106 |     await page.waitForSelector('text=Player added successfully.', { timeout: 15000 });
  107 |     await page.getByRole('button', { name: 'Done' }).click();
  108 |   });
  109 |
  110 |   test('Upload Video', async () => {
  111 |     const stats = fs.statSync(videoPath);
  112 |     if (stats.size > 50 * 1024 * 1024) throw new Error(`Video file exceeds 50MB: ${videoFileName}`);
  113 |     await page.getByRole('link', { name: 'Contents' }).click();
  114 |     await page.getByRole('link', { name: 'Scenario' }).click();
  115 |     await page.getByRole('button', { name: 'All Videos' }).click();
  116 |     await page.getByRole('button', { name: '+ Add Videos' }).click();
  117 |     await page.locator('input[type="file"]').setInputFiles(videoPath);
  118 |     await page.waitForSelector(`text=${videoFileName}`, { timeout: 180000 });
  119 |     await page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });
  120 |     await page.getByRole('button', { name: 'Add' }).click();
  121 |     await page.getByRole('button', { name: 'Done' }).click();
  122 |   });
  123 |
  124 |   test('Create Scenario', async () => {
  125 |     await page.getByRole('button', { name: 'All Scenarios' }).click();
  126 |     await page.getByRole('button', { name: '+ Make Scenario' }).click();
  127 |     await page.getByRole('textbox', { name: 'Enter scenario name' }).fill(scenarioName);
  128 |     await page.locator('.css-19bb58m').click();
  129 |     await page.getByRole('option', { name: videoFileName }).click();
  130 |     const scenarioAddButton = page.getByRole('button', { name: 'Add' });
  131 |     await expect(scenarioAddButton).toBeEnabled({ timeout: 15000 });
  132 |     await scenarioAddButton.click();
  133 |     await page.getByRole('button', { name: 'Done' }).click();
  134 |   });
  135 |
  136 |   test('Create Timetable', async () => {
  137 |     await page.getByRole('link', { name: 'Time Table' }).click();
  138 |     await page.getByRole('button', { name: '+ Add Time Table' }).click();
  139 |     const now = new Date();
  140 |     const startTime = now.toTimeString().slice(0, 5);
  141 |     const endTime = new Date(now.getTime() + 5 * 60000).toTimeString().slice(0, 5);
  142 |     await page.getByRole('textbox', { name: 'Enter time table name' }).fill(timetableName);
  143 |     await page.locator('.css-19bb58m').click();
  144 |     await page.getByRole('option', { name: scenarioName }).click();
  145 |     await page.getByPlaceholder('Select start time').fill(startTime);
  146 |     await page.getByPlaceholder('Select end time').fill(endTime);
  147 |     await page.getByRole('button', { name: 'Add' }).click();
  148 |     await page.getByRole('button', { name: 'Done' }).click();
  149 |   });
  150 |
  151 |   test('Create Schedule', async () => {
  152 |     await page.getByRole('link', { name: 'Schedule' }).click();
  153 |     await page.getByRole('button', { name: '+ Add Schedule' }).click();
  154 |     await page.getByRole('textbox', { name: 'Enter schedule name' }).fill(scheduleName);
  155 |     await page.locator('.css-19bb58m').click();
  156 |     await page.getByRole('option', { name: timetableName }).click();
  157 |     const today = new Date().getDate().toString();
  158 |     await page.getByRole('textbox', { name: 'Select start date' }).click();
  159 |     await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
```