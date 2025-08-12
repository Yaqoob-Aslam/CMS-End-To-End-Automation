# Test info

- Name: CMS Application Automation >> Scheduling >> Create Timetable
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS-Test-Cases.spec.js:143:9

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Time Table' })

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS-Test-Cases.spec.js:144:60
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
          - link:
            - /url: /dashboard
            - img
        - listitem:
          - link:
            - /url: /managers
            - img
        - listitem:
          - link:
            - /url: /dashboard
            - img
        - listitem:
          - link:
            - /url: /dashboard
            - img
        - listitem:
          - link:
            - /url: /dashboard
        - listitem:
          - link:
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
        - row "1 Player U22247 Scenario U22247 12 Aug 2025 12:51 PM 12 Aug 2025 12:56 PM - stopped":
          - cell "1":
            - paragraph: "1"
          - cell "Player U22247":
            - paragraph: Player U22247
          - cell "Scenario U22247":
            - paragraph: Scenario U22247
          - cell "12 Aug 2025 12:51 PM":
            - paragraph: 12 Aug 2025 12:51 PM
          - cell "12 Aug 2025 12:56 PM":
            - paragraph: 12 Aug 2025 12:56 PM
          - cell "-":
            - paragraph: "-"
          - cell "stopped"
          - cell:
            - button
            - button [disabled]
            - button
            - button
            - button
        - row "2 Player U3988 Scenario U3988 8 Aug 2025 06:33 PM 8 Aug 2025 06:38 PM - stopped":
          - cell "2":
            - paragraph: "2"
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
        - row "3 Player U25981 Scenario U25981 7 Aug 2025 06:28 PM 7 Aug 2025 06:33 PM - stopped":
          - cell "3":
            - paragraph: "3"
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
        - row "4 Player U25061 Scenario U25061 28 Jul 2025 04:24 PM 28 Jul 2025 04:29 PM - stopped":
          - cell "4":
            - paragraph: "4"
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
        - row "5 Player U11837 Scenario U11837 28 Jul 2025 12:43 PM 28 Jul 2025 12:48 PM - stopped":
          - cell "5":
            - paragraph: "5"
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
        - row "6 HO Player Sceario 12 ho 24 Jul 2025 05:16 PM 31 Jul 2025 06:16 PM off stopped":
          - cell "6":
            - paragraph: "6"
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
        - row "7 Tokyo Player Scenario Testing 11 Jul 2025 11:11 AM 22 Jul 2025 09:07 PM off stopped View Details":
          - cell "7":
            - paragraph: "7"
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
          - cell "View Details":
            - button
            - button [disabled]
            - button
            - text: View Details
            - button
            - button
        - row "8 Player W_1 Scenario W_3 24 Jul 2025 10:12 AM 25 Jul 2025 11:51 PM off played":
          - cell "8":
            - paragraph: "8"
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
        - row "9 Player U48062 Scenario U48062 24 Jul 2025 11:56 AM 24 Jul 2025 12:01 PM - stopped":
          - cell "9":
            - paragraph: "9"
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
        - row "10 Player U54271 Scenario U54271 24 Jul 2025 11:43 AM 24 Jul 2025 11:48 AM - stopped":
          - cell "10":
            - paragraph: "10"
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
    - paragraph: Showing 1-10 from 73
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
   44 |     fs.renameSync(oldPath, newPath);
   45 |     videoPath = newPath;
   46 |
   47 |     // Launch browser
   48 |     browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
   49 |     context = await browser.newContext({ viewport: null, deviceScaleFactor: undefined });
   50 |     page = await context.newPage();
   51 |   });
   52 |
   53 |   test.beforeEach(async () => {
   54 |     await page.goto('https://moyai-cms.innov8.jp/login', { timeout: 90000 });
   55 |     if (!process.env.CMS_EMAIL || !process.env.CMS_PASSWORD) {
   56 |       throw new Error('Missing required environment variables: CMS_EMAIL and CMS_PASSWORD');
   57 |     }
   58 |     await page.getByRole('textbox', { name: 'Enter your email address' }).fill(process.env.CMS_EMAIL);
   59 |     await page.getByRole('textbox', { name: 'Enter your password' }).fill(process.env.CMS_PASSWORD);
   60 |     await page.getByRole('button', { name: 'Login' }).click();
   61 |     // await page.waitForURL('**/dashboard', { timeout: 60000 });
   62 |   });
   63 |
   64 |   test.describe('Group & Player Management', () => {
   65 |     test('Create Group', async () => {
   66 |       await page.getByRole('button', { name: 'Expand Icon' }).click();
   67 |       await page.getByRole('link', { name: 'Groups' }).click();
   68 |       await page.getByRole('listitem').filter({ hasText: /^Groups$/ }).getByRole('link').click();
   69 |       await page.getByRole('button', { name: '+ Add Group' }).click();
   70 |       await page.getByRole('textbox', { name: 'Enter group name' }).fill(groupName);
   71 |       await page.getByRole('button', { name: 'Add' }).click();
   72 |       await page.getByRole('button', { name: 'Done' }).click();
   73 |     });
   74 |
   75 |     test('Create Subgroup', async () => {
   76 |       await page.getByRole('link', { name: 'Subgroups', exact: true }).click();
   77 |       await page.getByRole('button', { name: '+ Add Subgroup' }).click();
   78 |       await page.locator('.css-19bb58m').first().click();
   79 |       await page.getByRole('option', { name: groupName }).click();
   80 |       await page.getByRole('textbox', { name: 'Enter sub group name' }).fill(subGroupName);
   81 |       await page.getByRole('button', { name: 'Add' }).click();
   82 |       await page.getByRole('button', { name: 'Done' }).click();
   83 |     });
   84 |
   85 |     test('Create Sub Subgroup', async () => {
   86 |       await page.getByRole('link', { name: 'Sub Subgroups' }).click();
   87 |       await page.getByRole('button', { name: '+ Add Sub Subgroup' }).click();
   88 |       await page.locator('.css-19bb58m').first().click();
   89 |       await page.getByRole('option', { name: groupName }).click();
   90 |       await page.locator('.css-35k6c7-control .css-19bb58m').click();
   91 |       await page.getByRole('option', { name: subGroupName }).click();
   92 |       await page.getByRole('textbox', { name: 'Enter sub subgroup name' }).fill(subSubGroupName);
   93 |       await page.getByRole('button', { name: 'Add' }).click();
   94 |       await page.getByRole('button', { name: 'Done' }).click();
   95 |     });
   96 |
   97 |     test('Create Player', async () => {
   98 |       await page.getByRole('link', { name: 'Lan Manager' }).click();
   99 |       await page.getByRole('list').filter({ hasText: /^Players$/ }).getByRole('link').click();
  100 |       await page.getByRole('button', { name: '+ Add Player' }).click();
  101 |       await page.locator('.css-19bb58m').first().click();
  102 |       await page.getByRole('option', { name: groupName }).click();
  103 |       await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  104 |       await page.getByRole('option', { name: subGroupName }).click();
  105 |       await page.locator('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  106 |       await page.getByRole('option', { name: subSubGroupName }).click();
  107 |       await page.getByRole('textbox', { name: 'Enter player name' }).fill(playerName);
  108 |       await page.getByRole('button', { name: 'Add' }).click();
  109 |       await page.waitForSelector('text=Player added successfully.', { timeout: 15000 });
  110 |       await page.getByRole('button', { name: 'Done' }).click();
  111 |     });
  112 |   });
  113 |
  114 |   test.describe('Content Management', () => {
  115 |     test('Upload Video', async () => {
  116 |       const stats = fs.statSync(videoPath);
  117 |       if (stats.size > 50 * 1024 * 1024) throw new Error(`Video file exceeds 50MB: ${videoFileName}`);
  118 |       await page.getByRole('link', { name: 'Contents' }).click();
  119 |       await page.getByRole('link', { name: 'Scenario' }).click();
  120 |       await page.getByRole('button', { name: 'All Videos' }).click();
  121 |       await page.getByRole('button', { name: '+ Add Videos' }).click();
  122 |       await page.locator('input[type="file"]').setInputFiles(videoPath);
  123 |       await page.waitForSelector(`text=${videoFileName}`, { timeout: 180000 });
  124 |       await page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });
  125 |       await page.getByRole('button', { name: 'Add' }).click();
  126 |       await page.getByRole('button', { name: 'Done' }).click();
  127 |     });
  128 |
  129 |     test('Create Scenario', async () => {
  130 |       await page.getByRole('button', { name: 'All Scenarios' }).click();
  131 |       await page.getByRole('button', { name: '+ Make Scenario' }).click();
  132 |       await page.getByRole('textbox', { name: 'Enter scenario name' }).fill(scenarioName);
  133 |       await page.locator('.css-19bb58m').click();
  134 |       await page.getByRole('option', { name: videoFileName }).click();
  135 |       const scenarioAddButton = page.getByRole('button', { name: 'Add' });
  136 |       await expect(scenarioAddButton).toBeEnabled({ timeout: 15000 });
  137 |       await scenarioAddButton.click();
  138 |       await page.getByRole('button', { name: 'Done' }).click();
  139 |     });
  140 |   });
  141 |
  142 |   test.describe('Scheduling', () => {
  143 |     test('Create Timetable', async () => {
> 144 |       await page.getByRole('link', { name: 'Time Table' }).click();
      |                                                            ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  145 |       await page.getByRole('button', { name: '+ Add Time Table' }).click();
  146 |       const now = new Date();
  147 |       const startTime = now.toTimeString().slice(0, 5);
  148 |       const endTime = new Date(now.getTime() + 5 * 60000).toTimeString().slice(0, 5);
  149 |       await page.getByRole('textbox', { name: 'Enter time table name' }).fill(timetableName);
  150 |       await page.locator('.css-19bb58m').click();
  151 |       await page.getByRole('option', { name: scenarioName }).click();
  152 |       await page.getByPlaceholder('Select start time').fill(startTime);
  153 |       await page.getByPlaceholder('Select end time').fill(endTime);
  154 |       await page.getByRole('button', { name: 'Add' }).click();
  155 |       await page.getByRole('button', { name: 'Done' }).click();
  156 |     });
  157 |
  158 |     test('Create Schedule', async () => {
  159 |       await page.getByRole('link', { name: 'Schedule' }).click();
  160 |       await page.getByRole('button', { name: '+ Add Schedule' }).click();
  161 |       await page.getByRole('textbox', { name: 'Enter schedule name' }).fill(scheduleName);
  162 |       await page.locator('.css-19bb58m').click();
  163 |       await page.getByRole('option', { name: timetableName }).click();
  164 |       const today = new Date().getDate().toString();
  165 |       await page.getByRole('textbox', { name: 'Select start date' }).click();
  166 |       await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
  167 |       await page.getByRole('textbox', { name: 'Select end date' }).click();
  168 |       await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
  169 |       await page.getByRole('button', { name: 'Add' }).click();
  170 |       await page.waitForSelector('text=Schedule added successfully.', { timeout: 15000 });
  171 |       await page.getByRole('button', { name: 'Done' }).click();
  172 |     });
  173 |
  174 |     test('Assign Scenario to Player', async () => {
  175 |       await page.getByRole('link', { name: 'Dashboard' }).click();
  176 |       await page.getByRole('button', { name: '+ Assign Scenario' }).click();
  177 |       await page.locator('.css-19bb58m').first().click();
  178 |       await page.getByRole('option', { name: scenarioName }).click();
  179 |       await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  180 |       await page.getByRole('option', { name: playerName }).click();
  181 |       await page.getByRole('button', { name: 'Add' }).click();
  182 |       await page.getByRole('button', { name: 'Done' }).click();
  183 |     });
  184 |   });
  185 |
  186 |   test.describe('User Management & Logout', () => {
  187 |     test('Create Manager', async () => {
  188 |       await page.getByRole('link', { name: 'User Account' }).click();
  189 |       await page.getByRole('button', { name: '+ Create Manager' }).click();
  190 |       await page.getByRole('textbox', { name: 'Enter first name' }).fill(uniqueFirstName);
  191 |       await page.getByRole('textbox', { name: 'Enter last name' }).fill(uniqueLastName);
  192 |       await page.getByRole('textbox', { name: 'Enter email' }).fill(uniqueEmail);
  193 |       await page.locator('.css-19bb58m').click();
  194 |       await page.getByRole('option', { name: groupName }).click();
  195 |       const managerAddButton = page.getByRole('button', { name: 'Add' });
  196 |       await expect(managerAddButton).toBeEnabled({ timeout: 10000 });
  197 |       await managerAddButton.click();
  198 |       await page.getByRole('button', { name: 'Done' }).click();
  199 |     });
  200 |
  201 |     test('Logout', async () => {
  202 |       await page.getByRole('button', { name: 'A', exact: true }).click();
  203 |       await page.getByRole('button', { name: 'Logout' }).click();
  204 |       await page.getByRole('button', { name: 'Yes' }).click();
  205 |       await page.waitForURL('**/login', { timeout: 60000 });
  206 |     });
  207 |   });
  208 |
  209 |   test.afterAll(async () => {
  210 |     await browser.close();
  211 |   });
  212 | });
  213 |
```