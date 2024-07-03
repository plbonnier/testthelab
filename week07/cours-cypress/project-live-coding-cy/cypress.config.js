const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl:
      "http://127.0.0.1:5500/week07/cours-cypress/project-live-coding-cy/index.html",
  },
  projectId: "rdwjed",
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome, mocha-junit-reporter",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports",
      //contrôle si les rapports existants doivent être écrasés ou non lors de la génération de nouveaux rapports.
      overwrite: true,
      html: true,
      json: false,
      // Activer les captures d'écran intégrées
      embeddedScreenshots: true,
      // Activer le contenu inline (CSS, JS)
      inlineAssets: true,
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
