const fs = require('fs');
const path = require('path');

export default class VideoUploadPage {
  constructor(page, videoDir) {
    this.page = page;
    this.videoDir = videoDir;

    // Locators
    this.contentsLink = page.getByRole('link', { name: 'Contents' });
    this.scenarioLink = page.getByRole('link', { name: 'Scenario' });
    this.allVideosButton = page.getByRole('button', { name: 'All Videos' });
    this.addVideosButton = page.getByRole('button', { name: '+ Add Videos' });
    this.fileInput = page.locator('input[type="file"]');
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.doneButton = page.getByRole('button', { name: 'Done' });
  }

  async uploadVideo(fileName) {
    const videoPath = path.join(this.videoDir, fileName);

    if (!fs.existsSync(videoPath)) {
      throw new Error(`⚠️ Video file not found: ${videoPath}`);
    }

    const stats = fs.statSync(videoPath);
    if (stats.size > 50 * 1024 * 1024) {
      throw new Error(`⚠️ Video file exceeds 50MB: ${fileName}`);
    }

    await this.contentsLink.click();
    await this.scenarioLink.click();
    await this.allVideosButton.click();
    await this.addVideosButton.click();

    await this.fileInput.setInputFiles(videoPath);

    await this.page.waitForSelector(`text=${fileName}`, { timeout: 180000 });
    await this.page.waitForSelector('text=Loading...', { state: 'detached', timeout: 480000 });

    await this.addButton.waitFor({ state: 'visible', timeout: 30000 });
    await this.addButton.click();

    await this.doneButton.waitFor({ state: 'visible', timeout: 30000 });
    await this.doneButton.click();
  }
}
