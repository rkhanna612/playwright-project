import type { Page } from "@playwright/test";

async function getToastMessage(page: Page) {
  const toast = page.locator(".toastMessage");
  await toast.waitFor({ timeout: 10000 });
  return await toast.textContent();
}

module.exports = { getToastMessage };