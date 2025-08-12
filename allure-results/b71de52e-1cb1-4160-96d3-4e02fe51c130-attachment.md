# Test info

- Name: CMS End-to-End Automation >> Create Group
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS-Test-Cases.spec.js:50:7

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: '+ Add Group' })

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS-Test-Cases.spec.js:53:61
```

# Page snapshot

```yaml
- banner:
  - heading "CMS" [level=1]
  - button "A"
- button "Expand Icon":
  - img "Expand Icon"
- heading "Dashboard" [level=2]
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
            - /url: /dashboard
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
            - /url: /dashboard
            - img
            - text: Lan Manager
        - listitem:
          - link "Contents":
            - /url: /dashboard
        - listitem:
          - link "Players":
            - /url: /dashboard
  - article:
    - searchbox "Search..."
    - button "+ Assign Scenario"
    - button "Refresh"
    - table:
      - rowgroup:
        - row "S.No. Players Scenario Start Date & Time End Date & Time PC Status Status Actions":
          - cell "S.No."
          - cell "Players"
          - cell "Scenario"
          - cell "Start Date & Time"
          - cell "End Date & Time"
          - cell "PC Status"
          - cell "Status"
          - cell "Actions"
      - rowgroup:
        - row "1 Player U3988 Scenario U3988 8 Aug 2025 06:33 PM 8 Aug 2025 06:38 PM - stopped":
          - cell "1":
            - paragraph: "1"
          - cell "Player U3988":
            - paragraph: Player U3988
          - cell "Scenario U3988":
            - paragraph: Scenario U3988
          - cell "8 Aug 2025 06:33 PM":
            - paragraph: 8 Aug 2025 06:33 PM
          - cell "8 Aug 2025 06:38 PM":
            - paragraph: 8 Aug 2025 06:38 PM
          - cell "-":
            - paragraph: "-"
          - cell "stopped"
          - cell:
            - button
            - button [disabled]
            - button
            - button
            - button
        - row "2 Player U25981 Scenario U25981 7 Aug 2025 06:28 PM 7 Aug 2025 06:33 PM - stopped":
          - cell "2":
            - paragraph: "2"
          - cell "Player U25981":
            - paragraph: Player U25981
          - cell "Scenario U25981":
            - paragraph: Scenario U25981
          - cell "7 Aug 2025 06:28 PM":
            - paragraph: 7 Aug 2025 06:28 PM
          - cell "7 Aug 2025 06:33 PM":
            - paragraph: 7 Aug 2025 06:33 PM
          - cell "-":
            - paragraph: "-"
          - cell "stopped"
          - cell:
            - button
            - button [disabled]
            - button
            - button
            - button
        - row "3 Player U25061 Scenario U25061 28 Jul 2025 04:24 PM 28 Jul 2025 04:29 PM - stopped":
          - cell "3":
            - paragraph: "3"
          - cell "Player U25061":
            - paragraph: Player U25061
          - cell "Scenario U25061":
            - paragraph: Scenario U25061
          - cell "28 Jul 2025 04:24 PM":
            - paragraph: 28 Jul 2025 04:24 PM
          - cell "28 Jul 2025 04:29 PM":
            - paragraph: 28 Jul 2025 04:29 PM
          - cell "-":
            - paragraph: "-"
          - cell "stopped"
          - cell:
            - button
            - button [disabled]
            - button
            - button
            - button
        - row "4 Player U11837 Scenario U11837 28 Jul 2025 12:43 PM 28 Jul 2025 12:48 PM - stopped":
          - cell "4":
            - paragraph: "4"
          - cell "Player U11837":
            - paragraph: Player U11837
          - cell "Scenario U11837":
            - paragraph: Scenario U11837
          - cell "28 Jul 2025 12:43 PM":
            - paragraph: 28 Jul 2025 12:43 PM
          - cell "28 Jul 2025 12:48 PM":
            - paragraph: 28 Jul 2025 12:48 PM
          - cell "-":
            - paragraph: "-"
          - cell "stopped"
          - cell:
            - button
            - button [disabled]
            - button
            - button
            - button
        - row "5 HO Player Sceario 12 ho 24 Jul 2025 05:16 PM 31 Jul 2025 06:16 PM off stopped":
          - cell "5":
            - paragraph: "5"
          - cell "HO Player":
            - paragraph: HO Player
          - cell "Sceario 12 ho":
            - paragraph: Sceario 12 ho
          - cell "24 Jul 2025 05:16 PM":
            - paragraph: 24 Jul 2025 05:16 PM
          - cell "31 Jul 2025 06:16 PM":
            - paragraph: 31 Jul 2025 06:16 PM
          - cell "off"
          - cell "stopped"
          - cell:
            - button
            - button [disabled]
            - button
            - button
            - button
        - row "6 Tokyo Player Scenario Testing 11 Jul 2025 11:11 AM 22 Jul 2025 09:07 PM off stopped":
          - cell "6":
            - paragraph: "6"
          - cell "Tokyo Player":
            - paragraph: Tokyo Player
          - cell "Scenario Testing":
            - paragraph: Scenario Testing
          - cell "11 Jul 2025 11:11 AM":
            - paragraph: 11 Jul 2025 11:11 AM
          - cell "22 Jul 2025 09:07 PM":
            - paragraph: 22 Jul 2025 09:07 PM
          - cell "off"
          - cell "stopped"
          - cell:
            - button
            - button [disabled]
            - button
            - button
            - button
        - row "7 Player W_1 Scenario W_3 24 Jul 2025 10:12 AM 25 Jul 2025 11:51 PM off played":
          - cell "7":
            - paragraph: "7"
          - cell "Player W_1":
            - paragraph: Player W_1
          - cell "Scenario W_3":
            - paragraph: Scenario W_3
          - cell "24 Jul 2025 10:12 AM":
            - paragraph: 24 Jul 2025 10:12 AM
          - cell "25 Jul 2025 11:51 PM":
            - paragraph: 25 Jul 2025 11:51 PM
          - cell "off"
          - cell "played"
          - cell:
            - button
            - button [disabled]
            - button
            - button
            - button
        - row "8 Player U48062 Scenario U48062 24 Jul 2025 11:56 AM 24 Jul 2025 12:01 PM - stopped":
          - cell "8":
            - paragraph: "8"
          - cell "Player U48062":
            - paragraph: Player U48062
          - cell "Scenario U48062":
            - paragraph: Scenario U48062
          - cell "24 Jul 2025 11:56 AM":
            - paragraph: 24 Jul 2025 11:56 AM
          - cell "24 Jul 2025 12:01 PM":
            - paragraph: 24 Jul 2025 12:01 PM
          - cell "-":
            - paragraph: "-"
          - cell "stopped"
          - cell:
            - button
            - button [disabled]
            - button
            - button
            - button
        - row "9 Player U54271 Scenario U54271 24 Jul 2025 11:43 AM 24 Jul 2025 11:48 AM - stopped":
          - cell "9":
            - paragraph: "9"
          - cell "Player U54271":
            - paragraph: Player U54271
          - cell "Scenario U54271":
            - paragraph: Scenario U54271
          - cell "24 Jul 2025 11:43 AM":
            - paragraph: 24 Jul 2025 11:43 AM
          - cell "24 Jul 2025 11:48 AM":
            - paragraph: 24 Jul 2025 11:48 AM
          - cell "-":
            - paragraph: "-"
          - cell "stopped"
          - cell:
            - button
            - button [disabled]
            - button
            - button
            - button
        - row "10 Player U66066 Scenario U66066 24 Jul 2025 11:39 AM 24 Jul 2025 11:44 AM - stopped":
          - cell "10":
            - paragraph: "10"
          - cell "Player U66066":
            - paragraph: Player U66066
          - cell "Scenario U66066":
            - paragraph: Scenario U66066
          - cell "24 Jul 2025 11:39 AM":
            - paragraph: 24 Jul 2025 11:39 AM
          - cell "24 Jul 2025 11:44 AM":
            - paragraph: 24 Jul 2025 11:44 AM
          - cell "-":
            - paragraph: "-"
          - cell "stopped"
          - cell:
            - button
            - button [disabled]
            - button
            - button
            - button
    - paragraph: Showing 1-10 from 72
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
        - button "Page 6": "6"
      - listitem:
        - button "Page 7": "7"
      - listitem:
        - button "Page 8": "8"
      - listitem:
        - button "Next page"
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
>  53 |     await page.getByRole('button', { name: '+ Add Group' }).click();
      |                                                             ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
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
   99 |     await page.getByRole('link', { name: 'Contents' }).click();
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
```