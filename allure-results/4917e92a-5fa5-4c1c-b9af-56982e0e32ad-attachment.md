# Test info

- Name: CMS Application Automation >> Assign Scenario to Player
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS-Test-Cases.spec.js:179:9

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('option', { name: 'Scenario U67470' })

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS-Test-Cases.spec.js:183:62
```

# Page snapshot

```yaml
- dialog "Assign Scenario":
  - heading "Assign Scenario" [level=2]
  - text: Scenario *
  - subscript
  - subscript
  - log: Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu, press Tab to select the option and exit the menu.
  - text: Select scenario
  - combobox [expanded]
  - text: Player *
  - subscript
  - subscript
  - log
  - text: Select player
  - combobox
  - button "Cancel"
  - button "Add"
- listbox: Nothing found
```

# Test source

```ts
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
  113 |     await page.getByRole('link', { name: 'Contents' }).click();
  114 |     await page.getByRole('link', { name: 'Scenario' }).click();
  115 |     await page.getByRole('button', { name: 'All Videos' }).click();
  116 |     await page.getByRole('button', { name: '+ Add Videos' }).click();
  117 |     const videoPath = path.join(videoDir, videoFileName);
  118 |     if (!fs.existsSync(videoPath)) {
  119 |       throw new Error(`Video file not found: ${videoPath}`);
  120 |     }
  121 |     const stats = fs.statSync(videoPath);
  122 |     if (stats.size > 50 * 1024 * 1024) {
  123 |       throw new Error(`Video file exceeds 50MB: ${videoFileName}`);
  124 |     }
  125 |     await page.locator('input[type="file"]').setInputFiles(videoPath);
  126 |     await page.waitForSelector(`text=${videoFileName}`, { timeout: 180000 });
  127 |     await page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });
  128 |     const addVideoButton = page.getByRole('button', { name: 'Add' });
  129 |     await addVideoButton.waitFor({ state: 'visible', timeout: 30000 });
  130 |     await addVideoButton.click();
  131 |     const doneButton = page.getByRole('button', { name: 'Done' });
  132 |     await doneButton.waitFor({ state: 'visible', timeout: 30000 });
  133 |     await doneButton.click();
  134 |     });
  135 |
  136 |     test('Create Scenario', async () => {
  137 |       await page.getByRole('button', { name: 'All Scenarios' }).click();
  138 |       await page.getByRole('button', { name: '+ Make Scenario' }).click();
  139 |       await page.getByRole('textbox', { name: 'Enter scenario name' }).fill(scenarioName);
  140 |       await page.locator('.css-19bb58m').click();
  141 |       await page.getByRole('option', { name: videoFileName }).click();
  142 |       const scenarioAddButton = page.getByRole('button', { name: 'Add' });
  143 |       await expect(scenarioAddButton).toBeEnabled({ timeout: 15000 });
  144 |       await scenarioAddButton.click();
  145 |       await page.getByRole('button', { name: 'Done' }).click();
  146 |     });
  147 |
  148 |     test('Create Timetable', async () => {
  149 |       await page.getByRole('link', { name: 'Time Table' }).click();
  150 |       await page.getByRole('button', { name: '+ Add Time Table' }).click();
  151 |       const now = new Date();
  152 |       const startTime = now.toTimeString().slice(0, 5);
  153 |       const endTime = new Date(now.getTime() + 5 * 60000).toTimeString().slice(0, 5);
  154 |       await page.getByRole('textbox', { name: 'Enter time table name' }).fill(timetableName);
  155 |       await page.locator('.css-19bb58m').click();
  156 |       await page.getByRole('option', { name: scenarioName }).click();
  157 |       await page.getByPlaceholder('Select start time').fill(startTime);
  158 |       await page.getByPlaceholder('Select end time').fill(endTime);
  159 |       await page.getByRole('button', { name: 'Add' }).click();
  160 |       await page.getByRole('button', { name: 'Done' }).click();
  161 |     });
  162 |
  163 |     test('Create Schedule', async () => {
  164 |       await page.getByRole('link', { name: 'Schedule' }).click();
  165 |       await page.getByRole('button', { name: '+ Add Schedule' }).click();
  166 |       await page.getByRole('textbox', { name: 'Enter schedule name' }).fill(scheduleName);
  167 |       await page.locator('.css-19bb58m').click();
  168 |       await page.getByRole('option', { name: timetableName }).click();
  169 |       const today = new Date().getDate().toString();
  170 |       await page.getByRole('textbox', { name: 'Select start date' }).click();
  171 |       await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
  172 |       await page.getByRole('textbox', { name: 'Select end date' }).click();
  173 |       await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
  174 |       await page.getByRole('button', { name: 'Add' }).click();
  175 |       await page.waitForSelector('text=Schedule added successfully.', { timeout: 15000 });
  176 |       await page.getByRole('button', { name: 'Done' }).click();
  177 |     });
  178 |
  179 |     test('Assign Scenario to Player', async () => {
  180 |       await page.getByRole('link', { name: 'Dashboard' }).click();
  181 |       await page.getByRole('button', { name: '+ Assign Scenario' }).click();
  182 |       await page.locator('.css-19bb58m').first().click();
> 183 |       await page.getByRole('option', { name: scenarioName }).click();
      |                                                              ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  184 |       await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  185 |       await page.getByRole('option', { name: playerName }).click();
  186 |       await page.getByRole('button', { name: 'Add' }).click();
  187 |       await page.getByRole('button', { name: 'Done' }).click();
  188 |     });
  189 |
  190 |     test('Create Manager', async () => {
  191 |       await page.getByRole('link', { name: 'User Account' }).click();
  192 |       await page.getByRole('button', { name: '+ Create Manager' }).click();
  193 |       await page.getByRole('textbox', { name: 'Enter first name' }).fill(uniqueFirstName);
  194 |       await page.getByRole('textbox', { name: 'Enter last name' }).fill(uniqueLastName);
  195 |       await page.getByRole('textbox', { name: 'Enter email' }).fill(uniqueEmail);
  196 |       await page.locator('.css-19bb58m').click();
  197 |       await page.getByRole('option', { name: groupName }).click();
  198 |       const managerAddButton = page.getByRole('button', { name: 'Add' });
  199 |       await expect(managerAddButton).toBeEnabled({ timeout: 10000 });
  200 |       await managerAddButton.click();
  201 |       await page.getByRole('button', { name: 'Done' }).click();
  202 |     });
  203 |
  204 |     test('Logout', async () => {
  205 |       await page.getByRole('button', { name: 'A', exact: true }).click();
  206 |       await page.getByRole('button', { name: 'Logout' }).click();
  207 |       await page.getByRole('button', { name: 'Yes' }).click();
  208 |       await page.waitForURL('**/login', { timeout: 60000 });
  209 |     });
  210 |
  211 |   test.afterAll(async () => {
  212 |     await browser.close();
  213 |   });
  214 | });
```