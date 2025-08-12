# Test info

- Name: CMS Application End-to-End Tests >> Logout successfully
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:624:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'A', exact: true })

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:627:66
```

# Test source

```ts
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
  623 |
  624 |   test('Logout successfully', async ({}, testInfo) => {
  625 |     test.slow();
  626 |     try {
> 627 |       await page.getByRole('button', { name: 'A', exact: true }).click();
      |                                                                  ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  628 |       await page.getByRole('button', { name: 'Logout' }).click();
  629 |       await page.getByRole('button', { name: 'Yes' }).click();
  630 |       await expect(page).toHaveURL(/login/, { timeout: 60000 });
  631 |     } catch (error) {
  632 |       await testInfo.attach('error-screenshot', {
  633 |         body: await page.screenshot(),
  634 |         contentType: 'image/png',
  635 |       });
  636 |       throw error;
  637 |     }
  638 |   });
  639 | });
```