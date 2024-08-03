export function verifyUserDetails(expected_user_data, http_url) {
  /*This function will retrive the user details through a HTTP call and verify received details */
  cy.log("Inside verifyUserDetails!!!");
  cy.log(http_url);

  //Verifying user details
  cy.log("Verifying user details");
  cy.getAPIResponse(http_url).then((user_data) => {
    // cy.log(user_data.data);
    user_data.data.forEach((received_user, index) => {
      if (received_user.first_name == expected_user_data.user[index].first_name) {
        cy.log("Expected user found!!");
      }
    });
  });
}

export function writeUserDetailsToJson(filename, http_url) {
  /* This function will get the user details through a HTTP call and write those values to json file*/

  cy.log("Inside writeUserDetailsToJson!!!");
  cy.getAPIResponse(http_url).then((user_data) => {
    // Write received values to JSON output file
    cy.writeFile(filename, user_data);
  });
}

export function addUser(user, http_url) {
  /* This function will add user to database through a HTTP POST call*/
  cy.log("Inside addUser!!");
  cy.postAPIRequest(http_url, user).then((res) => {
    if (
      expect(res).to.have.property("id") &&
      expect(res).to.have.property("createdAt")
    ) {
      cy.log(res);
    }
  });
}

export function deleteUser(user_id, http_url) {
  /* This function will remove user from database entry through a HTTP DELETE call*/
  cy.deleteAPIRequest(http_url + "/" + user_id);
}
