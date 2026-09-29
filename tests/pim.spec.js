const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page/loginpage');
const { Pim } = require('../page/Pim');


test('Pim with photouplaod', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const pim = new Pim(page);
  //login
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
//pim
await pim.clickPim();
await pim.clickAdd();
await pim.enterFirstName("subash");
await pim.enterLastName("timalsina")
await pim.enterEmpId("69");
await pim.addPhoto('c:\\Users\\subash\\Desktop\\playwright learn.PNG');
await pim.clickSave();
await page.pause();

  });