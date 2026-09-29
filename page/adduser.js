const { expect } = require('@playwright/test');

class AddUserPage {
  constructor(page) {
    this.page = page;
    this.adminMenu = page.locator('//span[normalize-space(.)="Admin"]');
    this.addButton = page.locator('//button[normalize-space(.)="Add"]');
    this.userRoleDropdown = page.locator('(//div[@class="oxd-select-text-input"])[1]');
    this.statusDropdown = page.locator('(//div[@class="oxd-select-text-input"])[2]');
    this.employeeNameBox = page.locator('input[placeholder="Type for hints..."]');
    this.usernameBox = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');
    this.passwordBox = page.locator('(//input[@type="password"])[1]');
    this.confirmPasswordBox = page.locator('(//input[@type="password"])[2]');
    this.saveButton = page.locator('//button[@type="submit"]');
  }

  async clickAdmin() {
    await expect(this.adminMenu).toBeVisible();
    await this.adminMenu.click();
  }

  async clickAdd() {
    await expect(this.addButton).toBeVisible();
    await this.addButton.click();
  }

//   async selectUserRole(optionText) {
//     await this.userRoleDropdown.click();
//     await this.page.locator(`//div[@role="listbox"]//span[normalize-space(.)="${optionText}"]`).click();
//   }
async selectUserRole(optionText) {
  await this.userRoleDropdown.click(); // open dropdown
  const option = this.page.locator(`//div[@role="listbox"]//span[normalize-space(.)="${optionText}"]`);
  await expect(option).toBeVisible();   // ✅ wait until option is visible
  await option.click();                 // then click
}


//   async selectStatus(optionText) {
//     await this.statusDropdown.click();
//     await this.page.locator(`//div[@role="listbox"]//span[normalize-space(.)="${optionText}"]`).click();
//   }
async selectStatus(optionText) {
  await this.statusDropdown.click();
  const option = this.page.locator(`//div[@role="listbox"]//span[normalize-space(.)="${optionText}"]`);
  await expect(option).toBeVisible();
  await option.click();
}


  async enterEmployeeName(name) {
    await this.employeeNameBox.fill(name);
  }

  async enterUsername(username) {
    await this.usernameBox.fill(username);
  }

  async enterPassword(pass) {
    await this.passwordBox.fill(pass);
  }

  async enterConfirmPassword(cpass) {
    await this.confirmPasswordBox.fill(cpass);
  }

  async save() {
    await this.saveButton.click();
  }
}

module.exports = { AddUserPage };
