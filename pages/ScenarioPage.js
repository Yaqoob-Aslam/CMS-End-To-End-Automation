export default class ScenarioPage {
  constructor(page) {
    this.page = page;
  }

  async createScenario(scenarioName, videoFileName) {
    await this.page.getByRole('button', { name: 'All Scenarios' }).click();
    await this.page.getByRole('button', { name: '+ Make Scenario' }).click();

    // Enter scenario name
    await this.page.getByRole('textbox', { name: 'Enter scenario name' }).fill(scenarioName);

    // Select Video
    await this.page.locator('.css-19bb58m').click();
    await this.page.getByRole('option', { name: videoFileName }).click();

    // Submit
    const scenarioAddButton = this.page.getByRole('button', { name: 'Add' });
    await scenarioAddButton.waitFor({ state: 'visible', timeout: 15000 });
    await scenarioAddButton.click();
    await this.page.getByRole('button', { name: 'Done' }).click();
  }
}
