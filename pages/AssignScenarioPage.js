export default class AssignScenarioPage {
  constructor(page) {
    this.page = page;

    // Locators (exactly same as your test)
    this.menuDashboard = page.getByRole('link', { name: 'Dashboard' });
    this.assignScenarioBtn = page.getByRole('button', { name: '+ Assign Scenario' });
    this.scenarioDropdown = page.locator('.css-19bb58m').first();
    this.playerDropdown = page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m');
    this.addBtn = page.getByRole('button', { name: 'Add' });
    this.doneBtn = page.getByRole('button', { name: 'Done' });
  }

  async openDashboard() {
    await this.menuDashboard.waitFor({ state: 'visible', timeout: 10000 });
    await this.menuDashboard.click();
  }

  async assignScenarioToPlayer(scenarioName, playerName) {
    await this.openDashboard();
    await this.assignScenarioBtn.click();

    await this.scenarioDropdown.click();
    await this.page.getByRole('option', { name: scenarioName }).click();

    await this.playerDropdown.click();
    await this.page.getByRole('option', { name: playerName }).click();

    await this.addBtn.click();
    await this.doneBtn.click();
  }
}
