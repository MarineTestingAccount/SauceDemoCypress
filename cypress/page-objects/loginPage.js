/// <reference types="cypress" />

import helpers from "../support/helpers";
import constantData from "../support/constantData";

class LoginPage {
    getLoginPageTitle() {
        return cy.title();
    }

    getLogInLogo(){
        return cy.get(".login_logo");
    }

    getLogInPanel() {
        return cy.get(".login_wrapper");
    }

    getUserNameField() {
        return cy.get("#user-name");
    }

    getPasswordField() {
        return cy.get("#password");
    }

    getLogInBtn() {
        return cy.get("#login-button");
    }

    clickOnLogInBtn() {
        this.getLogInBtn().click();
    }

    logIn() {
        this.insertUserName();
        this.insertPassword();
        this.clickOnLogInBtn();
    }

    getUserCredentialsBox() {
        return cy.get("#login_credentials");
    }

    getPasswordBox() {
        return cy.get(".login_password");
    }

    insertUserName() {
        this.getUserCredentialsBox().then(el => {
            let text = el.text()
            let username = helpers.getCredentials(text, constantData.startIndexForStandardUsername, constantData.endIndexForStandardUsername);
            this.getUserNameField().click().type(username);
        })    
    }

    insertPassword() {
        this.getPasswordBox().then(el => {
            let text = el.text()
            let password = helpers.getCredentials(text, constantData.startIndexForPassword, constantData.endIndexForPassword);
            this.getPasswordField().click().type(password);
        })   
    }
}

module.exports = new LoginPage();
