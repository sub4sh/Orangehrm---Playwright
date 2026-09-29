const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page/loginpage');
const { AddUserPage } = require('../page/adduser');

test('Login and Add new user in OrangeHRM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const addUser = new AddUserPage(page);

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
  // await expect(page.locator('text=Dashboard')).toBeVisible(); // ✅ confirm login

  // Step 2: Add User
  await addUser.clickAdmin();
  await addUser.clickAdd();
  await addUser.selectUserRole('Admin');
  await addUser.selectStatus('Enabled');
  await addUser.enterEmployeeName('Subash');
  await addUser.enterUsername('subashQA');
  await addUser.enterPassword('Password123!');
  await addUser.enterConfirmPassword('Password123!');
  await addUser.save();
  await page.pause();

  // ✅ Verify user added
  // await expect(page.locator('text=subashQA')).toBeVisible();
});
