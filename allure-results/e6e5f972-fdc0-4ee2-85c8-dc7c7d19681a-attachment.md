# Test info

- Name: CMS Application Automation >> Create Timetable
- Location: /home/yaqoob/CMS-End-to-End-Automation-with-Playwright/tests/POM-CMS.E2E.spec.js:87:7

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('a[href*="timetable"]')

    at TimetablePage.goto (/home/yaqoob/CMS-End-to-End-Automation-with-Playwright/pages/TimetablePage.js:19:30)
    at TimetablePage.createTimetable (/home/yaqoob/CMS-End-to-End-Automation-with-Playwright/pages/TimetablePage.js:24:16)
    at /home/yaqoob/CMS-End-to-End-Automation-with-Playwright/tests/POM-CMS.E2E.spec.js:89:25
```

# Test source

```ts
   1 |
   2 | export default class TimetablePage {
   3 |
   4 |   constructor(page) {
   5 |     this.page = page;
   6 |
   7 |     // Locators
   8 |     this.menuTimetable = page.locator('a[href*="timetable"]'); // Sidebar navigation
   9 |     this.addTimetableBtn = page.locator('button:has-text("Add Timetable")');
  10 |     this.timetableNameInput = page.locator('input[name="timetableName"]');
  11 |     this.saveBtn = page.locator('button:has-text("Save")');
  12 |     this.successToast = page.locator('.toast-success'); // adjust selector if different
  13 |   }
  14 |
  15 |   
  16 |    // Navigate to Timetable Page
  17 |    
  18 |   async goto() {
> 19 |     await this.menuTimetable.click();
     |                              ^ Error: locator.click: Target page, context or browser has been closed
  20 |     await expect(this.page).toHaveURL(/.*timetable/);
  21 |   }
  22 |
  23 |   async createTimetable(timetableName) {
  24 |     await this.goto();
  25 |     await this.addTimetableBtn.click();
  26 |     await this.timetableNameInput.fill(timetableName);
  27 |     await this.saveBtn.click();
  28 |
  29 |     // Validation
  30 |     await expect(this.successToast).toBeVisible();
  31 |     await expect(this.page.locator(`text=${timetableName}`)).toBeVisible();
  32 |   }
  33 | }
  34 |
```