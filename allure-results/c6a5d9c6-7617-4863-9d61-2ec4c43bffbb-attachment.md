# Test info

- Name: CMS Application End-to-End Tests >> Login with invalid credentials
- Location: /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:350:3

# Error details

```
Error: Timed out 10000ms waiting for expect(locator).toBeVisible()

Locator: getByText('Invalid email or password')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 10000ms
  - waiting for getByText('Invalid email or password')

    at /home/yaqoob/CMS-End-To-End-Automation/tests/CMS_Automation_1.0.spec.js:356:63
```

# Page snapshot

```yaml
- heading "CMS" [level=1]
- heading "Login" [level=3]
- paragraph: Please login to continue to your account.
- text: Email Address *
- textbox "Enter your email address": invalid@email.com
- text: Password *
- paragraph: Password must contain at least one uppercase letter
- textbox "Enter your password": wrongpassword
- link "Forget Password?":
  - /url: /forget-password
- paragraph
- button "Login"
- paragraph: © 2025, Moyai CMS Corporation Pvt. Ltd All Rights Reserved
```

# Test source

```ts
  256 | // const uniqueLastName = getRandomName(lastNames);
  257 | // const uniqueEmail = `${uniqueFirstName.toLowerCase()}.${uniqueLastName.toLowerCase()}${groupNumber}@mailinator.com`; // public temp email
  258 |
  259 | // // ✅ Create Manager with unique details
  260 | // await page.getByRole('link', { name: 'User Account' }).click();
  261 | // await page.getByRole('button', { name: '+ Create Manager' }).click();
  262 |
  263 | // await page.getByRole('textbox', { name: 'Enter first name' }).click();
  264 | // await page.getByRole('textbox', { name: 'Enter first name' }).fill(uniqueFirstName);
  265 |
  266 | // // Ensure last name field is focused before filling
  267 | // await page.getByRole('textbox', { name: 'Enter last name' }).click();
  268 | // await page.getByRole('textbox', { name: 'Enter last name' }).fill(uniqueLastName);
  269 |
  270 | // // Ensure email field is focused before filling
  271 | // await page.getByRole('textbox', { name: 'Enter email' }).click();
  272 | // await page.getByRole('textbox', { name: 'Enter email' }).fill(uniqueEmail);
  273 |
  274 | // // ✅ Select newly created group
  275 | // await page.locator('.css-19bb58m').click();
  276 | // await page.getByRole('option', { name: groupName }).click();
  277 |
  278 | // // Wait for "Add" button to be enabled and visible before clicking
  279 | // const managerAddButton = page.getByRole('button', { name: 'Add' });
  280 | // await managerAddButton.waitFor({ state: 'visible', timeout: 10000 });
  281 | // await expect(managerAddButton).toBeEnabled({ timeout: 10000 });
  282 | // await managerAddButton.click();
  283 | // await page.getByRole('button', { name: 'Done' }).click();
  284 | // console.log(`✅ Manager Created: ${uniqueFirstName} ${uniqueLastName}, Email: ${uniqueEmail}, Group: ${groupName}`);
  285 |
  286 | // // ✅ Logout
  287 | // await page.getByRole('button', { name: 'A', exact: true }).click();
  288 | // await page.getByRole('button', { name: 'Logout' }).click();
  289 | // await page.getByRole('button', { name: 'Yes' }).click();
  290 | // await page.waitForURL('**/login', { timeout: 60000 });
  291 | // console.log('✅ Logout successful');
  292 |
  293 | // await browser.close();
  294 | // });
  295 |
  296 |
  297 | const { test, expect,chromium } = require('@playwright/test');
  298 | const fs = require('fs');
  299 | const path = require('path');
  300 | require('dotenv').config();
  301 |
  302 | test.describe('CMS Application End-to-End Tests', () => {
  303 |   let browser, context, page;
  304 |   const groupNumber = Math.floor(Math.random() * 100000);
  305 |   const groupName = `Group U${groupNumber}`;
  306 |   const subGroupName = `Subgroup U${groupNumber}`;
  307 |   const subSubGroupName = `Sub Subgroup U${groupNumber}`;
  308 |   const playerName = `Player U${groupNumber}`;
  309 |   const videoFileName = `test__${groupNumber}.mp4`;
  310 |   const scenarioName = `Scenario U${groupNumber}`;
  311 |   const timetableName = `Timetable U${groupNumber}`;
  312 |   const scheduleName = `Schedule U${groupNumber}`;
  313 |   const firstNames = ['Ali', 'Sara', 'Usman', 'Ayesha', 'Omar'];
  314 |   const lastNames = ['Khan', 'Malik', 'Sheikh', 'Qureshi', 'Butt'];
  315 |   const getRandomName = (arr) => arr[Math.floor(Math.random() * arr.length)];
  316 |   const uniqueFirstName = getRandomName(firstNames);
  317 |   const uniqueLastName = getRandomName(lastNames);
  318 |   const uniqueEmail = `${uniqueFirstName.toLowerCase()}.${uniqueLastName.toLowerCase()}${groupNumber}@mailinator.com`;
  319 |
  320 |   test.beforeAll(async () => {
  321 |     browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
  322 |     context = await browser.newContext({ viewport: null, deviceScaleFactor: undefined, });
  323 |     page = await context.newPage();
  324 |   });
  325 |
  326 |   test.afterAll(async () => {
  327 |     await browser.close();
  328 |   });
  329 |
  330 |   test('Login with valid credentials', async ({}, testInfo) => {
  331 |     test.slow();
  332 |     try {
  333 |       await page.goto('https://moyai-cms.innov8.jp/login', { timeout: 90000 });
  334 |       if (!process.env.CMS_EMAIL || !process.env.CMS_PASSWORD) {
  335 |         throw new Error('Missing required environment variables: CMS_EMAIL and CMS_PASSWORD');
  336 |       }
  337 |       await page.getByRole('textbox', { name: 'Enter your email address' }).fill(process.env.CMS_EMAIL);
  338 |       await page.getByRole('textbox', { name: 'Enter your password' }).fill(process.env.CMS_PASSWORD);
  339 |       await page.getByRole('button', { name: 'Login' }).click();
  340 |       await expect(page).toHaveURL(/dashboard/, { timeout: 60000 });
  341 |     } catch (error) {
  342 |       await testInfo.attach('error-screenshot', {
  343 |         body: await page.screenshot(),
  344 |         contentType: 'image/png',
  345 |       });
  346 |       throw error;
  347 |     }
  348 |   });
  349 |
  350 |   test('Login with invalid credentials', async () => {
  351 |     test.slow();
  352 |     await page.goto('https://moyai-cms.innov8.jp/login', { timeout: 90000 });
  353 |     await page.getByRole('textbox', { name: 'Enter your email address' }).fill('invalid@email.com');
  354 |     await page.getByRole('textbox', { name: 'Enter your password' }).fill('wrongpassword');
  355 |     await page.getByRole('button', { name: 'Login' }).click();
> 356 |     await expect(page.getByText('Invalid email or password')).toBeVisible({ timeout: 10000 });
      |                                                               ^ Error: Timed out 10000ms waiting for expect(locator).toBeVisible()
  357 |   });
  358 |
  359 |   test('Create a new group', async ({}, testInfo) => {
  360 |     test.slow();
  361 |     try {
  362 |       await page.getByRole('button', { name: 'Expand Icon' }).click();
  363 |       await page.getByRole('link', { name: 'Groups' }).click();
  364 |       await page.getByRole('listitem').filter({ hasText: /^Groups$/ }).getByRole('link').click();
  365 |       await page.getByRole('button', { name: '+ Add Group' }).click();
  366 |       await page.getByRole('textbox', { name: 'Enter group name' }).fill(groupName);
  367 |       await page.getByRole('button', { name: 'Add' }).click();
  368 |       await page.getByRole('button', { name: 'Done' }).click();
  369 |       await expect(page.getByText(groupName)).toBeVisible({ timeout: 10000 });
  370 |     } catch (error) {
  371 |       await testInfo.attach('error-screenshot', {
  372 |         body: await page.screenshot(),
  373 |         contentType: 'image/png',
  374 |       });
  375 |       throw error;
  376 |     }
  377 |   });
  378 |
  379 |   test('Create a new subgroup', async ({}, testInfo) => {
  380 |     test.slow();
  381 |     try {
  382 |       await page.getByRole('link', { name: 'Subgroups', exact: true }).click();
  383 |       await page.getByRole('button', { name: '+ Add Subgroup' }).click();
  384 |       await page.locator('.css-19bb58m').first().click();
  385 |       await page.getByRole('option', { name: groupName }).click();
  386 |       await page.getByRole('textbox', { name: 'Enter sub group name' }).fill(subGroupName);
  387 |       await page.getByRole('button', { name: 'Add' }).click();
  388 |       await page.getByRole('button', { name: 'Done' }).click();
  389 |       await expect(page.getByText(subGroupName)).toBeVisible({ timeout: 10000 });
  390 |     } catch (error) {
  391 |       await testInfo.attach('error-screenshot', {
  392 |         body: await page.screenshot(),
  393 |         contentType: 'image/png',
  394 |       });
  395 |       throw error;
  396 |     }
  397 |   });
  398 |
  399 |   test('Create a new sub-subgroup', async ({}, testInfo) => {
  400 |     test.slow();
  401 |     try {
  402 |       await page.getByRole('link', { name: 'Sub Subgroups' }).click();
  403 |       await page.getByRole('button', { name: '+ Add Sub Subgroup' }).click();
  404 |       await page.locator('.css-19bb58m').first().click();
  405 |       await page.getByRole('option', { name: groupName }).click();
  406 |       await page.locator('.css-35k6c7-control .css-19bb58m').click();
  407 |       await page.getByRole('option', { name: subGroupName }).waitFor({ state: 'visible', timeout: 10000 });
  408 |       await page.getByRole('option', { name: subGroupName }).click();
  409 |       await page.getByRole('textbox', { name: 'Enter sub subgroup name' }).fill(subSubGroupName);
  410 |       await page.getByRole('button', { name: 'Add' }).click();
  411 |       await page.getByRole('button', { name: 'Done' }).click();
  412 |       await expect(page.getByText(subSubGroupName)).toBeVisible({ timeout: 10000 });
  413 |     } catch (error) {
  414 |       await testInfo.attach('error-screenshot', {
  415 |         body: await page.screenshot(),
  416 |         contentType: 'image/png',
  417 |       });
  418 |       throw error;
  419 |     }
  420 |   });
  421 |
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
```