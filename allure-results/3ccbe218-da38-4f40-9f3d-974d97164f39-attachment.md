# Test info

- Name: CMS Application End-to-End Tests >> Create a new schedule
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:490:7

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Schedule' })

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:491:56
```

# Test source

```ts
  391 |     await page.getByRole('option', { name: subGroupName }).click();
  392 |     await page.getByRole('textbox', { name: 'Enter sub subgroup name' }).fill(subSubGroupName);
  393 |     await page.getByRole('button', { name: 'Add' }).click();
  394 |     await page.getByRole('button', { name: 'Done' }).click();
  395 |     await expect(page.getByText(subSubGroupName)).toBeVisible({ timeout: 10000 });
  396 |   });
  397 |
  398 |   test('Create a new player', async () => {
  399 |     await page.getByRole('link', { name: 'Lan Manager' }).click();
  400 |     await page.getByRole('list').filter({ hasText: /^Players$/ }).getByRole('link').click();
  401 |     await page.getByRole('button', { name: '+ Add Player' }).click();
  402 |     await page.locator('.css-19bb58m').first().click();
  403 |     await page.getByRole('option', { name: groupName }).click();
  404 |     await page.waitForSelector('.css-35k6c7-control > .css-hlgwow > .css-19bb58m:not([aria-disabled="true"])', { timeout: 10000 });
  405 |     await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  406 |     await page.getByRole('option', { name: subGroupName }).click();
  407 |     await page.waitForSelector('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m:not([aria-disabled="true"])', { timeout: 10000 });
  408 |     await page.locator('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  409 |     await page.getByRole('option', { name: subSubGroupName }).click();
  410 |     await page.getByRole('textbox', { name: 'Enter player name' }).fill(playerName);
  411 |     await page.getByRole('button', { name: 'Add' }).click();
  412 |     await page.waitForSelector('text=Player added successfully.', { timeout: 15000 });
  413 |     await page.getByRole('button', { name: 'Done' }).click();
  414 |     await expect(page.getByText(playerName)).toBeVisible({ timeout: 10000 });
  415 |   });
  416 |
  417 |   test('Upload a video', async () => {
  418 |     const projectRoot = path.resolve(__dirname, '..');
  419 |     const videoDir = path.join(projectRoot, 'videos');
  420 |     const existingFiles = fs.existsSync(videoDir) ? fs.readdirSync(videoDir) : [];
  421 |     const firstVideo = existingFiles.find(file => file.endsWith('.mp4'));
  422 |     if (!firstVideo) {
  423 |       console.warn('⚠️ No video found in videos/ folder');
  424 |       test.skip();
  425 |       return;
  426 |     }
  427 |     const oldPath = path.join(videoDir, firstVideo);
  428 |     const newPath = path.join(videoDir, videoFileName);
  429 |     fs.renameSync(oldPath, newPath);
  430 |     await page.getByRole('link', { name: 'Contents' }).click();
  431 |     await page.getByRole('link', { name: 'Scenario' }).click();
  432 |     await page.getByRole('button', { name: 'All Videos' }).click();
  433 |     await page.getByRole('button', { name: '+ Add Videos' }).click();
  434 |     const videoPath = path.join(videoDir, videoFileName);
  435 |     if (!fs.existsSync(videoPath)) {
  436 |       throw new Error(`Video file not found: ${videoPath}`);
  437 |     }
  438 |     const stats = fs.statSync(videoPath);
  439 |     if (stats.size > 50 * 1024 * 1024) {
  440 |       throw new Error(`Video file exceeds 50MB: ${videoFileName}`);
  441 |     }
  442 |     await page.locator('input[type="file"]').setInputFiles(videoPath);
  443 |     await page.waitForSelector(`text=${videoFileName}`, { timeout: 180000 });
  444 |     await page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });
  445 |     const addVideoButton = page.getByRole('button', { name: 'Add' });
  446 |     await addVideoButton.waitFor({ state: 'visible', timeout: 30000 });
  447 |     await addVideoButton.click();
  448 |     const doneButton = page.getByRole('button', { name: 'Done' });
  449 |     await doneButton.waitFor({ state: 'visible', timeout: 30000 });
  450 |     await doneButton.click();
  451 |     await expect(page.getByText(videoFileName)).toBeVisible({ timeout: 10000 });
  452 |   });
  453 |
  454 |   test('Create a new scenario', async () => {
  455 |     await page.getByRole('button', { name: 'All Scenarios' }).click();
  456 |     await page.getByRole('button', { name: '+ Make Scenario' }).click();
  457 |     await page.getByRole('textbox', { name: 'Enter scenario name' }).fill(scenarioName);
  458 |     await page.locator('.css-19bb58m').click();
  459 |     await page.getByRole('option', { name: videoFileName }).click();
  460 |     const scenarioAddButton = page.getByRole('button', { name: 'Add' });
  461 |     await scenarioAddButton.waitFor({ state: 'visible', timeout: 15000 });
  462 |     await expect(scenarioAddButton).toBeEnabled({ timeout: 15000 });
  463 |     await scenarioAddButton.click();
  464 |     const scenarioDoneButton = page.getByRole('button', { name: 'Done' });
  465 |     await scenarioDoneButton.waitFor({ state: 'visible', timeout: 5000 });
  466 |     await scenarioDoneButton.click();
  467 |     await expect(page.getByText(scenarioName)).toBeVisible({ timeout: 10000 });
  468 |   });
  469 |
  470 |   test('Create a new timetable', async () => {
  471 |     await page.getByRole('link', { name: 'Time Table' }).click({ timeout: 10000 });
  472 |     await page.getByRole('button', { name: '+ Add Time Table' }).click();
  473 |     const now = new Date();
  474 |     const startTime = now.toTimeString().slice(0, 5);
  475 |     const endDate = new Date(now.getTime() + 5 * 60000);
  476 |     const endTime = endDate.toTimeString().slice(0, 5);
  477 |     await page.getByRole('textbox', { name: 'Enter time table name' }).click();
  478 |     await page.getByRole('textbox', { name: 'Enter time table name' }).fill(timetableName);
  479 |     await page.locator('.css-19bb58m').click();
  480 |     await page.getByRole('option', { name: scenarioName }).click();
  481 |     await page.getByPlaceholder('Select start time').click();
  482 |     await page.getByPlaceholder('Select start time').fill(startTime);
  483 |     await page.getByPlaceholder('Select end time').click();
  484 |     await page.getByPlaceholder('Select end time').fill(endTime);
  485 |     await page.getByRole('button', { name: 'Add' }).click();
  486 |     await page.getByRole('button', { name: 'Done' }).click();
  487 |     await expect(page.getByText(timetableName)).toBeVisible({ timeout: 10000 });
  488 |   });
  489 |
  490 |   test('Create a new schedule', async () => {
> 491 |     await page.getByRole('link', { name: 'Schedule' }).click();
      |                                                        ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  492 |     await page.getByRole('button', { name: '+ Add Schedule' }).click();
  493 |     await page.getByRole('textbox', { name: 'Enter schedule name' }).fill(scheduleName);
  494 |     await page.locator('.css-19bb58m').click();
  495 |     await page.getByRole('option', { name: timetableName }).click();
  496 |     const today = new Date().getDate().toString();
  497 |     await page.getByRole('textbox', { name: 'Select start date' }).click();
  498 |     await page.waitForSelector(`.react-datepicker__day >> text="${today}"`, { timeout: 5000 });
  499 |     await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
  500 |     await page.getByRole('textbox', { name: 'Select end date' }).click();
  501 |     await page.waitForSelector(`.react-datepicker__day >> text="${today}"`, { timeout: 5000 });
  502 |     await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
  503 |     const addButton = page.getByRole('button', { name: 'Add' });
  504 |     await addButton.waitFor({ state: 'visible', timeout: 10000 });
  505 |     await addButton.click();
  506 |     await page.waitForSelector('text=Schedule added successfully.', { timeout: 15000 });
  507 |     await page.getByRole('button', { name: 'Done' }).click();
  508 |     await expect(page.getByText(scheduleName)).toBeVisible({ timeout: 10000 });
  509 |   });
  510 |
  511 |   test('Assign scenario to player', async () => {
  512 |     await page.getByRole('link', { name: 'Dashboard' }).click();
  513 |     await page.getByRole('button', { name: '+ Assign Scenario' }).click();
  514 |     await page.locator('.css-19bb58m').first().click();
  515 |     await page.getByRole('option', { name: scenarioName }).click();
  516 |     await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  517 |     await page.getByRole('option', { name: playerName }).click();
  518 |     await page.getByRole('button', { name: 'Add' }).click();
  519 |     await page.getByRole('button', { name: 'Done' }).click();
  520 |     await expect(page.getByText(`Assigned: ${scenarioName} to ${playerName}`)).toBeVisible({ timeout: 10000 });
  521 |   });
  522 |
  523 |   test('Create a new manager', async () => {
  524 |     await page.getByRole('link', { name: 'User Account' }).click();
  525 |     await page.getByRole('button', { name: '+ Create Manager' }).click();
  526 |     await page.getByRole('textbox', { name: 'Enter first name' }).fill(uniqueFirstName);
  527 |     await page.getByRole('textbox', { name: 'Enter last name' }).fill(uniqueLastName);
  528 |     await page.getByRole('textbox', { name: 'Enter email' }).fill(uniqueEmail);
  529 |     await page.locator('.css-19bb58m').click();
  530 |     await page.getByRole('option', { name: groupName }).click();
  531 |     const managerAddButton = page.getByRole('button', { name: 'Add' });
  532 |     await managerAddButton.waitFor({ state: 'visible', timeout: 10000 });
  533 |     await expect(managerAddButton).toBeEnabled({ timeout: 10000 });
  534 |     await managerAddButton.click();
  535 |     await page.getByRole('button', { name: 'Done' }).click();
  536 |     await expect(page.getByText(`${uniqueFirstName} ${uniqueLastName}`)).toBeVisible({ timeout: 10000 });
  537 |   });
  538 |
  539 |   test('Logout successfully', async () => {
  540 |     await page.getByRole('button', { name: 'A', exact: true }).click();
  541 |     await page.getByRole('button', { name: 'Logout' }).click();
  542 |     await page.getByRole('button', { name: 'Yes' }).click();
  543 |     await expect(page).toHaveURL(/login/, { timeout: 60000 });
  544 |   });
  545 | });
  546 |
```