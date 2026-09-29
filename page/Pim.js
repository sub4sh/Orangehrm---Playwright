const { expect } = require('@playwright/test');

class Pim {
  constructor(page) {
    this.page = page;

    this.clickpim = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a');
    this.clickadd = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button/i');
    this.addfirstname = page.locator('input[name="firstName"]');
    this.addlastname = page.locator('input[name="lastName"]');
    this.addempid = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input');
    this.photoUpload = page.locator('input[type="file"]'); // corrected locator
    this.saveButton = page.locator('button[type="submit"]');
  }

  async clickPim() {
    await this.clickpim.click();
  }

  async clickAdd() {
    await this.clickadd.click(); // fixed
  }

  async enterFirstName(fname) {
    await this.addfirstname.fill(fname);
  }

  async enterLastName(lname) {
    await this.addlastname.fill(lname);
  }

  async enterEmpId(empid) {
    await this.addempid.fill(empid);
  }

  async addPhoto(filePath) {
    await this.photoUpload.setInputFiles(filePath); // fixed
  }

  async clickSave() {
    await this.saveButton.click();
    await expect(this.page.locator('.oxd-toast')).toBeVisible(); // optional success check
  }
}

module.exports = { Pim };
