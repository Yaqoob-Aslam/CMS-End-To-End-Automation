# Test info

- Name: Logout from CMS
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:531:5

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'A', exact: true })

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:532:62
```

# Test source

```ts
  432 |   const doneButton = page.getByRole('button', { name: 'Done' });
  433 |   await doneButton.waitFor({ state: 'visible', timeout: 30000 });
  434 |   await doneButton.click();
  435 | });
  436 |
  437 | // 7️⃣ Create Scenario
  438 | test('Create Scenario', async () => {
  439 |   await page.getByRole('button', { name: 'All Scenarios' }).click();
  440 |   await page.getByRole('button', { name: '+ Make Scenario' }).click();
  441 |   await page.getByRole('textbox', { name: 'Enter scenario name' }).fill(scenarioName);
  442 |   await page.locator('.css-19bb58m').click();
  443 |   await page.getByRole('option', { name: videoFileName }).click();
  444 |
  445 |   const scenarioAddButton = page.getByRole('button', { name: 'Add' });
  446 |   await scenarioAddButton.waitFor({ state: 'visible', timeout: 15000 });
  447 |   await expect(scenarioAddButton).toBeEnabled({ timeout: 15000 });
  448 |   await scenarioAddButton.click();
  449 |
  450 |   const scenarioDoneButton = page.getByRole('button', { name: 'Done' });
  451 |   await scenarioDoneButton.waitFor({ state: 'visible', timeout: 5000 });
  452 |   await scenarioDoneButton.click();
  453 | });
  454 |
  455 | // 8️⃣ Create Timetable
  456 | test('Create Timetable', async () => {
  457 |   const now = new Date();
  458 |   const startTime = now.toTimeString().slice(0, 5);
  459 |   const endTime = new Date(now.getTime() + 5 * 60000).toTimeString().slice(0, 5);
  460 |
  461 |   await page.getByRole('link', { name: 'Time Table' }).click({ timeout: 10000 });
  462 |   await page.getByRole('button', { name: '+ Add Time Table' }).click();
  463 |   await page.getByRole('textbox', { name: 'Enter time table name' }).fill(timetableName);
  464 |   await page.locator('.css-19bb58m').click();
  465 |   await page.getByRole('option', { name: scenarioName }).click();
  466 |   await page.getByPlaceholder('Select start time').fill(startTime);
  467 |   await page.getByPlaceholder('Select end time').fill(endTime);
  468 |   await page.getByRole('button', { name: 'Add' }).click();
  469 |   await page.getByRole('button', { name: 'Done' }).click();
  470 | });
  471 |
  472 | // 9️⃣ Create Schedule
  473 | test('Create Schedule', async () => {
  474 |   const today = new Date().getDate().toString();
  475 |
  476 |   await page.getByRole('link', { name: 'Schedule' }).click();
  477 |   await page.getByRole('button', { name: '+ Add Schedule' }).click();
  478 |   await page.getByRole('textbox', { name: 'Enter schedule name' }).fill(scheduleName);
  479 |   await page.locator('.css-19bb58m').click();
  480 |   await page.getByRole('option', { name: timetableName }).click();
  481 |
  482 |   await page.getByRole('textbox', { name: 'Select start date' }).click();
  483 |   await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
  484 |   await page.getByRole('textbox', { name: 'Select end date' }).click();
  485 |   await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
  486 |
  487 |   const addButton = page.getByRole('button', { name: 'Add' });
  488 |   await addButton.waitFor({ state: 'visible', timeout: 10000 });
  489 |   await addButton.click();
  490 |
  491 |   await page.waitForSelector('text=Schedule added successfully.', { timeout: 15000 });
  492 |   await page.getByRole('button', { name: 'Done' }).click();
  493 | });
  494 |
  495 | // 🔟 Assign Scenario to Player
  496 | test('Assign Scenario to Player', async () => {
  497 |   await page.getByRole('link', { name: 'Dashboard' }).click();
  498 |   await page.getByRole('button', { name: '+ Assign Scenario' }).click();
  499 |   await page.locator('.css-19bb58m').first().click();
  500 |   await page.getByRole('option', { name: scenarioName }).click();
  501 |   await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  502 |   await page.getByRole('option', { name: playerName }).click();
  503 |   await page.getByRole('button', { name: 'Add' }).click();
  504 |   await page.getByRole('button', { name: 'Done' }).click();
  505 | });
  506 |
  507 | // 1️⃣1️⃣ Create Manager
  508 | test('Create Manager', async () => {
  509 |   const firstNames = ['Ali', 'Sara', 'Usman', 'Ayesha', 'Omar', 'Fatima', 'Bilal', 'Hira', 'Zain', 'Zara'];
  510 |   const lastNames = ['Khan', 'Malik', 'Sheikh', 'Qureshi', 'Butt', 'Raza', 'Shah', 'Chaudhry', 'Hussain', 'Mirza'];
  511 |   const uniqueFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  512 |   const uniqueLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  513 |   const uniqueEmail = `${uniqueFirstName.toLowerCase()}.${uniqueLastName.toLowerCase()}${groupNumber}@mailinator.com`;
  514 |
  515 |   await page.getByRole('link', { name: 'User Account' }).click();
  516 |   await page.getByRole('button', { name: '+ Create Manager' }).click();
  517 |   await page.getByRole('textbox', { name: 'Enter first name' }).fill(uniqueFirstName);
  518 |   await page.getByRole('textbox', { name: 'Enter last name' }).fill(uniqueLastName);
  519 |   await page.getByRole('textbox', { name: 'Enter email' }).fill(uniqueEmail);
  520 |   await page.locator('.css-19bb58m').click();
  521 |   await page.getByRole('option', { name: groupName }).click();
  522 |
  523 |   const managerAddButton = page.getByRole('button', { name: 'Add' });
  524 |   await managerAddButton.waitFor({ state: 'visible', timeout: 10000 });
  525 |   await expect(managerAddButton).toBeEnabled();
  526 |   await managerAddButton.click();
  527 |   await page.getByRole('button', { name: 'Done' }).click();
  528 | });
  529 |
  530 | // 1️⃣2️⃣ Logout
  531 | test('Logout from CMS', async () => {
> 532 |   await page.getByRole('button', { name: 'A', exact: true }).click();
      |                                                              ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  533 |   await page.getByRole('button', { name: 'Logout' }).click();
  534 |   await page.getByRole('button', { name: 'Yes' }).click();
  535 |   await page.waitForURL('**/login', { timeout: 60000 });
  536 | });
  537 |
```