import { expect } from '@playwright/test';

export default class TimetablePage {

  constructor(page) {
    this.page = page;

    // Locators
    this.menuTimetable = page.getByRole('link', { name: 'Time Table' });
    this.addTimetableBtn = page.getByRole('button', { name: '+ Add Time Table' });
    this.timetableNameInput = page.getByRole('textbox', { name: 'Enter time table name' });
    this.scenarioDropdown = page.locator('.css-19bb58m');
    this.startTimeInput = page.getByPlaceholder('Select start time');
    this.endTimeInput = page.getByPlaceholder('Select end time');
    this.addBtn = page.getByRole('button', { name: 'Add' });
    this.doneBtn = page.getByRole('button', { name: 'Done' });
  }

  async goto() {
    await this.menuTimetable.click();
    await expect(this.page).toHaveURL(/.*timetable/);
  }

  async createTimetable(timetableName, scenarioName) {
    const now = new Date();
    const startTime = now.toTimeString().slice(0, 5); // e.g. "14:23"
    const endTime = new Date(now.getTime() + 5 * 60000).toTimeString().slice(0, 5);

    await this.goto();
    await this.addTimetableBtn.click();
    await this.timetableNameInput.fill(timetableName);

    // Select scenario
    await this.scenarioDropdown.click();
    await this.page.getByRole('option', { name: scenarioName }).click();

    // Set time range
    await this.startTimeInput.fill(startTime);
    await this.endTimeInput.fill(endTime);

    // Save
    await this.addBtn.click();
    await this.doneBtn.click();
  }
}
