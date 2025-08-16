export default class GroupPage {
    constructor(page) {
        this.page = page;
    }

    async createGroup(groupName) {
        await this.page.getByRole('button', { name: 'Expand Icon' }).click();
        await this.page.getByRole('link', { name: 'Groups' }).click();
        await this.page.getByRole('listitem').filter({ hasText: /^Groups$/ }).getByRole('link').click();
        await this.page.getByRole('button', { name: '+ Add Group' }).click();
        await this.page.getByRole('textbox', { name: 'Enter group name' }).fill(groupName);
        await this.page.getByRole('button', { name: 'Add' }).click();
        await this.page.getByRole('button', { name: 'Done' }).click();
    }
}
