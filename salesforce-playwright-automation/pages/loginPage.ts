import { Page } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

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