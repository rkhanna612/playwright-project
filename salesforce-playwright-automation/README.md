## Custom Field: Quantity__c

### How the Quantity Field is Added

- The custom field `Quantity__c` is added to the Opportunity object as a Number field (precision 18, scale 0) via Salesforce metadata.
- The metadata file is located at:
   - `force-app/main/default/objects/Opportunity/fields/Quantity__c.field-meta.xml`
- The field is included in the Opportunity page layout via:
   - `force-app/main/default/layouts/Opportunity-Opportunity Layout.layout-meta.xml`
- To deploy this field to your Salesforce org, use Salesforce CLI:
   ```sh
   sfdx force:source:deploy -p force-app/main/default/objects/Opportunity/fields/Quantity__c.field-meta.xml
   sfdx force:source:deploy -p force-app/main/default/layouts/Opportunity-Opportunity\ Layout.layout-meta.xml
   ```

### How the Quantity Field is Used in Automation

- The Playwright test for opportunity creation fills the Quantity field using the page object model.
- In `pages/opportunityPage.ts`, the field is accessed using a role-based selector:
   ```ts
   await this.page.getByRole('spinbutton', { name: 'Quantity' }).fill(quantity);
   ```
- The test validates that the entered quantity appears on the Opportunity details page after creation.
- The field is also validated in the related list when viewing the associated Account.
# Salesforce Playwright Automation

This project automates Salesforce platform testing using Playwright and TypeScript. It includes scripts, page objects, utilities, and test cases for validating Salesforce features such as opportunity creation and platform user access.

## Project Structure

```
├── config/
│   └── env.ts                # Environment configuration
├── pages/
│   ├── accountPage.ts        # Page object for Account
│   ├── homePage.ts           # Page object for Home
│   ├── loginPage.ts          # Page object for Login
│   └── opportunityPage.ts    # Page object for Opportunity
├── scripts/
│   └── createPlatformUser.ts # Script to create a platform user
├── tests/
│   ├── opportunityCreation.spec.ts   # Test for opportunity creation
│   └── platformUserAccess.spec.ts    # Test for platform user access
├── utils/
│   ├── spinnerHandler.ts     # Utility for handling spinners
│   ├── toastHandler.ts       # Utility for handling toast messages
│   └── waitUtils.ts          # Utility for wait operations
├── test-results/             # Playwright test results
├── package.json              # Project dependencies and scripts
├── playwright.config.ts      # Playwright configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v16 or above)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd salesforce-playwright-automation
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running Tests
To execute all Playwright tests:
```sh
npx playwright test
```

### Viewing Test Reports
After running tests, view the HTML report:
```sh
npx playwright show-report
```
Or open `playwright-report/index.html` in your browser.

## Implementation Details
- **Page Objects**: Encapsulate Salesforce UI interactions for maintainability.
- **Utilities**: Common helpers for waiting, handling spinners, and toast messages.
- **Test Scripts**: Cover opportunity creation and platform user access validation.
- **Config**: Centralized environment and Playwright configuration.

## File Overview
- `config/env.ts`: Environment variables and settings.
- `pages/`: Page object models for Salesforce pages.
- `scripts/createPlatformUser.ts`: Script to automate platform user creation.
- `tests/`: Contains Playwright test specs.
- `utils/`: Helper utilities for test stability.
- `test-results/`: Stores Playwright test results and error contexts.

## Contributing
Feel free to open issues or submit pull requests for improvements or new features.

## Framework Design Decisions

- **Page Object Model (POM):** All Salesforce UI interactions are encapsulated in page object classes (e.g., AccountPage, OpportunityPage, LoginPage). This ensures maintainability, reusability, and clear separation between test logic and UI selectors.
- **Role-based Selectors:** Playwright's role-based and accessible selectors are used throughout, avoiding brittle direct locators and making tests more robust to UI changes.
- **TypeScript:** The project uses TypeScript for type safety and better developer experience.
- **Test Structure:** Each scenario is implemented as a separate test file, with business logic abstracted into page objects.
- **Utilities:** Common utilities (e.g., spinner and toast handlers) are provided to handle Salesforce-specific UI behaviors.

## Salesforce Configuration Persistence

- **Metadata Files:** Salesforce customizations (e.g., custom fields, layouts) are stored as metadata XML files under `force-app/main/default/objects` and `force-app/main/default/layouts`. This allows version control and easy deployment to other orgs.
- **User Creation:** Scripts (e.g., `scripts/createPlatformUser.ts`) are provided for automating user creation and permission assignment, but may require manual steps or Salesforce CLI for full automation.
- **Environment Variables:** Sensitive data (usernames, passwords) are managed via environment variables in `config/env.ts` and a `.env` file (not committed).

## Known Limitations

- **User Provisioning:** Platform user creation and permission assignment are not fully automated in the test suite; manual setup or Salesforce CLI scripting may be required.
- **Selector Stability:** While role-based selectors are robust, Salesforce UI changes or customizations may still require selector updates.
- **Test Data Cleanup:** The suite does not currently clean up test data (accounts, opportunities) after execution.
- **Parallel Execution:** Some tests may conflict if run in parallel due to shared data (e.g., Account A1).
- **Login Flow:** The login flow assumes standard Salesforce authentication; SSO or MFA may require additional handling.

## Future Improvements

- **Full User Automation:** Integrate Salesforce CLI or REST API calls to fully automate user and permission set creation.
- **Test Data Management:** Add setup/teardown hooks to create and clean up test data for true isolation.
- **Advanced Reporting:** Integrate with CI/CD and add richer reporting (e.g., screenshots on failure, Slack notifications).
- **Cross-Browser Testing:** Expand test matrix to cover multiple browsers and devices.
- **Reusable Test Data Factories:** Implement data factory utilities for more flexible test data generation.

## License
[MIT](LICENSE)
