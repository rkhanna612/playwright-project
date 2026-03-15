const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
	reporter: [['html', { open: 'never' }]],
	// Add other Playwright config options as needed
});
