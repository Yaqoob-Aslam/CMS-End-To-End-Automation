# Test info

- Name: CMS End-to-End Automation >> Upload Video
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS-Test-Cases.spec.js:96:7

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Contents' })

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS-Test-Cases.spec.js:99:56
```

# Test source

```ts
   1 | import { test, expect, chromium } from '@playwright/test';
   2 | import fs from 'fs';
   3 | import path from 'path';
   4 | import dotenv from 'dotenv';
   5 | dotenv.config();
   6 |
   7 | test.describe('CMS End-to-End Automation', () => {
   8 |   let browser, context, page;
   9 |   let groupNumber, groupName, subGroupName, subSubGroupName, playerName, videoFileName, scenarioName, timetableName, scheduleName;
   10 |   let videoDir, videoPath;
   11 |
   12 |   test.beforeAll(async () => {
   13 |     // Generate unique values
   14 |     groupNumber = Math.floor(Math.random() * 100000);
   15 |     groupName = `Group U${groupNumber}`;
   16 |     subGroupName = `Subgroup U${groupNumber}`;
   17 |     subSubGroupName = `Sub Subgroup U${groupNumber}`;
   18 |     playerName = `Player U${groupNumber}`;
   19 |     videoFileName = `test__${groupNumber}.mp4`;
   20 |     scenarioName = `Scenario U${groupNumber}`;
   21 |     timetableName = `Timetable U${groupNumber}`;
   22 |     scheduleName = `Schedule U${groupNumber}`;
   23 |
   24 |     // Video path setup
   25 |     const projectRoot = path.resolve(__dirname, '..');
   26 |     videoDir = path.join(projectRoot, 'videos');
   27 |     const existingFiles = fs.existsSync(videoDir) ? fs.readdirSync(videoDir) : [];
   28 |     const firstVideo = existingFiles.find(file => file.endsWith('.mp4'));
   29 |     if (!firstVideo) throw new Error('⚠️ No video found in videos/ folder');
   30 |     fs.renameSync(path.join(videoDir, firstVideo), path.join(videoDir, videoFileName));
   31 |     videoPath = path.join(videoDir, videoFileName);
   32 |
   33 |     // Browser setup
   34 |     browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
   35 |     context = await browser.newContext({ viewport: null, deviceScaleFactor: undefined });
   36 |     page = await context.newPage();
   37 |   });
   38 |
   39 |   // ---------------------- LOGIN ----------------------
   40 |   test('Login to CMS', async () => {
   41 |     await page.goto('https://moyai-cms.innov8.jp/login', { timeout: 90000 });
   42 |     if (!process.env.CMS_EMAIL || !process.env.CMS_PASSWORD) throw new Error('Missing CMS_EMAIL or CMS_PASSWORD');
   43 |     await page.getByRole('textbox', { name: 'Enter your email address' }).fill(process.env.CMS_EMAIL);
   44 |     await page.getByRole('textbox', { name: 'Enter your password' }).fill(process.env.CMS_PASSWORD);
   45 |     await page.getByRole('button', { name: 'Login' }).click();
   46 |     await page.waitForURL('**/dashboard', { timeout: 60000 });
   47 |   });
   48 |
   49 |   // ---------------------- GROUP CREATION ----------------------
   50 |   test('Create Group', async () => {
   51 |     await page.getByRole('button', { name: 'Expand Icon' }).click();
   52 |     await page.getByRole('link', { name: 'Groups' }).click();
   53 |     await page.getByRole('button', { name: '+ Add Group' }).click();
   54 |     await page.getByRole('textbox', { name: 'Enter group name' }).fill(groupName);
   55 |     await page.getByRole('button', { name: 'Add' }).click();
   56 |     await page.getByRole('button', { name: 'Done' }).click();
   57 |   });
   58 |
   59 |   test('Create Subgroup', async () => {
   60 |     await page.getByRole('link', { name: 'Subgroups', exact: true }).click();
   61 |     await page.getByRole('button', { name: '+ Add Subgroup' }).click();
   62 |     await page.locator('.css-19bb58m').first().click();
   63 |     await page.getByRole('option', { name: groupName }).click();
   64 |     await page.getByRole('textbox', { name: 'Enter sub group name' }).fill(subGroupName);
   65 |     await page.getByRole('button', { name: 'Add' }).click();
   66 |     await page.getByRole('button', { name: 'Done' }).click();
   67 |   });
   68 |
   69 |   test('Create Sub-Subgroup', async () => {
   70 |     await page.getByRole('link', { name: 'Sub Subgroups' }).click();
   71 |     await page.getByRole('button', { name: '+ Add Sub Subgroup' }).click();
   72 |     await page.locator('.css-19bb58m').first().click();
   73 |     await page.getByRole('option', { name: groupName }).click();
   74 |     await page.locator('.css-35k6c7-control .css-19bb58m').click();
   75 |     await page.getByRole('option', { name: subGroupName }).click();
   76 |     await page.getByRole('textbox', { name: 'Enter sub subgroup name' }).fill(subSubGroupName);
   77 |     await page.getByRole('button', { name: 'Add' }).click();
   78 |     await page.getByRole('button', { name: 'Done' }).click();
   79 |   });
   80 |
   81 |   test('Create Player', async () => {
   82 |     await page.getByRole('link', { name: 'Lan Manager' }).click();
   83 |     await page.getByRole('button', { name: '+ Add Player' }).click();
   84 |     await page.locator('.css-19bb58m').first().click();
   85 |     await page.getByRole('option', { name: groupName }).click();
   86 |     await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
   87 |     await page.getByRole('option', { name: subGroupName }).click();
   88 |     await page.locator('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
   89 |     await page.getByRole('option', { name: subSubGroupName }).click();
   90 |     await page.getByRole('textbox', { name: 'Enter player name' }).fill(playerName);
   91 |     await page.getByRole('button', { name: 'Add' }).click();
   92 |     await page.waitForSelector('text=Player added successfully.', { timeout: 15000 });
   93 |     await page.getByRole('button', { name: 'Done' }).click();
   94 |   });
   95 |
   96 |   test('Upload Video', async () => {
   97 |     const stats = fs.statSync(videoPath);
   98 |     if (stats.size > 50 * 1024 * 1024) throw new Error('Video exceeds 50MB');
>  99 |     await page.getByRole('link', { name: 'Contents' }).click();
      |                                                        ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  100 |     await page.getByRole('link', { name: 'Scenario' }).click();
  101 |     await page.getByRole('button', { name: 'All Videos' }).click();
  102 |     await page.getByRole('button', { name: '+ Add Videos' }).click();
  103 |     await page.locator('input[type="file"]').setInputFiles(videoPath);
  104 |     await page.waitForSelector(`text=${videoFileName}`, { timeout: 180000 });
  105 |     await page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });
  106 |     await page.getByRole('button', { name: 'Add' }).click();
  107 |     await page.getByRole('button', { name: 'Done' }).click();
  108 |   });
  109 |
  110 |   // ---------------------- SCENARIO CREATION ----------------------
  111 |   test('Create Scenario', async () => {
  112 |     await page.getByRole('button', { name: 'All Scenarios' }).click();
  113 |     await page.getByRole('button', { name: '+ Make Scenario' }).click();
  114 |     await page.getByRole('textbox', { name: 'Enter scenario name' }).fill(scenarioName);
  115 |     await page.locator('.css-19bb58m').click();
  116 |     await page.getByRole('option', { name: videoFileName }).click();
  117 |     await page.getByRole('button', { name: 'Add' }).click();
  118 |     await page.getByRole('button', { name: 'Done' }).click();
  119 |   });
  120 |
  121 |   // ---------------------- TIMETABLE CREATION ----------------------
  122 |   test('Create Timetable', async () => {
  123 |     const now = new Date();
  124 |     const startTime = now.toTimeString().slice(0, 5);
  125 |     const endTime = new Date(now.getTime() + 5 * 60000).toTimeString().slice(0, 5);
  126 |
  127 |     await page.getByRole('link', { name: 'Time Table' }).click();
  128 |     await page.getByRole('button', { name: '+ Add Time Table' }).click();
  129 |     await page.getByRole('textbox', { name: 'Enter time table name' }).fill(timetableName);
  130 |     await page.locator('.css-19bb58m').click();
  131 |     await page.getByRole('option', { name: scenarioName }).click();
  132 |     await page.getByPlaceholder('Select start time').fill(startTime);
  133 |     await page.getByPlaceholder('Select end time').fill(endTime);
  134 |     await page.getByRole('button', { name: 'Add' }).click();
  135 |     await page.getByRole('button', { name: 'Done' }).click();
  136 |   });
  137 |
  138 |   // ---------------------- SCHEDULE CREATION ----------------------
  139 |   test('Create Schedule', async () => {
  140 |     const today = new Date().getDate().toString();
  141 |
  142 |     await page.getByRole('link', { name: 'Schedule' }).click();
  143 |     await page.getByRole('button', { name: '+ Add Schedule' }).click();
  144 |     await page.getByRole('textbox', { name: 'Enter schedule name' }).fill(scheduleName);
  145 |     await page.locator('.css-19bb58m').click();
  146 |     await page.getByRole('option', { name: timetableName }).click();
  147 |
  148 |     await page.getByRole('textbox', { name: 'Select start date' }).click();
  149 |     await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
  150 |
  151 |     await page.getByRole('textbox', { name: 'Select end date' }).click();
  152 |     await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
  153 |
  154 |     await page.getByRole('button', { name: 'Add' }).click();
  155 |     await page.waitForSelector('text=Schedule added successfully.', { timeout: 15000 });
  156 |     await page.getByRole('button', { name: 'Done' }).click();
  157 |   });
  158 |
  159 |   // ---------------------- ASSIGN SCENARIO ----------------------
  160 |   test('Assign Scenario to Player', async () => {
  161 |     await page.getByRole('link', { name: 'Dashboard' }).click();
  162 |     await page.getByRole('button', { name: '+ Assign Scenario' }).click();
  163 |     await page.locator('.css-19bb58m').first().click();
  164 |     await page.getByRole('option', { name: scenarioName }).click();
  165 |     await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  166 |     await page.getByRole('option', { name: playerName }).click();
  167 |     await page.getByRole('button', { name: 'Add' }).click();
  168 |     await page.getByRole('button', { name: 'Done' }).click();
  169 |   });
  170 |
  171 |   // ---------------------- MANAGER CREATION ----------------------
  172 |   test('Create Manager', async () => {
  173 |     const firstNames = ['Ali', 'Sara', 'Usman', 'Ayesha', 'Omar', 'Fatima', 'Bilal', 'Hira', 'Zain', 'Zara'];
  174 |     const lastNames = ['Khan', 'Malik', 'Sheikh', 'Qureshi', 'Butt', 'Raza', 'Shah', 'Chaudhry', 'Hussain', 'Mirza'];
  175 |     const uniqueFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  176 |     const uniqueLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  177 |     const uniqueEmail = `${uniqueFirstName.toLowerCase()}.${uniqueLastName.toLowerCase()}${groupNumber}@mailinator.com`;
  178 |
  179 |     await page.getByRole('link', { name: 'User Account' }).click();
  180 |     await page.getByRole('button', { name: '+ Create Manager' }).click();
  181 |     await page.getByRole('textbox', { name: 'Enter first name' }).fill(uniqueFirstName);
  182 |     await page.getByRole('textbox', { name: 'Enter last name' }).fill(uniqueLastName);
  183 |     await page.getByRole('textbox', { name: 'Enter email' }).fill(uniqueEmail);
  184 |     await page.locator('.css-19bb58m').click();
  185 |     await page.getByRole('option', { name: groupName }).click();
  186 |     await page.getByRole('button', { name: 'Add' }).click();
  187 |     await page.getByRole('button', { name: 'Done' }).click();
  188 |   });
  189 |
  190 |   // ---------------------- LOGOUT ----------------------
  191 |   test('Logout', async () => {
  192 |     await page.getByRole('button', { name: 'A', exact: true }).click();
  193 |     await page.getByRole('button', { name: 'Logout' }).click();
  194 |     await page.getByRole('button', { name: 'Yes' }).click();
  195 |     await page.waitForURL('**/login', { timeout: 60000 });
  196 |   });
  197 |
  198 |   test.afterAll(async () => {
  199 |     await browser.close();
```