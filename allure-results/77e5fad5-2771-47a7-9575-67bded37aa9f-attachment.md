# Test info

- Name: CMS Application Automation >> Upload Video
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS-Test-Cases.spec.js:112:9

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Done' })
    - locator resolved to <button type="submit" class="group bg-primary text-white w-max h-11 rounded-lg text-sm md:text-base disabled:cursor-not-allowed gap-x-2 disabled:opacity-50 flex items-center justify-center px-4 md:px-8 font-medium cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] before:absolute before:content-[''] before:bg-white before:opacity-0 before:h-full before:w-full before:left-0 before:top-0 before:transition-opacity before:…>…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting for element to be visible, enabled and stable

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS-Test-Cases.spec.js:123:56
```

# Page snapshot

```yaml
- dialog:
  - img "Tick"
  - heading "Success!" [level=3]
  - paragraph: Video added successfully.
  - button "Done"
```

# Test source

```ts
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
   71 |       await page.getByRole('button', { name: 'Done' }).click();
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
  113 |       const stats = fs.statSync(videoPath);
  114 |       if (stats.size > 50 * 1024 * 1024) throw new Error(`Video file exceeds 50MB: ${videoFileName}`);
  115 |       await page.getByRole('link', { name: 'Contents' }).click();
  116 |       await page.getByRole('link', { name: 'Scenario' }).click();
  117 |       await page.getByRole('button', { name: 'All Videos' }).click();
  118 |       await page.getByRole('button', { name: '+ Add Videos' }).click();
  119 |       await page.locator('input[type="file"]').setInputFiles(videoPath);
  120 |       await page.waitForSelector(`text=${videoFileName}`, { timeout: 180000 });
  121 |       await page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });
  122 |       await page.getByRole('button', { name: 'Add' }).click();
> 123 |       await page.getByRole('button', { name: 'Done' }).click();
      |                                                        ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  124 |     });
  125 |
  126 |     test('Create Scenario', async () => {
  127 |       await page.getByRole('button', { name: 'All Scenarios' }).click();
  128 |       await page.getByRole('button', { name: '+ Make Scenario' }).click();
  129 |       await page.getByRole('textbox', { name: 'Enter scenario name' }).fill(scenarioName);
  130 |       await page.locator('.css-19bb58m').click();
  131 |       await page.getByRole('option', { name: videoFileName }).click();
  132 |       const scenarioAddButton = page.getByRole('button', { name: 'Add' });
  133 |       await expect(scenarioAddButton).toBeEnabled({ timeout: 15000 });
  134 |       await scenarioAddButton.click();
  135 |       await page.getByRole('button', { name: 'Done' }).click();
  136 |     });
  137 |
  138 |     test('Create Timetable', async () => {
  139 |       await page.getByRole('link', { name: 'Time Table' }).click();
  140 |       await page.getByRole('button', { name: '+ Add Time Table' }).click();
  141 |       const now = new Date();
  142 |       const startTime = now.toTimeString().slice(0, 5);
  143 |       const endTime = new Date(now.getTime() + 5 * 60000).toTimeString().slice(0, 5);
  144 |       await page.getByRole('textbox', { name: 'Enter time table name' }).fill(timetableName);
  145 |       await page.locator('.css-19bb58m').click();
  146 |       await page.getByRole('option', { name: scenarioName }).click();
  147 |       await page.getByPlaceholder('Select start time').fill(startTime);
  148 |       await page.getByPlaceholder('Select end time').fill(endTime);
  149 |       await page.getByRole('button', { name: 'Add' }).click();
  150 |       await page.getByRole('button', { name: 'Done' }).click();
  151 |     });
  152 |
  153 |     test('Create Schedule', async () => {
  154 |       await page.getByRole('link', { name: 'Schedule' }).click();
  155 |       await page.getByRole('button', { name: '+ Add Schedule' }).click();
  156 |       await page.getByRole('textbox', { name: 'Enter schedule name' }).fill(scheduleName);
  157 |       await page.locator('.css-19bb58m').click();
  158 |       await page.getByRole('option', { name: timetableName }).click();
  159 |       const today = new Date().getDate().toString();
  160 |       await page.getByRole('textbox', { name: 'Select start date' }).click();
  161 |       await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
  162 |       await page.getByRole('textbox', { name: 'Select end date' }).click();
  163 |       await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
  164 |       await page.getByRole('button', { name: 'Add' }).click();
  165 |       await page.waitForSelector('text=Schedule added successfully.', { timeout: 15000 });
  166 |       await page.getByRole('button', { name: 'Done' }).click();
  167 |     });
  168 |
  169 |     test('Assign Scenario to Player', async () => {
  170 |       await page.getByRole('link', { name: 'Dashboard' }).click();
  171 |       await page.getByRole('button', { name: '+ Assign Scenario' }).click();
  172 |       await page.locator('.css-19bb58m').first().click();
  173 |       await page.getByRole('option', { name: scenarioName }).click();
  174 |       await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  175 |       await page.getByRole('option', { name: playerName }).click();
  176 |       await page.getByRole('button', { name: 'Add' }).click();
  177 |       await page.getByRole('button', { name: 'Done' }).click();
  178 |     });
  179 |
  180 |     test('Create Manager', async () => {
  181 |       await page.getByRole('link', { name: 'User Account' }).click();
  182 |       await page.getByRole('button', { name: '+ Create Manager' }).click();
  183 |       await page.getByRole('textbox', { name: 'Enter first name' }).fill(uniqueFirstName);
  184 |       await page.getByRole('textbox', { name: 'Enter last name' }).fill(uniqueLastName);
  185 |       await page.getByRole('textbox', { name: 'Enter email' }).fill(uniqueEmail);
  186 |       await page.locator('.css-19bb58m').click();
  187 |       await page.getByRole('option', { name: groupName }).click();
  188 |       const managerAddButton = page.getByRole('button', { name: 'Add' });
  189 |       await expect(managerAddButton).toBeEnabled({ timeout: 10000 });
  190 |       await managerAddButton.click();
  191 |       await page.getByRole('button', { name: 'Done' }).click();
  192 |     });
  193 |
  194 |     test('Logout', async () => {
  195 |       await page.getByRole('button', { name: 'A', exact: true }).click();
  196 |       await page.getByRole('button', { name: 'Logout' }).click();
  197 |       await page.getByRole('button', { name: 'Yes' }).click();
  198 |       await page.waitForURL('**/login', { timeout: 60000 });
  199 |     });
  200 |
  201 |   test.afterAll(async () => {
  202 |     await browser.close();
  203 |   });
  204 | });
```