/// <reference types="cypress" />

import loginPage from "../page-objects/loginPage";
import productsPage from "../page-objects/productsPage";
import cartPage from "../page-objects/cartPage";
import constantData from "../support/constantData";

class Assertions {
    verifyThatLoginPageIsOpenedCorrectly() {
        loginPage.getLogInLogo().should("be.visible");
        loginPage.getLogInPanel().should("be.visible");
        loginPage.getLoginPageTitle().should("eq", constantData.logInPageTitle)
    }

    verifyThatTheLoginIsSuccessful () {
        productsPage.getProductsPageUrl().should("include", constantData.productsPagePath);
        productsPage.getOpenMenuBtn().should("be.visible");
        productsPage.getCartLink().should("be.visible");
        productsPage.getProductsPageTitle().should("be.visible")
    }

    verifyThatItemIsAddedToCart() {
        productsPage.getCartBadge().should('be.visible')
    }

    verifyThatCartPageIsOpenedCorrectly() {
        cartPage.getCartPageUrl().should("include", constantData.cartPagePath)
        cartPage.getCartPageTitle().should("be.visible");
    }

    verifyThatItemIsAddedInCartPage() {
        cartPage.getCartPageItem().should("be.visible");
    }

    verifyThatCorrectItemIsAddedToTheCart() {
        cartPage.getCartPageItemNameBar().then((el) => {
            let txt = el.text();
            let name = cy.get("@itemName");
            name.should('equal', txt);
        })
    }

    verifyThatItemIsSuccessfullyDeletedFromTheCart() {
        productsPage.getCartBadge().should("not.exist");
        cartPage.getCartPageItem().should("not.exist");
    }
}

module.exports = new Assertions();
