const { expect } = require('@playwright/test');

class Searchemp {
  constructor(page) {
    this.page = page;

    this.clickpim = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a');
    this.searchbox = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div/input');
    this.clicksearch = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]');
    this.resultsTable = page.locator('.oxd-table-row');
  }

  async clickPim() {
    await this.clickpim.click();

  }

  async enterEmployeeName(fullname) {
    await this.searchbox.fill(fullname);
  }

  async search(fullname) {
    await this.clicksearch.click();
    // await expect(this.resultsTable).toContainText(fullname);
    await this.page.page();

    
  }
  
}

module.exports = { Searchemp };
