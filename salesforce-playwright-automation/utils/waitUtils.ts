import type { Page } from "@playwright/test";

async function waitForLightningPage(page: Page) {
  await page.waitForLoadState("networkidle");
}

module.exports = { waitForLightningPage };