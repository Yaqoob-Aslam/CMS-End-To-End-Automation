// ----------------- Imports -----------------
import { test } from '@playwright/test';
import { generateTestData } from '../utils/testData';
import { chromium } from 'playwright';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// Page Objects
import LoginPage from '../pages/LoginPage.js';
import GroupPage from '../pages/GroupPage';
import SubGroupPage from '../pages/SubGroupPage';
import SubSubGroupPage from '../pages/SubSubGroupPage';
import PlayerPage from '../pages/PlayerPage';
import VideoUploadPage from '../pages/VideoUploadPage.js';
import ScenarioPage from '../pages/ScenarioPage.js';
import TimetablePage from '../pages/TimetablePage';
import SchedulePage from '../pages/SchedulePage';
import AssignScenarioPage from '../pages/AssignScenarioPage';
import ManagerPage from '../pages/ManagerPage';
import LogoutPage from '../pages/LogoutPage';

// ----------------- Env Config -----------------
dotenv.config();
// ----------------- Tests -----------------
test.describe.serial('CMS Application Automation', () => {
  let browser, context, page;
  let data;
  let videoDir;

  test.beforeAll(async () => {
    data = generateTestData(); // includes videoFileName
    videoDir = path.resolve(__dirname, '../videos');

    // --- Video preparation ---
    const existingFiles = fs.existsSync(videoDir) ? fs.readdirSync(videoDir) : [];
    const firstVideo = existingFiles.find(file => file.endsWith('.mp4'));
    if (!firstVideo) throw new Error('⚠️ No video found in videos/ folder');

    const oldPath = path.join(videoDir, firstVideo);
    const newPath = path.join(videoDir, data.videoFileName);
    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
    }

    // --- Browser setup ---
    browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
    context = await browser.newContext({ viewport: null, deviceScaleFactor: undefined });
    page = await context.newPage();

    // Login
    const loginPage = new LoginPage(page);
    await loginPage.goto('https://moyai-cms.innov8.jp/login');
    await loginPage.login(process.env.CMS_EMAIL, process.env.CMS_PASSWORD);
  });

  test('should display dashboard after login', async () => {
    await page.waitForURL('**/dashboard', { timeout: 60000 });
  });

  test('Create Group', async () => {
    const groupPage = new GroupPage(page);
    await groupPage.createGroup(data.groupName);
  });

  test('Create SubGroup', async () => {
    const subGroupPage = new SubGroupPage(page);
    await subGroupPage.createSubgroup(data.groupName, data.subGroupName);
  });

  test('Create Sub Subgroup', async () => {
    const subSubGroupPage = new SubSubGroupPage(page);
    await subSubGroupPage.createSubSubGroup(data.groupName, data.subGroupName, data.subSubGroupName);
  });

  test('Create Player', async () => {
    const playerPage = new PlayerPage(page);
    await playerPage.createPlayer(data.groupName, data.subGroupName, data.subSubGroupName, data.playerName);
  });

  test('Upload Video', async () => {
    const videoUploadPage = new VideoUploadPage(page, videoDir);
    await videoUploadPage.uploadVideo(data.videoFileName);
  });

  test('Create Scenario', async () => {
    const scenarioPage = new ScenarioPage(page);
    await scenarioPage.createScenario(data.scenarioName, data.videoFileName);
  });

  test('Create Timetable', async () => {
    const timetablePage = new TimetablePage(page);
    await timetablePage.createTimetable(data.timetableName, data.scenarioName);
  });

  test('Create Schedule', async () => {
    const schedulePage = new SchedulePage(page);
    await schedulePage.createSchedule(data.scheduleName, data.timetableName);
  });

  test('Assign Scenario to Player', async () => {
    const assignScenarioPage = new AssignScenarioPage(page);
    await assignScenarioPage.assignScenarioToPlayer(data.scenarioName, data.playerName);
  });

  test('Create Manager', async () => {
    const managerPage = new ManagerPage(page);
    await managerPage.createManager(data.uniqueFirstName, data.uniqueLastName, data.uniqueEmail, data.groupName);
  });

  test('Logout', async () => {
    const logoutPage = new LogoutPage(page);
    await logoutPage.logout();
  });
                           
  test.afterAll(async () => {
    await browser.close();
  });
});
