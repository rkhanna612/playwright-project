import type { Page } from '@playwright/test';


class LoginPage {
  private page: Page;
  public usernameInput = '#username';
  public passwordInput = '#password';
  public loginButton = '#Login';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
    await this.page.waitForLoadState('networkidle');
  }
}

module.exports = { LoginPage };