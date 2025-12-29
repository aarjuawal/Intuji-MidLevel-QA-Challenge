const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com/",
    defaultCommandTimeout: 8000,
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: "cypress/e2e/**/*.specs.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
