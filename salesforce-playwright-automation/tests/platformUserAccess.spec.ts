
const { test, expect } = require('@playwright/test');

test('Platform user read only validation', async ({ page }: { page: import('@playwright/test').Page }) => {

  await page.goto('https://power-connect-3925-dev-ed.scratch.lightning.force.com/lightning/o/Opportunity/home');

  const editButton = page.locator('button[title="Edit"]');

  await expect(editButton).toBeHidden();

});