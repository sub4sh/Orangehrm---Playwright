const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    // Locators
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.submitButton = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

//   async assertDashboard() {
//     await expect(this.page).toHaveURL(/dashboard/);
//   }
}

module.exports = { LoginPage };
