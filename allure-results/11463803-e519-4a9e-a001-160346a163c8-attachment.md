# Test info

- Name: CMS Application End-to-End Tests >> Create a new timetable
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:478:7

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Time Table' })

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:480:58
```

# Test source

```ts
  380 |     await page.locator('.css-19bb58m').first().click();
  381 |     await page.getByRole('option', { name: groupName }).click();
  382 |     await page.getByRole('textbox', { name: 'Enter sub group name' }).fill(subGroupName);
  383 |     await page.getByRole('button', { name: 'Add' }).click();
  384 |     await page.getByRole('button', { name: 'Done' }).click();
  385 |     await expect(page.getByText(subGroupName)).toBeVisible({ timeout: 10000 });
  386 |   });
  387 |
  388 |   test('Create a new sub-subgroup', async () => {
  389 |     test.slow();
  390 |     await page.getByRole('link', { name: 'Sub Subgroups' }).click();
  391 |     await page.getByRole('button', { name: '+ Add Sub Subgroup' }).click();
  392 |     await page.locator('.css-19bb58m').first().click();
  393 |     await page.getByRole('option', { name: groupName }).click();
  394 |     await page.locator('.css-35k6c7-control .css-19bb58m').click();
  395 |     await page.getByRole('option', { name: subGroupName }).waitFor({ state: 'visible', timeout: 10000 });
  396 |     await page.getByRole('option', { name: subGroupName }).click();
  397 |     await page.getByRole('textbox', { name: 'Enter sub subgroup name' }).fill(subSubGroupName);
  398 |     await page.getByRole('button', { name: 'Add' }).click();
  399 |     await page.getByRole('button', { name: 'Done' }).click();
  400 |     await expect(page.getByText(subSubGroupName)).toBeVisible({ timeout: 10000 });
  401 |   });
  402 |
  403 |   test('Create a new player', async () => {
  404 |     test.slow();
  405 |     await page.getByRole('link', { name: 'Lan Manager' }).click();
  406 |     await page.getByRole('list').filter({ hasText: /^Players$/ }).getByRole('link').click();
  407 |     await page.getByRole('button', { name: '+ Add Player' }).click();
  408 |     await page.locator('.css-19bb58m').first().click();
  409 |     await page.getByRole('option', { name: groupName }).click();
  410 |     await page.waitForSelector('.css-35k6c7-control > .css-hlgwow > .css-19bb58m:not([aria-disabled="true"])', { timeout: 10000 });
  411 |     await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  412 |     await page.getByRole('option', { name: subGroupName }).click();
  413 |     await page.waitForSelector('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m:not([aria-disabled="true"])', { timeout: 10000 });
  414 |     await page.locator('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  415 |     await page.getByRole('option', { name: subSubGroupName }).click();
  416 |     await page.getByRole('textbox', { name: 'Enter player name' }).fill(playerName);
  417 |     await page.getByRole('button', { name: 'Add' }).click();
  418 |     await page.waitForSelector('text=Player added successfully.', { timeout: 15000 });
  419 |     await page.getByRole('button', { name: 'Done' }).click();
  420 |     await expect(page.getByText(playerName)).toBeVisible({ timeout: 10000 });
  421 |   });
  422 |
  423 |   test('Upload a video', async () => {
  424 |     test.slow();
  425 |     const projectRoot = path.resolve(__dirname, '..');
  426 |     const videoDir = path.join(projectRoot, 'videos');
  427 |     const existingFiles = fs.existsSync(videoDir) ? fs.readdirSync(videoDir) : [];
  428 |     const firstVideo = existingFiles.find(file => file.endsWith('.mp4'));
  429 |     if (!firstVideo) {
  430 |       console.warn('⚠️ No video found in videos/ folder');
  431 |       test.skip();
  432 |       return;
  433 |     }
  434 |     const oldPath = path.join(videoDir, firstVideo);
  435 |     const newPath = path.join(videoDir, videoFileName);
  436 |     fs.renameSync(oldPath, newPath);
  437 |     await page.getByRole('link', { name: 'Contents' }).click();
  438 |     await page.getByRole('link', { name: 'Scenario' }).click();
  439 |     await page.getByRole('button', { name: 'All Videos' }).click();
  440 |     await page.getByRole('button', { name: '+ Add Videos' }).click();
  441 |     const videoPath = path.join(videoDir, videoFileName);
  442 |     if (!fs.existsSync(videoPath)) {
  443 |       throw new Error(`Video file not found: ${videoPath}`);
  444 |     }
  445 |     const stats = fs.statSync(videoPath);
  446 |     if (stats.size > 50 * 1024 * 1024) {
  447 |       throw new Error(`Video file exceeds 50MB: ${videoFileName}`);
  448 |     }
  449 |     await page.locator('input[type="file"]').setInputFiles(videoPath);
  450 |     await page.waitForSelector(`text=${videoFileName}`, { timeout: 180000 });
  451 |     await page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });
  452 |     const addVideoButton = page.getByRole('button', { name: 'Add' });
  453 |     await addVideoButton.waitFor({ state: 'visible', timeout: 30000 });
  454 |     await addVideoButton.click();
  455 |     const doneButton = page.getByRole('button', { name: 'Done' });
  456 |     await doneButton.waitFor({ state: 'visible', timeout: 30000 });
  457 |     await doneButton.click();
  458 |     await expect(page.getByText(videoFileName)).toBeVisible({ timeout: 10000 });
  459 |   });
  460 |
  461 |   test('Create a new scenario', async () => {
  462 |     test.slow();
  463 |     await page.getByRole('button', { name: 'All Scenarios' }).click();
  464 |     await page.getByRole('button', { name: '+ Make Scenario' }).click();
  465 |     await page.getByRole('textbox', { name: 'Enter scenario name' }).fill(scenarioName);
  466 |     await page.locator('.css-19bb58m').click();
  467 |     await page.getByRole('option', { name: videoFileName }).click();
  468 |     const scenarioAddButton = page.getByRole('button', { name: 'Add' });
  469 |     await scenarioAddButton.waitFor({ state: 'visible', timeout: 15000 });
  470 |     await expect(scenarioAddButton).toBeEnabled({ timeout: 15000 });
  471 |     await scenarioAddButton.click();
  472 |     const scenarioDoneButton = page.getByRole('button', { name: 'Done' });
  473 |     await scenarioDoneButton.waitFor({ state: 'visible', timeout: 5000 });
  474 |     await scenarioDoneButton.click();
  475 |     await expect(page.getByText(scenarioName)).toBeVisible({ timeout: 10000 });
  476 |   });
  477 |
  478 |   test('Create a new timetable', async () => {
  479 |     test.slow();
> 480 |     await page.getByRole('link', { name: 'Time Table' }).click({ timeout: 10000 });
      |                                                          ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  481 |     await page.getByRole('button', { name: '+ Add Time Table' }).click();
  482 |     const now = new Date();
  483 |     const startTime = now.toTimeString().slice(0, 5);
  484 |     const endDate = new Date(now.getTime() + 5 * 60000);
  485 |     const endTime = endDate.toTimeString().slice(0, 5);
  486 |     await page.getByRole('textbox', { name: 'Enter time table name' }).click();
  487 |     await page.getByRole('textbox', { name: 'Enter time table name' }).fill(timetableName);
  488 |     await page.locator('.css-19bb58m').click();
  489 |     await page.getByRole('option', { name: scenarioName }).click();
  490 |     await page.getByPlaceholder('Select start time').click();
  491 |     await page.getByPlaceholder('Select start time').fill(startTime);
  492 |     await page.getByPlaceholder('Select end time').click();
  493 |     await page.getByPlaceholder('Select end time').fill(endTime);
  494 |     await page.getByRole('button', { name: 'Add' }).click();
  495 |     await page.getByRole('button', { name: 'Done' }).click();
  496 |     await expect(page.getByText(timetableName)).toBeVisible({ timeout: 10000 });
  497 |   });
  498 |
  499 |   test('Create a new schedule', async () => {
  500 |     test.slow();
  501 |     await page.getByRole('link', { name: 'Schedule' }).click();
  502 |     await page.getByRole('button', { name: '+ Add Schedule' }).click();
  503 |     await page.getByRole('textbox', { name: 'Enter schedule name' }).fill(scheduleName);
  504 |     await page.locator('.css-19bb58m').click();
  505 |     await page.getByRole('option', { name: timetableName }).click();
  506 |     const today = new Date().getDate().toString();
  507 |     await page.getByRole('textbox', { name: 'Select start date' }).click();
  508 |     await page.waitForSelector(`.react-datepicker__day >> text="${today}"`, { timeout: 5000 });
  509 |     await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
  510 |     await page.getByRole('textbox', { name: 'Select end date' }).click();
  511 |     await page.waitForSelector(`.react-datepicker__day >> text="${today}"`, { timeout: 5000 });
  512 |     await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
  513 |     const addButton = page.getByRole('button', { name: 'Add' });
  514 |     await addButton.waitFor({ state: 'visible', timeout: 10000 });
  515 |     await addButton.click();
  516 |     await page.waitForSelector('text=Schedule added successfully.', { timeout: 15000 });
  517 |     await page.getByRole('button', { name: 'Done' }).click();
  518 |     await expect(page.getByText(scheduleName)).toBeVisible({ timeout: 10000 });
  519 |   });
  520 |
  521 |   test('Assign scenario to player', async () => {
  522 |     test.slow();
  523 |     await page.getByRole('link', { name: 'Dashboard' }).click();
  524 |     await page.getByRole('button', { name: '+ Assign Scenario' }).click();
  525 |     await page.locator('.css-19bb58m').first().click();
  526 |     await page.getByRole('option', { name: scenarioName }).click();
  527 |     await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  528 |     await page.getByRole('option', { name: playerName }).click();
  529 |     await page.getByRole('button', { name: 'Add' }).click();
  530 |     await page.getByRole('button', { name: 'Done' }).click();
  531 |     await expect(page.getByText(`Assigned: ${scenarioName} to ${playerName}`)).toBeVisible({ timeout: 10000 });
  532 |   });
  533 |
  534 |   test('Create a new manager', async () => {
  535 |     test.slow();
  536 |     await page.getByRole('link', { name: 'User Account' }).click();
  537 |     await page.getByRole('button', { name: '+ Create Manager' }).click();
  538 |     await page.getByRole('textbox', { name: 'Enter first name' }).fill(uniqueFirstName);
  539 |     await page.getByRole('textbox', { name: 'Enter last name' }).fill(uniqueLastName);
  540 |     await page.getByRole('textbox', { name: 'Enter email' }).fill(uniqueEmail);
  541 |     await page.locator('.css-19bb58m').click();
  542 |     await page.getByRole('option', { name: groupName }).click();
  543 |     const managerAddButton = page.getByRole('button', { name: 'Add' });
  544 |     await managerAddButton.waitFor({ state: 'visible', timeout: 10000 });
  545 |     await expect(managerAddButton).toBeEnabled({ timeout: 10000 });
  546 |     await managerAddButton.click();
  547 |     await page.getByRole('button', { name: 'Done' }).click();
  548 |     await expect(page.getByText(`${uniqueFirstName} ${uniqueLastName}`)).toBeVisible({ timeout: 10000 });
  549 |   });
  550 |
  551 |   test('Logout successfully', async () => {
  552 |     test.slow();
  553 |     await page.getByRole('button', { name: 'A', exact: true }).click();
  554 |     await page.getByRole('button', { name: 'Logout' }).click();
  555 |     await page.getByRole('button', { name: 'Yes' }).click();
  556 |     await expect(page).toHaveURL(/login/, { timeout: 60000 });
  557 |   });
  558 | });
  559 |
```