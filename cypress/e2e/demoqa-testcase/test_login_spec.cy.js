const user_details = require("../../fixtures/testdata_demoqa_user_details")
const user = require("../../support/demoqa_userlogin")
const locators = require("../../fixtures/locators_demoqa.json");
const baseUrl = Cypress.config('demoqa').baseUrl

describe ('To test DemoQA site', ()=> {
    beforeEach(()=> {
        cy.log("Launch App");
        user.launchApp(baseUrl+"/login")
    });

    it('Register user', ()=> {
        cy.log("Adding new user to app");
        user.registerNewUser(user_details.firstname,user_details.lastname,user_details.username,user_details.Password)
        

    })

    it('Verify Login of DemoQA', ()=> {
        // Login and Verify
        user.loginToApp(user_details.username,user_details.Password)
        cy.log("Verifying login to DemoQA");
        cy.get(locators.user_form).should('be.visible')
    })

    after(()=>{
        cy.log("Inside After Hook()");
        // user.logout()
    });
})