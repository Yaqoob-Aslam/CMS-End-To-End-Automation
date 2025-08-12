# Test info

- Name: CMS Application End-to-End Tests >> Create a new timetable
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:519:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Time Table' })

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:522:60
```

# Test source

```ts
  422 |   test('Create a new player', async ({}, testInfo) => {
  423 |     test.slow();
  424 |     try {
  425 |       await page.getByRole('link', { name: 'Lan Manager' }).click();
  426 |       await page.getByRole('list').filter({ hasText: /^Players$/ }).getByRole('link').click();
  427 |       await page.getByRole('button', { name: '+ Add Player' }).click();
  428 |       await page.locator('.css-19bb58m').first().click();
  429 |       await page.getByRole('option', { name: groupName }).click();
  430 |       await page.waitForSelector('.css-35k6c7-control > .css-hlgwow > .css-19bb58m:not([aria-disabled="true"])', { timeout: 10000 });
  431 |       await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  432 |       await page.getByRole('option', { name: subGroupName }).click();
  433 |       await page.waitForSelector('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m:not([aria-disabled="true"])', { timeout: 10000 });
  434 |       await page.locator('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  435 |       await page.getByRole('option', { name: subSubGroupName }).click();
  436 |       await page.getByRole('textbox', { name: 'Enter player name' }).fill(playerName);
  437 |       await page.getByRole('button', { name: 'Add' }).click();
  438 |       await page.waitForSelector('text=Player added successfully.', { timeout: 15000 });
  439 |       await page.getByRole('button', { name: 'Done' }).click();
  440 |       await expect(page.getByText(playerName)).toBeVisible({ timeout: 10000 });
  441 |     } catch (error) {
  442 |       await testInfo.attach('error-screenshot', {
  443 |         body: await page.screenshot(),
  444 |         contentType: 'image/png',
  445 |       });
  446 |       throw error;
  447 |     }
  448 |   });
  449 |
  450 |   test('Upload a video', async ({}, testInfo) => {
  451 |     test.slow();
  452 |     try {
  453 |       const projectRoot = path.resolve(__dirname, '..');
  454 |       const videoDir = path.join(projectRoot, 'videos');
  455 |       const existingFiles = fs.existsSync(videoDir) ? fs.readdirSync(videoDir) : [];
  456 |       const firstVideo = existingFiles.find(file => file.endsWith('.mp4'));
  457 |       if (!firstVideo) {
  458 |         throw new Error('No video found in videos/ folder');
  459 |       }
  460 |       const oldPath = path.join(videoDir, firstVideo);
  461 |       const newPath = path.join(videoDir, videoFileName);
  462 |       fs.renameSync(oldPath, newPath);
  463 |       await page.getByRole('link', { name: 'Contents' }).click();
  464 |       await page.getByRole('link', { name: 'Scenario' }).click();
  465 |       await page.getByRole('button', { name: 'All Videos' }).click();
  466 |       await page.getByRole('button', { name: '+ Add Videos' }).click();
  467 |       const videoPath = path.join(videoDir, videoFileName);
  468 |       if (!fs.existsSync(videoPath)) {
  469 |         throw new Error(`Video file not found: ${videoPath}`);
  470 |       }
  471 |       const stats = fs.statSync(videoPath);
  472 |       if (stats.size > 50 * 1024 * 1024) {
  473 |         throw new Error(`Video file exceeds 50MB: ${videoFileName}`);
  474 |       }
  475 |       await page.locator('input[type="file"]').setInputFiles(videoPath);
  476 |       await page.waitForSelector(`text=${videoFileName}`, { timeout: 180000 });
  477 |       await page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });
  478 |       const addVideoButton = page.getByRole('button', { name: 'Add' });
  479 |       await addVideoButton.waitFor({ state: 'visible', timeout: 30000 });
  480 |       await addVideoButton.click();
  481 |       const doneButton = page.getByRole('button', { name: 'Done' });
  482 |       await doneButton.waitFor({ state: 'visible', timeout: 30000 });
  483 |       await doneButton.click();
  484 |       await expect(page.getByText(videoFileName)).toBeVisible({ timeout: 10000 });
  485 |     } catch (error) {
  486 |       await testInfo.attach('error-screenshot', {
  487 |         body: await page.screenshot(),
  488 |         contentType: 'image/png',
  489 |       });
  490 |       throw error;
  491 |     }
  492 |   });
  493 |
  494 |   test('Create a new scenario', async ({}, testInfo) => {
  495 |     test.slow();
  496 |     try {
  497 |       await page.getByRole('button', { name: 'All Scenarios' }).click();
  498 |       await page.getByRole('button', { name: '+ Make Scenario' }).click();
  499 |       await page.getByRole('textbox', { name: 'Enter scenario name' }).fill(scenarioName);
  500 |       await page.locator('.css-19bb58m').click();
  501 |       await page.getByRole('option', { name: videoFileName }).click();
  502 |       const scenarioAddButton = page.getByRole('button', { name: 'Add' });
  503 |       await scenarioAddButton.waitFor({ state: 'visible', timeout: 15000 });
  504 |       await expect(scenarioAddButton).toBeEnabled({ timeout: 15000 });
  505 |       await scenarioAddButton.click();
  506 |       const scenarioDoneButton = page.getByRole('button', { name: 'Done' });
  507 |       await scenarioDoneButton.waitFor({ state: 'visible', timeout: 5000 });
  508 |       await scenarioDoneButton.click();
  509 |       await expect(page.getByText(scenarioName)).toBeVisible({ timeout: 10000 });
  510 |     } catch (error) {
  511 |       await testInfo.attach('error-screenshot', {
  512 |         body: await page.screenshot(),
  513 |         contentType: 'image/png',
  514 |       });
  515 |       throw error;
  516 |     }
  517 |   });
  518 |
  519 |   test('Create a new timetable', async ({}, testInfo) => {
  520 |     test.slow();
  521 |     try {
> 522 |       await page.getByRole('link', { name: 'Time Table' }).click({ timeout: 10000 });
      |                                                            ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  523 |       await page.getByRole('button', { name: '+ Add Time Table' }).click();
  524 |       const now = new Date();
  525 |       const startTime = now.toTimeString().slice(0, 5);
  526 |       const endDate = new Date(now.getTime() + 5 * 60000);
  527 |       const endTime = endDate.toTimeString().slice(0, 5);
  528 |       await page.getByRole('textbox', { name: 'Enter time table name' }).click();
  529 |       await page.getByRole('textbox', { name: 'Enter time table name' }).fill(timetableName);
  530 |       await page.locator('.css-19bb58m').click();
  531 |       await page.getByRole('option', { name: scenarioName }).click();
  532 |       await page.getByPlaceholder('Select start time').click();
  533 |       await page.getByPlaceholder('Select start time').fill(startTime);
  534 |       await page.getByPlaceholder('Select end time').click();
  535 |       await page.getByPlaceholder('Select end time').fill(endTime);
  536 |       await page.getByRole('button', { name: 'Add' }).click();
  537 |       await page.getByRole('button', { name: 'Done' }).click();
  538 |       await expect(page.getByText(timetableName)).toBeVisible({ timeout: 10000 });
  539 |     } catch (error) {
  540 |       await testInfo.attach('error-screenshot', {
  541 |         body: await page.screenshot(),
  542 |         contentType: 'image/png',
  543 |       });
  544 |       throw error;
  545 |     }
  546 |   });
  547 |
  548 |   test('Create a new schedule', async ({}, testInfo) => {
  549 |     test.slow();
  550 |     try {
  551 |       await page.getByRole('link', { name: 'Schedule' }).click();
  552 |       await page.getByRole('button', { name: '+ Add Schedule' }).click();
  553 |       await page.getByRole('textbox', { name: 'Enter schedule name' }).fill(scheduleName);
  554 |       await page.locator('.css-19bb58m').click();
  555 |       await page.getByRole('option', { name: timetableName }).click();
  556 |       const today = new Date().getDate().toString();
  557 |       await page.getByRole('textbox', { name: 'Select start date' }).click();
  558 |       await page.waitForSelector(`.react-datepicker__day >> text="${today}"`, { timeout: 5000 });
  559 |       await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
  560 |       await page.getByRole('textbox', { name: 'Select end date' }).click();
  561 |       await page.waitForSelector(`.react-datepicker__day >> text="${today}"`, { timeout: 5000 });
  562 |       await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
  563 |       const addButton = page.getByRole('button', { name: 'Add' });
  564 |       await addButton.waitFor({ state: 'visible', timeout: 10000 });
  565 |       await addButton.click();
  566 |       await page.waitForSelector('text=Schedule added successfully.', { timeout: 15000 });
  567 |       await page.getByRole('button', { name: 'Done' }).click();
  568 |       await expect(page.getByText(scheduleName)).toBeVisible({ timeout: 10000 });
  569 |     } catch (error) {
  570 |       await testInfo.attach('error-screenshot', {
  571 |         body: await page.screenshot(),
  572 |         contentType: 'image/png',
  573 |       });
  574 |       throw error;
  575 |     }
  576 |   });
  577 |
  578 |   test('Assign scenario to player', async ({}, testInfo) => {
  579 |     test.slow();
  580 |     try {
  581 |       await page.getByRole('link', { name: 'Dashboard' }).click();
  582 |       await page.getByRole('button', { name: '+ Assign Scenario' }).click();
  583 |       await page.locator('.css-19bb58m').first().click();
  584 |       await page.getByRole('option', { name: scenarioName }).click();
  585 |       await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
  586 |       await page.getByRole('option', { name: playerName }).click();
  587 |       await page.getByRole('button', { name: 'Add' }).click();
  588 |       await page.getByRole('button', { name: 'Done' }).click();
  589 |       await expect(page.getByText(`Assigned: ${scenarioName} to ${playerName}`)).toBeVisible({ timeout: 10000 });
  590 |     } catch (error) {
  591 |       await testInfo.attach('error-screenshot', {
  592 |         body: await page.screenshot(),
  593 |         contentType: 'image/png',
  594 |       });
  595 |       throw error;
  596 |     }
  597 |   });
  598 |
  599 |   test('Create a new manager', async ({}, testInfo) => {
  600 |     test.slow();
  601 |     try {
  602 |       await page.getByRole('link', { name: 'User Account' }).click();
  603 |       await page.getByRole('button', { name: '+ Create Manager' }).click();
  604 |       await page.getByRole('textbox', { name: 'Enter first name' }).fill(uniqueFirstName);
  605 |       await page.getByRole('textbox', { name: 'Enter last name' }).fill(uniqueLastName);
  606 |       await page.getByRole('textbox', { name: 'Enter email' }).fill(uniqueEmail);
  607 |       await page.locator('.css-19bb58m').click();
  608 |       await page.getByRole('option', { name: groupName }).click();
  609 |       const managerAddButton = page.getByRole('button', { name: 'Add' });
  610 |       await managerAddButton.waitFor({ state: 'visible', timeout: 10000 });
  611 |       await expect(managerAddButton).toBeEnabled({ timeout: 10000 });
  612 |       await managerAddButton.click();
  613 |       await page.getByRole('button', { name: 'Done' }).click();
  614 |       await expect(page.getByText(`${uniqueFirstName} ${uniqueLastName}`)).toBeVisible({ timeout: 10000 });
  615 |     } catch (error) {
  616 |       await testInfo.attach('error-screenshot', {
  617 |         body: await page.screenshot(),
  618 |         contentType: 'image/png',
  619 |       });
  620 |       throw error;
  621 |     }
  622 |   });
```