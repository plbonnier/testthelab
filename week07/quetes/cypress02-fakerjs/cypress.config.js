const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://preprod.backmarket.fr",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
