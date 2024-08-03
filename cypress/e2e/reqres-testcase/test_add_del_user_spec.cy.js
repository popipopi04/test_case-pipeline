const endPoint = require("../../fixtures/reqres_api_end_points.json")
const user_module = require("../../support/user")
const url = Cypress.config('reqres').baseUrl


describe('Test case is to verify User details through http requests', ()=> {
    
    // This test case will Add user to user list through POST call
    it('Add user through POST call', ()=> {
        cy.fixture('testdata_user').then((user) => {
            cy.log("Adding user through POST call");
            user_module.addUser(user, url+endPoint.add_user)
        })
    })

    // This test case will Delete user to user list through DELETE call
    it('Remove user through DELETE call', ()=> {
        cy.fixture('testdata_user').then((user) => {
            user_module.deleteUser(user.id, url+endPoint.user_details)
        })
    })
})