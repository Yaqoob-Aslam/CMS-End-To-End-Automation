# Test info

- Name: CMS Application Automation >> Create SubGroup
- Location: /home/yaqoob/CMS-End-to-End-Automation-with-Playwright/tests/POM-CMS.E2E.spec.js:36:9

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Add Subgroup' })

    at SubgroupPage.createSubgroup (/home/yaqoob/CMS-End-to-End-Automation-with-Playwright/pages/SubGroupPage.js:15:71)
    at /home/yaqoob/CMS-End-to-End-Automation-with-Playwright/tests/POM-CMS.E2E.spec.js:38:9
```

# Page snapshot

```yaml
- dialog "Add New Subgroup":
  - heading "Add New Subgroup" [level=2]
  - text: Group Name *
  - subscript
  - subscript
  - log: option Group U80227, selected.
  - text: Group U80227
  - combobox
  - text: Subgroup Name *
  - textbox "Enter sub group name"
  - button "Cancel"
  - button "Add"
```

# Test source

```ts
   1 | export default class SubgroupPage {
   2 |
   3 |     constructor(page) {
   4 |         this.page = page;
   5 |     }
   6 |
   7 |     async createSubgroup(groupName, subGroupName) {
   8 |         // Navigate to Groups > target group
   9 |         await this.page.getByRole('link', { name: 'Subgroups', exact: true }).click();
  10 |         await this.page.getByRole('button', { name: '+ Add Subgroup' }).click();
  11 |         await this.page.locator('.css-19bb58m').first().click();
  12 |         await this.page.getByRole('option', { name: groupName }).click();
  13 |
  14 |         // Add Subgroup
> 15 |         await this.page.getByRole('button', { name: 'Add Subgroup' }).click();
     |                                                                       ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  16 |         await this.page.getByRole('textbox', { name: 'Enter sub group name' }).fill(subGroupName);
  17 |         await this.page.getByRole('button', { name: 'Add' }).click();
  18 |         await this.page.getByRole('button', {name: 'Done'}).click();
  19 |     }
  20 | }
```