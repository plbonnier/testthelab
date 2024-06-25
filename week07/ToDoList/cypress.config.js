const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    basUrl: "http://127.0.0.1:5500/week07/ToDoList/index.html",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
