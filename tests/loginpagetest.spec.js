const { test } = require('@playwright/test');
const { LoginPage } = require('../page/loginpage');  // make sure folder name is correct

test('login with valid credential', async ({ page }) => {
  const loginPage = new LoginPage(page);   

  await loginPage.goto();                 
  await loginPage.login('Admin', 'admin123'); 
  await page.pause();
});
