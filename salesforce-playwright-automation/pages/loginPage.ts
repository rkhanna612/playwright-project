import type { Page } from '@playwright/test';

class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#Login');
    await this.page.waitForLoadState('networkidle');
  }
}

module.exports = { LoginPage };