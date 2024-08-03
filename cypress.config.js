// module.exports = {
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// };

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  "chromeWebSecurity": false,
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    baseUrl: "https://docs.cypress.io/guides/overview/why-cypress/",
    reqres: {
      baseUrl: "https://reqres.in",
    },
    demoqa: {
      baseUrl: "https://demoqa.com",
    },
    excludeSpecPattern: ["cypress/e2e/1-getting-started/**","cypress/e2e/2-advanced-examples/**","cypress/e2e/reqres-testcase/myfirst_spec.cy.js"],
  },
});
