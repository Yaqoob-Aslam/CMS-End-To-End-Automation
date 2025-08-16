import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

test('End-To-End-CMS-Application-Automation', async ({}, testInfo) => {

  try {
    // Your existing test code
  } catch (error) {
    await testInfo.attach('error-screenshot', {
      body: await page.screenshot(),
      contentType: 'image/png',
    });
    throw error;
  } finally {
}
const groupNumber = Math.floor(Math.random() * 100000);
const groupName = `Group U${groupNumber}`;
const subGroupName = `Subgroup U${groupNumber}`;
const subSubGroupName = `Sub Subgroup U${groupNumber}`;
const playerName = `Player U${groupNumber}`;
const videoFileName = `test__${groupNumber}.mp4`;
const scenarioName = `Scenario U${groupNumber}`; 
const timetableName = `Timetable U${groupNumber}`;
const scheduleName = `Schedule U${groupNumber}`; 
test.slow(); // Easy way to triple the default timeout

// ✅ Locate the video from project-root/videos/
const projectRoot = path.resolve(__dirname, '..');
const videoDir = path.join(projectRoot, 'videos');
const existingFiles = fs.existsSync(videoDir) ? fs.readdirSync(videoDir) : [];
const firstVideo = existingFiles.find(file => file.endsWith('.mp4'));

if (!firstVideo) {
console.warn('⚠️ No video found in videos/ folder');
return;
}

// ✅ Rename to unique filename
const oldPath = path.join(videoDir, firstVideo);
const newPath = path.join(videoDir, videoFileName);
fs.renameSync(oldPath, newPath);
console.log(`🆕 Renamed video: ${firstVideo} ➝ ${videoFileName}`);

const browser = await chromium.launch({

// headless: true, // ✅ GitHub Actions
 headless: false, 
args: ['--start-maximized'],
});

const context = await browser.newContext({
viewport: null,
deviceScaleFactor: undefined,
});

const page = await context.newPage();

// ✅ Login
await page.goto('https://moyai-cms.innov8.jp/login', { timeout: 90000 }); // Increased timeout to 90 seconds

require('dotenv').config(); // Add at the top of your test file

// Then modify your login code to:
await page.getByRole('textbox', { name: 'Enter your email address' }).fill(process.env.CMS_EMAIL || '');
await page.getByRole('textbox', { name: 'Enter your password' }).fill(process.env.CMS_PASSWORD || '');

// Add validation to fail fast if credentials are missing
if (!process.env.CMS_EMAIL || !process.env.CMS_PASSWORD) {
  throw new Error('Missing required environment variables: CMS_EMAIL and CMS_PASSWORD');
}

await page.getByRole('button', { name: 'Login' }).click();
await page.waitForURL('**/dashboard', { timeout: 60000 });

// ✅ Group
await page.getByRole('button', { name: 'Expand Icon' }).click();
await page.getByRole('link', { name: 'Groups' }).click();
await page.getByRole('listitem').filter({ hasText: /^Groups$/ }).getByRole('link').click();
await page.getByRole('button', { name: '+ Add Group' }).click();
await page.getByRole('textbox', { name: 'Enter group name' }).fill(groupName);
await page.getByRole('button', { name: 'Add' }).click();
await page.getByRole('button', { name: 'Done' }).click();

// ✅ Subgroup
await page.getByRole('link', { name: 'Subgroups', exact: true }).click();
await page.getByRole('button', { name: '+ Add Subgroup' }).click();
await page.locator('.css-19bb58m').first().click();
await page.getByRole('option', { name: groupName }).click();
await page.getByRole('textbox', { name: 'Enter sub group name' }).fill(subGroupName);
await page.getByRole('button', { name: 'Add' }).click();
await page.getByRole('button', { name: 'Done' }).click();

// ✅ Sub Subgroup
await page.getByRole('link', { name: 'Sub Subgroups' }).click();
await page.getByRole('button', { name: '+ Add Sub Subgroup' }).click();
await page.locator('.css-19bb58m').first().click();
await page.getByRole('option', { name: groupName }).click();

// Ensure subgroup dropdown is opened before waiting for option
await page.locator('.css-35k6c7-control .css-19bb58m').click();
await page.getByRole('option', { name: subGroupName }).waitFor({ state: 'visible', timeout: 10000 });
await page.getByRole('option', { name: subGroupName }).click();

await page.getByRole('textbox', { name: 'Enter sub subgroup name' }).fill(subSubGroupName);
await page.getByRole('button', { name: 'Add' }).click();
await page.getByRole('button', { name: 'Done' }).click();

// ✅ Player
await page.getByRole('link', { name: 'Lan Manager' }).click();
await page.getByRole('list').filter({ hasText: /^Players$/ }).getByRole('link').click();
await page.getByRole('button', { name: '+ Add Player' }).click();
await page.locator('.css-19bb58m').first().click();
await page.getByRole('option', { name: groupName }).click();

// Wait for subgroup combobox to become enabled
await page.waitForSelector('.css-35k6c7-control > .css-hlgwow > .css-19bb58m:not([aria-disabled="true"])', { timeout: 10000 });
await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
await page.getByRole('option', { name: subGroupName }).click();

// Wait for subsubgroup combobox to become enabled
await page.waitForSelector('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m:not([aria-disabled="true"])', { timeout: 10000 });
await page.locator('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
await page.getByRole('option', { name: subSubGroupName }).click();

await page.getByRole('textbox', { name: 'Enter player name' }).fill(playerName);
await page.getByRole('button', { name: 'Add' }).click();
// Wait for success dialog and click "Done"
await page.waitForSelector('text=Player added successfully.', { timeout: 15000 });
await page.getByRole('button', { name: 'Done' }).click();
console.log(`✅ Player Created: ${playerName}`);

// ✅ Upload Video
await page.getByRole('link', { name: 'Contents' }).click();
await page.getByRole('link', { name: 'Scenario' }).click();
await page.getByRole('button', { name: 'All Videos' }).click();
await page.getByRole('button', { name: '+ Add Videos' }).click();
// Check if video file exists and is under 50MB before upload
const videoPath = path.join(videoDir, videoFileName);
if (!fs.existsSync(videoPath)) {
  throw new Error(`Video file not found: ${videoPath}`);
}
const stats = fs.statSync(videoPath);
if (stats.size > 50 * 1024 * 1024) {
  throw new Error(`Video file exceeds 50MB: ${videoFileName}`);
}

await page.locator('input[type="file"]').setInputFiles(videoPath);
await page.waitForSelector(`text=${videoFileName}`, { timeout: 180000 }); // Increased timeout to 3 minutes

// Wait for loading indicator to disappear before clicking "Add"
await page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });

// Click "Add" button in the dialog after video appears and loading is done
const addVideoButton = page.getByRole('button', { name: 'Add' });
await addVideoButton.waitFor({ state: 'visible', timeout: 30000 });
await addVideoButton.click();

// Wait for "Done" button to be visible before clicking
const doneButton = page.getByRole('button', { name: 'Done' });
await doneButton.waitFor({ state: 'visible', timeout: 30000 });
await doneButton.click();
console.log(`✅ Uploaded video: ${videoFileName}`);


// ✅ Scenario
await page.getByRole('button', { name: 'All Scenarios' }).click();
await page.getByRole('button', { name: '+ Make Scenario' }).click();
await page.getByRole('textbox', { name: 'Enter scenario name' }).fill(scenarioName);
await page.locator('.css-19bb58m').click();
await page.getByRole('option', { name: videoFileName }).click();

// Wait for "Add" button to be visible and enabled before clicking
const scenarioAddButton = page.getByRole('button', { name: 'Add' });
await scenarioAddButton.waitFor({ state: 'visible', timeout: 15000 });
await expect(scenarioAddButton).toBeEnabled({ timeout: 15000 });
await scenarioAddButton.click();

const scenarioDoneButton = page.getByRole('button', { name: 'Done' });
await scenarioDoneButton.waitFor({ state: 'visible', timeout: 5000 });
await scenarioDoneButton.click();
console.log(`✅ Scenario Created: ${scenarioName}`);

// ✅ Time Table
await page.getByRole('link', { name: 'Time Table' }).click({ timeout: 10000 } );
await page.getByRole('button', { name: '+ Add Time Table' }).click();

const now = new Date();
const startTime = now.toTimeString().slice(0, 5);
const endDate = new Date(now.getTime() + 5 * 60000);
const endTime = endDate.toTimeString().slice(0, 5);

await page.getByRole('textbox', { name: 'Enter time table name' }, { timeout: 5000 }).click();
await page.getByRole('textbox', { name: 'Enter time table name' }).fill(timetableName);
await page.locator('.css-19bb58m').click();
await page.getByRole('option', { name: scenarioName }, { timeout: 5000 }).click();
await page.getByPlaceholder('Select start time').click({ timeout: 10000 });
await page.getByPlaceholder('Select start time').fill(startTime);
await page.getByPlaceholder('Select end time').click({ timeout: 10000 });
await page.getByPlaceholder('Select end time').fill(endTime);
await page.getByRole('button', { name: 'Add' }).click();
await page.getByRole('button', { name: 'Done'}, { timeout: 5000 }).click();
console.log(`✅ Timetable Created: ${timetableName}`);


// ✅ Schedule
await page.getByRole('link', { name: 'Schedule' }).click();
await page.getByRole('button', { name: '+ Add Schedule' }).click();
await page.getByRole('textbox', { name: 'Enter schedule name' }).fill(scheduleName);
await page.locator('.css-19bb58m').click();
await page.getByRole('option', { name: timetableName }).click();
const today = new Date().getDate().toString();
// Select Start Date
await page.getByRole('textbox', { name: 'Select start date' }).click();
await page.waitForSelector(`.react-datepicker__day >> text="${today}"`, { timeout: 5000 });
await page.locator(`.react-datepicker__day >> text="${today}"`).first().click({ timeout: 5000 });
// Select End Date
await page.getByRole('textbox', { name: 'Select end date' }).click({ timeout: 5000 });
await page.waitForSelector(`.react-datepicker__day >> text="${today}"`, { timeout: 5000 });
await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();

// Wait for "Add" button to be visible before clicking
const addButton = page.getByRole('button', { name: 'Add' });
await addButton.waitFor({ state: 'visible', timeout: 10000 });
await addButton.click({ timeout: 5000 });

await page.waitForSelector('text=Schedule added successfully.', { timeout: 15000 });
await page.getByRole('button', { name: 'Done' }).waitFor({ state: 'visible', timeout: 10000 });
await page.getByRole('button', { name: 'Done' }).click({ timeout: 5000 });
console.log(`✅ Schedule Created: ${scheduleName} using current date`);


// ✅ Assign Scenario to Player
await page.getByRole('link', { name: 'Dashboard' }).click();
await page.getByRole('button', { name: '+ Assign Scenario' }).click();
// Select Scenario (use lastly generated name)
await page.locator('.css-19bb58m').first().click();
await page.getByRole('option', { name: scenarioName }).click();
// Select Player (use lastly generated name)
await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
await page.getByRole('option', { name: playerName }).click();

await page.getByRole('button', { name: 'Add' }).click();
await page.getByRole('button', { name: 'Done' }).click();

// ✅ Generate unique real names and email
const firstNames = ['Ali', 'Sara', 'Usman', 'Ayesha', 'Omar', 'Fatima', 'Bilal', 'Hira', 'Zain', 'Zara'];
const lastNames = ['Khan', 'Malik', 'Sheikh', 'Qureshi', 'Butt', 'Raza', 'Shah', 'Chaudhry', 'Hussain', 'Mirza'];

function getRandomName(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const uniqueFirstName = getRandomName(firstNames);
const uniqueLastName = getRandomName(lastNames);
const uniqueEmail = `${uniqueFirstName.toLowerCase()}.${uniqueLastName.toLowerCase()}${groupNumber}@mailinator.com`; // public temp email

// ✅ Create Manager with unique details
await page.getByRole('link', { name: 'User Account' }).click();
await page.getByRole('button', { name: '+ Create Manager' }).click();

await page.getByRole('textbox', { name: 'Enter first name' }).click();
await page.getByRole('textbox', { name: 'Enter first name' }).fill(uniqueFirstName);

// Ensure last name field is focused before filling
await page.getByRole('textbox', { name: 'Enter last name' }).click();
await page.getByRole('textbox', { name: 'Enter last name' }).fill(uniqueLastName);

// Ensure email field is focused before filling
await page.getByRole('textbox', { name: 'Enter email' }).click();
await page.getByRole('textbox', { name: 'Enter email' }).fill(uniqueEmail);

// ✅ Select newly created group
await page.locator('.css-19bb58m').click();
await page.getByRole('option', { name: groupName }).click();

// Wait for "Add" button to be enabled and visible before clicking
const managerAddButton = page.getByRole('button', { name: 'Add' });
await managerAddButton.waitFor({ state: 'visible', timeout: 10000 });
await expect(managerAddButton).toBeEnabled({ timeout: 10000 });
await managerAddButton.click();
await page.getByRole('button', { name: 'Done' }).click();
console.log(`✅ Manager Created: ${uniqueFirstName} ${uniqueLastName}, Email: ${uniqueEmail}, Group: ${groupName}`);

// ✅ Logout
await page.getByRole('button', { name: 'A', exact: true }).click();
await page.getByRole('button', { name: 'Logout' }).click();
await page.getByRole('button', { name: 'Yes' }).click();
await page.waitForURL('**/login', { timeout: 60000 });
console.log('✅ Logout successful');

await browser.close();
});