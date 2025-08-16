    import { test, expect } from '@playwright/test';
    import { chromium } from 'playwright';
    import fs from 'fs';
    import path from 'path';
    import dotenv from 'dotenv';

    dotenv.config();

    test.describe.serial('CMS Application Automation', () => {
    let browser, context, page;
    let groupNumber, groupName, subGroupName, subSubGroupName, playerName, videoFileName, scenarioName, timetableName, scheduleName;
    let projectRoot, videoDir, firstVideo, videoPath;
    let uniqueFirstName, uniqueLastName, uniqueEmail;

    const firstNames = ['Ali', 'Sara', 'Usman', 'Ayesha', 'Omar', 'Fatima', 'Bilal', 'Hira', 'Zain', 'Zara'];
    const lastNames = ['Khan', 'Malik', 'Sheikh', 'Qureshi', 'Butt', 'Raza', 'Shah', 'Chaudhry', 'Hussain', 'Mirza'];
    const getRandomName = arr => arr[Math.floor(Math.random() * arr.length)];

    
    test.beforeAll(async () => {
        // Generate unique test data
        groupNumber = Math.floor(Math.random() * 100000);
        groupName = `Group U${groupNumber}`;
        subGroupName = `Subgroup U${groupNumber}`;
        subSubGroupName = `Sub Subgroup U${groupNumber}`;
        playerName = `Player U${groupNumber}`;
        videoFileName = `test__${groupNumber}.mp4`;
        scenarioName = `Scenario U${groupNumber}`;
        timetableName = `Timetable U${groupNumber}`;
        scheduleName = `Schedule U${groupNumber}`;

        uniqueFirstName = getRandomName(firstNames);
        uniqueLastName = getRandomName(lastNames);
        uniqueEmail = `${uniqueFirstName.toLowerCase()}.${uniqueLastName.toLowerCase()}${groupNumber}@mailinator.com`;

        // Prepare video
        projectRoot = path.resolve(__dirname, '..');
        videoDir = path.join(projectRoot, 'videos');
        const existingFiles = fs.existsSync(videoDir) ? fs.readdirSync(videoDir) : [];
        firstVideo = existingFiles.find(file => file.endsWith('.mp4'));
        if (!firstVideo) throw new Error('⚠️ No video found in videos/ folder');

        const oldPath = path.join(videoDir, firstVideo);
        const newPath = path.join(videoDir, videoFileName);
        fs.renameSync(oldPath, newPath);
        videoPath = newPath;

        // Launch browser
        browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
        context = await browser.newContext({ viewport: null, deviceScaleFactor: undefined });
        page = await context.newPage();
    });

    test.beforeAll(async () => {
        await page.goto('https://moyai-cms.innov8.jp/login', { timeout: 90000 });
        if (!process.env.CMS_EMAIL || !process.env.CMS_PASSWORD) {
        throw new Error('Missing required environment variables: CMS_EMAIL and CMS_PASSWORD');
        }
        await page.getByRole('textbox', { name: 'Enter your email address' }).fill(process.env.CMS_EMAIL || '');
        await page.getByRole('textbox', { name: 'Enter your password' }).fill(process.env.CMS_PASSWORD || '');
        await page.getByRole('button', { name: 'Login' }).click();
        // await page.waitForURL('**/dashboard', { timeout: 60000 });
    });

    test('Create Group', async () => {
      await page.getByRole('button', { name: 'Expand Icon' }).click();
      await page.getByRole('link', { name: 'Groups' }).click();
      await page.getByRole('listitem').filter({ hasText: /^Groups$/ }).getByRole('link').click();
      await page.getByRole('button', { name: '+ Add Group' }).click();
      await page.getByRole('textbox', { name: 'Enter group name' }).fill(groupName);
      await page.getByRole('button', { name: 'Add' }).click();
      await page.getByRole('button', { name: 'Done' }).click();
    });

    test('Create Subgroup', async () => {
      await page.getByRole('link', { name: 'Subgroups', exact: true }).click();
      await page.getByRole('button', { name: '+ Add Subgroup' }).click();
      await page.locator('.css-19bb58m').first().click();
      await page.getByRole('option', { name: groupName }).click();
      await page.getByRole('textbox', { name: 'Enter sub group name' }).fill(subGroupName);
      await page.getByRole('button', { name: 'Add' }).click();
      await page.getByRole('button', { name: 'Done' }).click();
    });

    test('Create Sub Subgroup', async () => {
      await page.getByRole('link', { name: 'Sub Subgroups' }).click();
      await page.getByRole('button', { name: '+ Add Sub Subgroup' }).click();
      await page.locator('.css-19bb58m').first().click();
      await page.getByRole('option', { name: groupName }).click();
      await page.locator('.css-35k6c7-control .css-19bb58m').click();
      await page.getByRole('option', { name: subGroupName }).click();
      await page.getByRole('textbox', { name: 'Enter sub subgroup name' }).fill(subSubGroupName);
      await page.getByRole('button', { name: 'Add' }).click();
      await page.getByRole('button', { name: 'Done' }).click();
    });

    test('Create Player', async () => {
      await page.getByRole('link', { name: 'Lan Manager' }).click();
      await page.getByRole('list').filter({ hasText: /^Players$/ }).getByRole('link').click();
      await page.getByRole('button', { name: '+ Add Player' }).click();
      await page.locator('.css-19bb58m').first().click();
      await page.getByRole('option', { name: groupName }).click();
      await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
      await page.getByRole('option', { name: subGroupName }).click();
      await page.locator('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
      await page.getByRole('option', { name: subSubGroupName }).click();
      await page.getByRole('textbox', { name: 'Enter player name' }).fill(playerName);
      await page.getByRole('button', { name: 'Add' }).click();
      await page.waitForSelector('text=Player added successfully.', { timeout: 15000 });
      await page.getByRole('button', { name: 'Done' }).click();
    });

    test('Upload Video', async () => {
    await page.getByRole('link', { name: 'Contents' }).click();
    await page.getByRole('link', { name: 'Scenario' }).click();
    await page.getByRole('button', { name: 'All Videos' }).click();
    await page.getByRole('button', { name: '+ Add Videos' }).click();
    const videoPath = path.join(videoDir, videoFileName);
    if (!fs.existsSync(videoPath)) {
      throw new Error(`Video file not found: ${videoPath}`);
    }
    const stats = fs.statSync(videoPath);
    if (stats.size > 50 * 1024 * 1024) {
      throw new Error(`Video file exceeds 50MB: ${videoFileName}`);
    }
    await page.locator('input[type="file"]').setInputFiles(videoPath);
    await page.waitForSelector(`text=${videoFileName}`, { timeout: 180000 });
    await page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });
    const addVideoButton = page.getByRole('button', { name: 'Add' });
    await addVideoButton.waitFor({ state: 'visible', timeout: 30000 });
    await addVideoButton.click();
    const doneButton = page.getByRole('button', { name: 'Done' });
    await doneButton.waitFor({ state: 'visible', timeout: 30000 });
    await doneButton.click();
    });

    test('Create Scenario', async () => {
      await page.getByRole('button', { name: 'All Scenarios' }).click();
      await page.getByRole('button', { name: '+ Make Scenario' }).click();
      await page.getByRole('textbox', { name: 'Enter scenario name' }).fill(scenarioName);
      await page.locator('.css-19bb58m').click();
      await page.getByRole('option', { name: videoFileName }).click();
      const scenarioAddButton = page.getByRole('button', { name: 'Add' });
      await expect(scenarioAddButton).toBeEnabled({ timeout: 15000 });
      await scenarioAddButton.click();
      await page.getByRole('button', { name: 'Done' }).click();
    });

    test('Create Timetable', async () => {
      await page.getByRole('link', { name: 'Time Table' }).click();
      await page.getByRole('button', { name: '+ Add Time Table' }).click();
      const now = new Date();
      const startTime = now.toTimeString().slice(0, 5);
      const endTime = new Date(now.getTime() + 5 * 60000).toTimeString().slice(0, 5);
      await page.getByRole('textbox', { name: 'Enter time table name' }).fill(timetableName);
      await page.locator('.css-19bb58m').click();
      await page.getByRole('option', { name: scenarioName }).click();
      await page.getByPlaceholder('Select start time').fill(startTime);
      await page.getByPlaceholder('Select end time').fill(endTime);
      await page.getByRole('button', { name: 'Add' }).click();
      await page.getByRole('button', { name: 'Done' }).click();
    });

    test('Create Schedule', async () => {
      await page.getByRole('link', { name: 'Schedule' }).click();
      await page.getByRole('button', { name: '+ Add Schedule' }).click();
      await page.getByRole('textbox', { name: 'Enter schedule name' }).fill(scheduleName);
      await page.locator('.css-19bb58m').click();
      await page.getByRole('option', { name: timetableName }).click();
      const today = new Date().getDate().toString();
      await page.getByRole('textbox', { name: 'Select start date' }).click();
      await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
      await page.getByRole('textbox', { name: 'Select end date' }).click();
      await page.locator(`.react-datepicker__day >> text="${today}"`).first().click();
      await page.getByRole('button', { name: 'Add' }).click();
      await page.waitForSelector('text=Schedule added successfully.', { timeout: 15000 });
      await page.getByRole('button', { name: 'Done' }).click();
    });

    test('Assign Scenario to Player', async () => {
      await page.getByRole('link', { name: 'Dashboard' }).click();
      await page.getByRole('button', { name: '+ Assign Scenario' }).click();
      await page.locator('.css-19bb58m').first().click();
      await page.getByRole('option', { name: scenarioName }).click();
      await page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
      await page.getByRole('option', { name: playerName }).click();
      await page.getByRole('button', { name: 'Add' }).click();
      await page.getByRole('button', { name: 'Done' }).click();
    });

    test('Create Manager', async () => {
      await page.getByRole('link', { name: 'User Account' }).click();
      await page.getByRole('button', { name: '+ Create Manager' }).click();
      await page.getByRole('textbox', { name: 'Enter first name' }).fill(uniqueFirstName);
      await page.getByRole('textbox', { name: 'Enter last name' }).fill(uniqueLastName);
      await page.getByRole('textbox', { name: 'Enter email' }).fill(uniqueEmail);
      await page.locator('.css-19bb58m').click();
      await page.getByRole('option', { name: groupName }).click();
      const managerAddButton = page.getByRole('button', { name: 'Add' });
      await expect(managerAddButton).toBeEnabled({ timeout: 10000 });
      await managerAddButton.click();
      await page.getByRole('button', { name: 'Done' }).click();
    });

    test('Logout', async () => {
      await page.getByRole('button', { name: 'A', exact: true }).click();
      await page.getByRole('button', { name: 'Logout' }).click();
      await page.getByRole('button', { name: 'Yes' }).click();
      await page.waitForURL('**/login', { timeout: 60000 });
    });

    test.afterAll(async () => {
      await browser.close();
    });
});