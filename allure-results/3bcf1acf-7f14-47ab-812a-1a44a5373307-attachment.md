# Test info

- Name: CMS Application Automation >> Create Timetable
- Location: /home/yaqoob/CMS-End-to-End-Automation-with-Playwright/tests/POM-CMS.E2E.spec.js:87:7

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('button:has-text("Add Timetable")')

    at TimetablePage.createTimetable (/home/yaqoob/CMS-End-to-End-Automation-with-Playwright/pages/TimetablePage.js:23:32)
    at /home/yaqoob/CMS-End-to-End-Automation-with-Playwright/tests/POM-CMS.E2E.spec.js:89:5
```

# Page snapshot

```yaml
- banner:
  - heading "CMS" [level=1]
  - button "A"
- button "Expand Icon":
  - img "Expand Icon"
- navigation "Breadcrumb":
  - list:
    - list:
      - listitem:
        - paragraph: Contents
      - listitem:
        - paragraph: Timetable
- main:
  - complementary:
    - navigation:
      - list:
        - listitem:
          - link "Dashboard":
            - /url: /dashboard
            - img
            - text: Dashboard
        - listitem:
          - link "User Account":
            - /url: /managers
            - img
            - text: User Account
        - listitem:
          - link "Groups":
            - /url: /contents/timetable
            - img
            - text: Groups
          - list:
            - listitem:
              - link "Groups":
                - /url: /groups-master/groups
            - listitem:
              - link "Subgroups":
                - /url: /groups-master/subgroups
            - listitem:
              - link "Sub Subgroups":
                - /url: /groups-master/sub-subgroups
        - listitem:
          - link "Lan Manager":
            - /url: /contents/timetable
            - img
            - text: Lan Manager
          - list:
            - listitem:
              - link "Players":
                - /url: /lan-manager/players
        - listitem:
          - link "Contents":
            - /url: /contents/timetable
          - list:
            - listitem:
              - link "Scenario":
                - /url: /contents/scenario
            - listitem:
              - link "Time Table":
                - /url: /contents/timetable
            - listitem:
              - link "Schedule":
                - /url: /contents/schedule
        - listitem:
          - link "Players":
            - /url: /contents/timetable
  - article:
    - searchbox "Search..."
    - button "+ Add Time Table"
    - button "Refresh"
    - table:
      - rowgroup:
        - row "S.No. Time Table Scenario Start Time End Time Actions":
          - cell "S.No."
          - cell "Time Table"
          - cell "Scenario"
          - cell "Start Time"
          - cell "End Time"
          - cell "Actions"
      - rowgroup:
        - row "1 Time table Testing Scenario Testing 11:11 AM 09:07 PM":
          - cell "1":
            - paragraph: "1"
          - cell "Time table Testing":
            - paragraph: Time table Testing
          - cell "Scenario Testing":
            - paragraph: Scenario Testing
          - cell "11:11 AM":
            - paragraph: 11:11 AM
          - cell "09:07 PM":
            - paragraph: 09:07 PM
          - cell:
            - button
            - button
        - row "2 Timetable A1 Scenario A1 11:28 AM 03:28 PM":
          - cell "2":
            - paragraph: "2"
          - cell "Timetable A1":
            - paragraph: Timetable A1
          - cell "Scenario A1":
            - paragraph: Scenario A1
          - cell "11:28 AM":
            - paragraph: 11:28 AM
          - cell "03:28 PM":
            - paragraph: 03:28 PM
          - cell:
            - button
            - button
        - row "3 Timetable W_01 Scenario W_1 10:55 AM 10:05 PM":
          - cell "3":
            - paragraph: "3"
          - cell "Timetable W_01":
            - paragraph: Timetable W_01
          - cell "Scenario W_1":
            - paragraph: Scenario W_1
          - cell "10:55 AM":
            - paragraph: 10:55 AM
          - cell "10:05 PM":
            - paragraph: 10:05 PM
          - cell:
            - button
            - button
        - row "4 Timetable A-1 Scenario Testing 10:58 AM 12:58 PM":
          - cell "4":
            - paragraph: "4"
          - cell "Timetable A-1":
            - paragraph: Timetable A-1
          - cell "Scenario Testing":
            - paragraph: Scenario Testing
          - cell "10:58 AM":
            - paragraph: 10:58 AM
          - cell "12:58 PM":
            - paragraph: 12:58 PM
          - cell:
            - button
            - button
        - row "5 Timetable A-2 Test Scenario 10:58 AM 12:58 PM":
          - cell "5":
            - paragraph: "5"
          - cell "Timetable A-2":
            - paragraph: Timetable A-2
          - cell "Test Scenario":
            - paragraph: Test Scenario
          - cell "10:58 AM":
            - paragraph: 10:58 AM
          - cell "12:58 PM":
            - paragraph: 12:58 PM
          - cell:
            - button
            - button
        - row "6 Timetable A-3 Scenario A1 11:58 AM 02:59 PM":
          - cell "6":
            - paragraph: "6"
          - cell "Timetable A-3":
            - paragraph: Timetable A-3
          - cell "Scenario A1":
            - paragraph: Scenario A1
          - cell "11:58 AM":
            - paragraph: 11:58 AM
          - cell "02:59 PM":
            - paragraph: 02:59 PM
          - cell:
            - button
            - button
        - row "7 Timetable A-4 Scenario W_1 12:59 PM 03:59 PM":
          - cell "7":
            - paragraph: "7"
          - cell "Timetable A-4":
            - paragraph: Timetable A-4
          - cell "Scenario W_1":
            - paragraph: Scenario W_1
          - cell "12:59 PM":
            - paragraph: 12:59 PM
          - cell "03:59 PM":
            - paragraph: 03:59 PM
          - cell:
            - button
            - button
        - row "8 Timetable A-5 Sync test scenario 2 reverse vroom boom test 2 01:00 PM 04:00 PM":
          - cell "8":
            - paragraph: "8"
          - cell "Timetable A-5":
            - paragraph: Timetable A-5
          - cell "Sync test scenario 2 reverse vroom boom test 2":
            - paragraph: Sync test scenario 2 reverse vroom boom test 2
          - cell "01:00 PM":
            - paragraph: 01:00 PM
          - cell "04:00 PM":
            - paragraph: 04:00 PM
          - cell:
            - button
            - button
        - row "9 Timetable A-6 Sync test scenario code update 02:00 PM 03:00 PM":
          - cell "9":
            - paragraph: "9"
          - cell "Timetable A-6":
            - paragraph: Timetable A-6
          - cell "Sync test scenario code update":
            - paragraph: Sync test scenario code update
          - cell "02:00 PM":
            - paragraph: 02:00 PM
          - cell "03:00 PM":
            - paragraph: 03:00 PM
          - cell:
            - button
            - button
        - row "10 Timetable A-7 Scenario U68395 01:01 PM 02:01 PM":
          - cell "10":
            - paragraph: "10"
          - cell "Timetable A-7":
            - paragraph: Timetable A-7
          - cell "Scenario U68395":
            - paragraph: Scenario U68395
          - cell "01:01 PM":
            - paragraph: 01:01 PM
          - cell "02:01 PM":
            - paragraph: 02:01 PM
          - cell:
            - button
            - button
    - paragraph: Showing 1-10 from 190
    - combobox:
      - option "10" [selected]
      - option "20"
      - option "50"
    - navigation "Pagination":
      - listitem:
        - button "Previous page" [disabled]
      - listitem:
        - button "Page 1 is your current page": "1"
      - listitem:
        - button "Page 2": "2"
      - listitem:
        - button "Page 3": "3"
      - listitem:
        - button "Page 4": "4"
      - listitem:
        - button "Page 5": "5"
      - listitem:
        - button "Jump forward": ...
      - listitem:
        - button "Page 18": "18"
      - listitem:
        - button "Page 19": "19"
      - listitem:
        - button "Next page"
    - heading "Detail" [level=2]
    - rowgroup:
      - row
    - text: 12:00 AM 1:00 AM 2:00 AM 3:00 AM 4:00 AM 5:00 AM 6:00 AM 7:00 AM 8:00 AM 9:00 AM 10:00 AM 11:00 AM 12:00 PM 1:00 PM 2:00 PM 3:00 PM 4:00 PM 5:00 PM 6:00 PM 7:00 PM 8:00 PM 9:00 PM 10:00 PM 11:00 PM
    - button "11:11 AM – 9:07 PM"
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
   8 |     this.menuTimetable = page.getByRole('link', { name: 'Time Table' }) // Sidebar navigation
   9 |     this.addTimetableBtn = page.locator('button:has-text("Add Timetable")');
  10 |     this.timetableNameInput = page.locator('input[name="timetableName"]');
  11 |     this.saveBtn = page.locator('button:has-text("Save")');
  12 |     this.successToast = page.locator('.toast-success'); // adjust selector if different
  13 |   }
  14 |
  15 |    // Navigate to Timetable Page
  16 |    
  17 |   async goto() {
  18 |     await this.menuTimetable.click();
  19 |   }
  20 |
  21 |   async createTimetable(timetableName) {
  22 |     await this.goto();
> 23 |     await this.addTimetableBtn.click();
     |                                ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  24 |     await this.timetableNameInput.fill(timetableName);
  25 |     await this.saveBtn.click();
  26 |
  27 |     // Validation
  28 |     await expect(this.successToast).toBeVisible();
  29 |     await expect(this.page.locator(`text=${timetableName}`)).toBeVisible();
  30 |   }
  31 | }
  32 |
```