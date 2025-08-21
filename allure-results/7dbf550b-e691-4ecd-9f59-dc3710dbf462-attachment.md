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
- dialog "Add New Video":
  - heading "Add New Video" [level=2]
  - text: Upload Video(s)
  - img "upload"
  - text: "Click to Upload or drag and drop (Max. File size: 50 MB)"
  - paragraph: sample.mp4
  - button "Cancel"
  - button "Add"
- dialog:
  - img "Tick"
  - heading "Error!" [level=3]
  - paragraph: "sample.mp4: Name has already been taken"
  - button "Okay"
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