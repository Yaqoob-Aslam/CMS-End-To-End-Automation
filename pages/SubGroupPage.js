export default class SubgroupPage {

    constructor(page) {
        this.page = page;
    }

    async createSubgroup(groupName, subGroupName) {
        // Navigate to Groups > target group
        await this.page.getByRole('link', { name: 'Subgroups', exact: true }).click();
        await this.page.getByRole('button', { name: '+ Add Subgroup' }).click();
        await this.page.locator('.css-19bb58m').first().click();
        await this.page.getByRole('option', { name: groupName }).click();

        // Add Subgroup
        await this.page.getByRole('textbox', { name: 'Enter sub group name' }).fill(subGroupName);
        await this.page.getByRole('button', { name: 'Add' }).click();
        await this.page.getByRole('button', {name: 'Done'}).click();
    }
}