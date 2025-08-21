export default class LogoutPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.profileBtn = page.getByRole('button', { name: 'A', exact: true });
    this.logoutBtn = page.getByRole('button', { name: 'Logout' });
    this.confirmYesBtn = page.getByRole('button', { name: 'Yes' });
  }

  async logout() {
    await this.profileBtn.click();
    await this.logoutBtn.click();
    await this.confirmYesBtn.click();

    // Verify redirect to login page
    await this.page.waitForURL('**/login', { timeout: 60000 });
  }
}
