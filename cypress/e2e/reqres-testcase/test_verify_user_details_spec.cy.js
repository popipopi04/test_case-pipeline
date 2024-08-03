const endPoint = require("../../fixtures/reqres_api_end_points.json")
const user_module = require("../../support/user")

const write_result_to = "cypress/output/user_details.json";
const url = Cypress.config('reqres').baseUrl

describe('Test case is to verify User details through http requests', ()=> {

    beforeEach(()=> { 
        // This hook will verify whether the app is up and running before executing each test case
        cy.log("Verify API url");
        cy.getAPIResponse(Cypress.config('baseUrl'));
    })

    // This test case will write received user details to a JSON file
    it('Write user details to json', ()=> {
        cy.log("Inside test case!!");
        cy.log(write_result_to);
        user_module.writeUserDetailsToJson(write_result_to, url+endPoint.user_details)
    })

    // This test case will compare received user details with expected values
    it('Verify user details', ()=> {
        cy.fixture('testdata_expected_users').then((exp_users) => {
            cy.log('Inside fixture');
            cy.log(exp_users.total);
            user_module.verifyUserDetails(exp_users,url+endPoint.user_details)
            
        })

    })
});