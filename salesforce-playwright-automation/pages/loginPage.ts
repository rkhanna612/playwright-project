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
    // Wait for Lightning home URL after login
    await this.page.waitForURL(/lightning\.force\.com.*one\.app/, { timeout: 30000 });
    // Optionally, wait for a visible element on the home page
    // await this.page.waitForSelector('button[title="App Launcher"]', { timeout: 20000 });
  }
}

module.exports = { LoginPage };