export default class PlayerPage {
  constructor(page) {
    this.page = page;
  }

  async createPlayer(groupName, subGroupName, subSubGroupName, playerName) {
    await this.page.getByRole('link', { name: 'Lan Manager' }).click();
    await this.page.getByRole('list').filter({ hasText: /^Players$/ }).getByRole('link').click();
    await this.page.getByRole('button', { name: '+ Add Player' }).click();

    // Select Group
    await this.page.locator('.css-19bb58m').first().click();
    await this.page.getByRole('option', { name: groupName }).click();

    // Select Subgroup
    await this.page.locator('.css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
    await this.page.getByRole('option', { name: subGroupName }).click();

    // Select SubSubGroup
    await this.page.locator('div:nth-child(3) > .css-b62m3t-container > .css-35k6c7-control > .css-hlgwow > .css-19bb58m').click();
    await this.page.getByRole('option', { name: subSubGroupName }).click();

    // Enter Player name
    await this.page.getByRole('textbox', { name: 'Enter player name' }).fill(playerName);

    // Submit
    await this.page.getByRole('button', { name: 'Add' }).click();
    await this.page.waitForSelector('text=Player added successfully.', { timeout: 15000 });
    await this.page.getByRole('button', { name: 'Done' }).click();
  }
}
