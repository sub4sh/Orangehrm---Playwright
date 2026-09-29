const { test } = require('@playwright/test');
const { LoginPage } = require('../page/loginpage');
const { Searchemp } = require('../page/searchemployee');

test('Search an employee', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const empSearch = new Searchemp(page);

  // login
  await loginPage.goto();
  await loginPage.login("Admin", "admin123");

  // search employee
  await empSearch.clickPim();
  await empSearch.enterEmployeeName("subash timalsina");
  await page.pause();
  
//   await empSearch.search("subash timalsina"); // assertion included
});
