import { expect } from '@playwright/test';

export default class ManagerPage {
  constructor(page) {
    this.page = page;

    // Locators (same as your test)
    this.menuUserAccount = page.getByRole('link', { name: 'User Account' });
    this.createManagerBtn = page.getByRole('button', { name: '+ Create Manager' });
    this.firstNameInput = page.getByRole('textbox', { name: 'Enter first name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Enter last name' });
    this.emailInput = page.getByRole('textbox', { name: 'Enter email' });
    this.groupDropdown = page.locator('.css-19bb58m');
    this.addBtn = page.getByRole('button', { name: 'Add' });
    this.doneBtn = page.getByRole('button', { name: 'Done' });
  }

  async openUserAccountMenu() {
    await this.menuUserAccount.waitFor({ state: 'visible', timeout: 10000 });
    await this.menuUserAccount.click();
  }

  async createManager(uniqueFirstName, uniqueLastName, uniqueEmail, groupName) {
    await this.openUserAccountMenu();
    await this.createManagerBtn.click();

    await this.firstNameInput.fill(uniqueFirstName);
    await this.lastNameInput.fill(uniqueLastName);
    await this.emailInput.fill(uniqueEmail);

    await this.groupDropdown.click();
    await this.page.getByRole('option', { name: groupName }).click();

    // Ensure Add button is enabled
    await expect(this.addBtn).toBeEnabled({ timeout: 10000 });
    await this.addBtn.click();

    await this.doneBtn.click();
  }
}
