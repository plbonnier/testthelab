const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://practice.expandtesting.com/notes/api",
    apiKey: "b79fc467b9c64be4907aa0d21439c0b76c9d45970c0b4adb8ef5975e64b2d2fa",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
