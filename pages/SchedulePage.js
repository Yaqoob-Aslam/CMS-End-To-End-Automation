import { expect } from '@playwright/test';

export default class SchedulePage {
  constructor(page) {
    this.page = page;

    // Locators (same as your test)
    this.menuSchedule = page.getByRole('link', { name: 'Schedule' });
    this.addScheduleBtn = page.getByRole('button', { name: '+ Add Schedule' });
    this.scheduleNameInput = page.getByRole('textbox', { name: 'Enter schedule name' });
    this.timetableDropdown = page.locator('.css-19bb58m');
    this.startDateInput = page.getByRole('textbox', { name: 'Select start date' });
    this.endDateInput = page.getByRole('textbox', { name: 'Select end date' });
    this.addBtn = page.getByRole('button', { name: 'Add' });
    this.doneBtn = page.getByRole('button', { name: 'Done' });
    this.successMsg = page.locator('text=Schedule added successfully.');
  }

  async openScheduleMenu() {
    await this.menuSchedule.waitFor({ state: 'visible', timeout: 10000 });
    await this.menuSchedule.click();
  }

  async createSchedule(scheduleName, timetableName) {
    const today = new Date().getDate().toString();

    await this.openScheduleMenu();
    await this.addScheduleBtn.click();
    await this.scheduleNameInput.fill(scheduleName);

    await this.timetableDropdown.click();
    await this.page.getByRole('option', { name: timetableName }).click();

    await this.startDateInput.click();
    await this.page.locator(`.react-datepicker__day >> text="${today}"`).first().click();

    await this.endDateInput.click();
    await this.page.locator(`.react-datepicker__day >> text="${today}"`).first().click();

    await this.addBtn.click();
    await expect(this.successMsg).toBeVisible({ timeout: 15000 });
    await this.doneBtn.click();
  }
}
