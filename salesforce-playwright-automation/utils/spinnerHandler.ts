import type { Page } from "@playwright/test";

async function waitForSpinnerToDisappear(page: Page) {
  try {
    await page.waitForSelector(".slds-spinner", {
      state: "hidden",
      timeout: 20000
    });
  } catch (e) {
    // spinner not present
  }
}

module.exports = { waitForSpinnerToDisappear };