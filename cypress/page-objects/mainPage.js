/// <reference types="cypress" />

class MainPage {
    goTo() {
        cy.visit("/");
    }
}

module.exports = new MainPage();
