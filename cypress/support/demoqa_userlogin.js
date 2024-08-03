const locators = require("../fixtures/locators_demoqa.json");
import "cypress-iframe";

export function launchApp(url) {
  cy.visit(url);
  cy.title().should("eq", "DEMOQA");
}

export function loginToApp(username, password) {
  cy.log("Logging into DemoQA");
  cy.get(locators.username).type(username);
  cy.get(locators.password).type(password);
  cy.get(locators.login_btn).click({ force: true });
  cy.wait(5000);
}

export function logout() {
  // cy.get(locators.login_btn).click({force: true})
}

export function registerNewUser(firstname, lastname, username, Password) {
  cy.log("click and verify user registeration page");
  // click and verify user registeration page
  cy.get(locators.nuser_btn).click();
  //   cy.wait(5000);
  cy.get("form[id='userForm'] div h4").should(
    "have.text",
    "Register to Book Store"
  );
  // Fill user registration form
  cy.get(locators.fname).type(firstname);
  cy.get(locators.lname).type(lastname);
  cy.get(locators.username).type(username);
  cy.get(locators.password).type(Password);
  cy.wait(5000);
  // cy.get("#g-recaptcha *> iframe").then(($iframe) => {
  //   const $body = $iframe.contents().find("body");
  //   cy.wrap($body)
  //     .find(".recaptcha-checkbox-border")
  //     .should("be.visible")
  //     .click();
  // });
  // cy.clickRecaptcha()
  //   cy.frameLoaded("[style='width: 304px; height: 78px;'] > div > iframe")
  // // cy.getIframeBody("iframe[title='reCAPTCHA']").its('4.contentDocument.body')
  //   cy.iframe().find(locators.not_robort).click()
  // let iframe = cy
  //   .get("iframe")
  //   .eq(3)
  //   .its("0.contentDocument", { log: false })
  //   .should("not.exist")
  //   .then(cy.wrap);
  //   iframe.find("iframe[title='reCAPTCHA']");
  // cy.enter("iframe[title='reCAPTCHA']").then((getBody) => {
  //     getBody.find("span[id='recaptcha-anchor']")
  // })
}
