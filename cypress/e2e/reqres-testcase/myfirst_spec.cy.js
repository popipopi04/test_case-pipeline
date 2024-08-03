/<reference types="Cypress" />

describe('template spec', () => {
  it('passes', () => {
    // cy.visit('https://demo.opencart.com/admin/index.php',{failOnStatusCode: false})
    cy.visit('https://google.com')
    cy.test();
    cy.getResponse();
    cy.log("Welcome to Cypress test!!")
    cy.log(Cypress.env('app'))
    // cy.viewport(1024,768)
    // cy.get("div.vQ43Ie[role='dialog']")
    // cy.get("[id='unified-runner'] > div > iframe[class='aut-iframe']")
    // cy.get("body").get("[id='app']")
    // .contains('Stay signed out')
    // frame.contains('out')
    // .contentDocument
  })
})