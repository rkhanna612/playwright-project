import type { Page } from '@playwright/test';

class AccountPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async createAccount(name: string) {
    await this.page.goto('/lightning/o/Account/home');
    await this.page.click('button[title="New"]');
    await this.page.fill('input[name="Name"]', name);
    await this.page.click('button[title="Save"]');
  }
}

module.exports = { AccountPage };