const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { AccountPage } = require('../pages/accountPage');
const { OpportunityPage } = require('../pages/opportunityPage');
const { ENV } = require('../config/env');

test('Opportunity creation and validation', async ({ page }: { page: import('@playwright/test').Page }) => {
  const login = new LoginPage(page);
  await login.navigate(ENV.baseUrl);
  await login.login(ENV.username, ENV.password);
  const account = new AccountPage(page);
  await account.createAccount("A1");
  const opportunity = new OpportunityPage(page);
  await opportunity.createOpportunity(
    "Automation Opportunity",
    "5"
  );
  await opportunity.verifyOpportunity(
    "Automation Opportunity"
  );
});