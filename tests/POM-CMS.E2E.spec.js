import { test } from '@playwright/test';
import { chromium } from 'playwright';
import dotenv from 'dotenv';
import LoginPage from '../pages/LoginPage.js'
import GroupPage from '../pages/GroupPage';
import { generateTestData } from '../utils/testData';

dotenv.config();

test.describe.serial('CMS Application Automation', () => {
    let browser, context, page;
    let data;

    test.beforeAll(async () => {
        data = generateTestData();
        browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
        context = await browser.newContext({ viewport: null, deviceScaleFactor: undefined });
        page = await context.newPage();

        // Login
        const loginPage = new LoginPage(page);
        await loginPage.goto('https://moyai-cms.innov8.jp/login');
        await loginPage.login(process.env.CMS_EMAIL, process.env.CMS_PASSWORD);
    });

    test.afterAll(async () => {
        await browser.close();
    });
    test('should display dashboard after login', async () => {
            await page.waitForURL('**/dashboard', { timeout: 60000 });
        });
    test('Create Group', async () => {
            const groupPage = new GroupPage(page);
            await groupPage.createGroup(data.groupName);
        });
});
