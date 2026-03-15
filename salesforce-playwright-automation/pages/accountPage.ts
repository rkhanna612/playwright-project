import type { Page } from '@playwright/test';


class AccountPage {
  private page: Page;
  public accountHomeUrl = '/lightning/o/Account/home';
  public newButton = 'button[title="New"]';
  public nameInput = 'input[name="Name"]';
  public saveButton = 'button[title="Save"]';

  constructor(page: Page) {
    this.page = page;
  }

  async createAccount(name: string) {
    await this.page.goto(this.accountHomeUrl);
    await this.page.click(this.newButton);
    await this.page.fill(this.nameInput, name);
    await this.page.click(this.saveButton);
  }
}

module.exports = { AccountPage };