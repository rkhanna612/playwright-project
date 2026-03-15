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

## License
[MIT](LICENSE)
