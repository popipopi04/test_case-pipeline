// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { url } from "inspector"

Cypress.Commands.add ('test', () => {
    cy.log("Inside test method")
    cy.log(Cypress.env('app'))
})

Cypress.Commands.add('getAPIResponse', (apiurl) => {
    cy.log("Inside getAPIResponse!!");
    cy.log(apiurl);
    cy.request(apiurl).then((response)=> {
        expect(response.status).to.eq(200)
        expect(response.statusText).to.eq('OK')
        return response.body
    })
})

Cypress.Commands.add('postAPIRequest', (apiurl, data)=> {
    cy.request({method: 'POST', url: apiurl, data}).then((response) => {
        expect(response.status).to.be.eq(201)
        expect(response.statusText).to.eq('Created')
        return response.body
    })
})

Cypress.Commands.add('deleteAPIRequest', (apiurl)=> {
    cy.request({method: 'DELETE', url: apiurl}).then((response) => {
        // let end_response;
        if (response.status == 200 && response.statusText == 'OK'){
            cy.log("Delete status 200 SUCCESS");
        }
        if (response.status == 204 && response.statusText == 'No Content') {
            cy.log("Delete action performed but the response does not include an entity. status 204 NO CONTENT");
        }
        return response.body
    })
})

Cypress.Commands.add('writeDatatoJson', (filename, data)=> {
    cy.writeFile(filename, data)
})