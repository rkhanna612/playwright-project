import type { Page } from '@playwright/test';
const { waitForSpinnerToDisappear } = require('../utils/spinnerHandler');
const { expect } = require('@playwright/test');


class OpportunityPage {
  private page: Page;
  public opportunityHomeUrl = '/lightning/o/Opportunity/home';
  public newButton = 'button[title="New"]';
  public nameInput = 'input[name="Name"]';
  public quantityInput = 'input[name="Quantity__c"]';
  public saveButton = 'button[title="Save"]';
  public header = 'h1';

  constructor(page: Page) {
    this.page = page;
  }

  async createOpportunity(name: string, quantity: string) {
    await this.page.goto(this.opportunityHomeUrl);
    await this.page.click(this.newButton);
    await this.page.fill(this.nameInput, name);
    await this.page.fill(this.quantityInput, quantity);
    await this.page.click(this.saveButton);
    await waitForSpinnerToDisappear(this.page);

  }

  async verifyOpportunity(name: string) {
    await expect(this.page.locator(this.header)).toContainText(name);
  }
}

module.exports = { OpportunityPage };