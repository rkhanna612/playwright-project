import type { Page } from '@playwright/test';
const { expect } = require('@playwright/test');

class OpportunityPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async createOpportunity(name: string, quantity: string) {
    await this.page.goto('/lightning/o/Opportunity/home');
    await this.page.click('button[title="New"]');
    await this.page.fill('input[name="Name"]', name);
    await this.page.fill('input[name="Quantity__c"]', quantity);
    await this.page.click('button[title="Save"]');
  }

  async verifyOpportunity(name: string) {
    await expect(this.page.locator('h1')).toContainText(name);
  }
}

module.exports = { OpportunityPage };