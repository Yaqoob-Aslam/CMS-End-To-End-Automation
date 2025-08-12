# Test info

- Name: CMS End-to-End Automation >> Logout
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS-Test-Cases.spec.js:191:7

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'A', exact: true })

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS-Test-Cases.spec.js:192:64
```

# Test source

```ts
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
> 192 |     await page.getByRole('button', { name: 'A', exact: true }).click();
      |                                                                ^ Error: locator.click: Target page, context or browser has been closed
  193 |     await page.getByRole('button', { name: 'Logout' }).click();
  194 |     await page.getByRole('button', { name: 'Yes' }).click();
  195 |     await page.waitForURL('**/login', { timeout: 60000 });
  196 |   });
  197 |
  198 |   test.afterAll(async () => {
  199 |     await browser.close();
  200 |   });
  201 | });
  202 |
```