# Test info

- Name: CMS Application Automation >> Upload Video
- Location: /home/yaqoob/CMS-End-to-End-Automation-with-Playwright/tests/POM-CMS.E2E.spec.js:75:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Done' }) to be visible

    at VideoUploadPage.uploadVideo (/home/yaqoob/CMS-End-to-End-Automation-with-Playwright/pages/VideoUploadPage.js:48:27)
    at /home/yaqoob/CMS-End-to-End-Automation-with-Playwright/tests/POM-CMS.E2E.spec.js:77:5
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
        - paragraph: Scenario
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
            - /url: /contents/scenario
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
            - /url: /contents/scenario
            - img
            - text: Lan Manager
          - list:
            - listitem:
              - link "Players":
                - /url: /lan-manager/players
        - listitem:
          - link "Contents":
            - /url: /contents/scenario
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
            - /url: /contents/scenario
  - article:
    - button "All Videos"
    - button "All Scenarios"
    - button "+ Add Videos"
    - button "Refresh"
    - searchbox "Search..."
    - table:
      - rowgroup:
        - row "S.No. File Name Size Created At Actions":
          - cell "S.No."
          - cell "File Name"
          - cell "Size"
          - cell "Created At"
          - cell "Actions"
      - rowgroup:
        - row "1 content__2_.mp4 7.44 MB 17 Jul 2025":
          - cell "1":
            - paragraph: "1"
          - cell "content__2_.mp4":
            - paragraph: content__2_.mp4
          - cell "7.44 MB":
            - paragraph: 7.44 MB
          - cell "17 Jul 2025":
            - paragraph: 17 Jul 2025
          - cell:
            - button
            - button
        - row "2 Content Short16.mp4 2.5 MB 17 Jul 2025":
          - cell "2":
            - paragraph: "2"
          - cell "Content Short16.mp4":
            - paragraph: Content Short16.mp4
          - cell "2.5 MB":
            - paragraph: 2.5 MB
          - cell "17 Jul 2025":
            - paragraph: 17 Jul 2025
          - cell:
            - button
            - button
        - row "3 test__12.mp4 25.59 MB 18 Jul 2025":
          - cell "3":
            - paragraph: "3"
          - cell "test__12.mp4":
            - paragraph: test__12.mp4
          - cell "25.59 MB":
            - paragraph: 25.59 MB
          - cell "18 Jul 2025":
            - paragraph: 18 Jul 2025
          - cell:
            - button
            - button
        - row "4 test__78610.mp4 9.16 MB 19 Jul 2025":
          - cell "4":
            - paragraph: "4"
          - cell "test__78610.mp4":
            - paragraph: test__78610.mp4
          - cell "9.16 MB":
            - paragraph: 9.16 MB
          - cell "19 Jul 2025":
            - paragraph: 19 Jul 2025
          - cell:
            - button
            - button
        - row "5 test__42473.mp4 9.16 MB 19 Jul 2025":
          - cell "5":
            - paragraph: "5"
          - cell "test__42473.mp4":
            - paragraph: test__42473.mp4
          - cell "9.16 MB":
            - paragraph: 9.16 MB
          - cell "19 Jul 2025":
            - paragraph: 19 Jul 2025
          - cell:
            - button
            - button
        - row "6 test__68395.mp4 9.16 MB 19 Jul 2025":
          - cell "6":
            - paragraph: "6"
          - cell "test__68395.mp4":
            - paragraph: test__68395.mp4
          - cell "9.16 MB":
            - paragraph: 9.16 MB
          - cell "19 Jul 2025":
            - paragraph: 19 Jul 2025
          - cell:
            - button
            - button
        - row "7 test__78979.mp4 9.16 MB 19 Jul 2025":
          - cell "7":
            - paragraph: "7"
          - cell "test__78979.mp4":
            - paragraph: test__78979.mp4
          - cell "9.16 MB":
            - paragraph: 9.16 MB
          - cell "19 Jul 2025":
            - paragraph: 19 Jul 2025
          - cell:
            - button
            - button
        - row "8 test__3385.mp4 9.16 MB 19 Jul 2025":
          - cell "8":
            - paragraph: "8"
          - cell "test__3385.mp4":
            - paragraph: test__3385.mp4
          - cell "9.16 MB":
            - paragraph: 9.16 MB
          - cell "19 Jul 2025":
            - paragraph: 19 Jul 2025
          - cell:
            - button
            - button
        - row "9 test__67702.mp4 9.16 MB 19 Jul 2025":
          - cell "9":
            - paragraph: "9"
          - cell "test__67702.mp4":
            - paragraph: test__67702.mp4
          - cell "9.16 MB":
            - paragraph: 9.16 MB
          - cell "19 Jul 2025":
            - paragraph: 19 Jul 2025
          - cell:
            - button
            - button
        - row "10 test__50159.mp4 9.16 MB 19 Jul 2025":
          - cell "10":
            - paragraph: "10"
          - cell "test__50159.mp4":
            - paragraph: test__50159.mp4
          - cell "9.16 MB":
            - paragraph: 9.16 MB
          - cell "19 Jul 2025":
            - paragraph: 19 Jul 2025
          - cell:
            - button
            - button
    - paragraph: Showing 1-10 from 280
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
        - button "Page 27": "27"
      - listitem:
        - button "Page 28": "28"
      - listitem:
        - button "Next page"
```

# Test source

```ts
   1 | const fs = require('fs');
   2 | const path = require('path');
   3 |
   4 | class VideoUploadPage {
   5 |   constructor(page, videoDir) {
   6 |     this.page = page;
   7 |     this.videoDir = videoDir;
   8 |
   9 |     // Locators
  10 |     this.contentsLink = page.getByRole('link', { name: 'Contents' });
  11 |     this.scenarioLink = page.getByRole('link', { name: 'Scenario' });
  12 |     this.allVideosButton = page.getByRole('button', { name: 'All Videos' });
  13 |     this.addVideosButton = page.getByRole('button', { name: '+ Add Videos' });
  14 |     this.fileInput = page.locator('input[type="file"]');
  15 |     this.addButton = page.getByRole('button', { name: 'Add' });
  16 |     this.doneButton = page.getByRole('button', { name: 'Done' });
  17 |   }
  18 |
  19 |   /**
  20 |    * Uploads a video from /videos folder
  21 |    * @param {string} fileName - The video file name
  22 |    */
  23 |   async uploadVideo(fileName) {
  24 |     const videoPath = path.join(this.videoDir, fileName);
  25 |
  26 |     if (!fs.existsSync(videoPath)) {
  27 |       throw new Error(`⚠️ Video file not found: ${videoPath}`);
  28 |     }
  29 |
  30 |     const stats = fs.statSync(videoPath);
  31 |     if (stats.size > 50 * 1024 * 1024) {
  32 |       throw new Error(`⚠️ Video file exceeds 50MB: ${fileName}`);
  33 |     }
  34 |
  35 |     await this.contentsLink.click();
  36 |     await this.scenarioLink.click();
  37 |     await this.allVideosButton.click();
  38 |     await this.addVideosButton.click();
  39 |
  40 |     await this.fileInput.setInputFiles(videoPath);
  41 |
  42 |     await this.page.waitForSelector(`text=${fileName}`, { timeout: 180000 });
  43 |     await this.page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });
  44 |
  45 |     await this.addButton.waitFor({ state: 'visible', timeout: 30000 });
  46 |     await this.addButton.click();
  47 |
> 48 |     await this.doneButton.waitFor({ state: 'visible', timeout: 30000 });
     |                           ^ TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
  49 |     await this.doneButton.click();
  50 |   }
  51 | }
  52 |
  53 | module.exports = { VideoUploadPage };
  54 |
```