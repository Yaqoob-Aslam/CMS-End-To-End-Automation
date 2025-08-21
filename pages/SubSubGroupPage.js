export default class SubSubGroupPage {
  constructor(page) {
    this.page = page;
  }

  async createSubSubGroup(groupName, subGroupName, subSubGroupName) {
    await this.page.getByRole('link', { name: 'Sub Subgroups' }).click();
    await this.page.getByRole('button', { name: '+ Add Sub Subgroup' }).click();

    // Select Group
    await this.page.locator('.css-19bb58m').first().click();
    await this.page.getByRole('option', { name: groupName }).click();

    // Select Subgroup
    await this.page.locator('.css-35k6c7-control .css-19bb58m').click();
    await this.page.getByRole('option', { name: subGroupName }).click();

    // Enter SubSubGroup name
    await this.page.getByRole('textbox', { name: 'Enter sub subgroup name' }).fill(subSubGroupName);

    await this.page.getByRole('button', { name: 'Add' }).click();
    await this.page.getByRole('button', { name: 'Done' }).click();
  }
}
