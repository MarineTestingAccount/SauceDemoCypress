/// <reference types="cypress" />

import dynamicData from "../support/dynamicData";

class ProductsPage {
    getProductsPageUrl() {
        return cy.url();
    }

    getProductsPageTitle() {
        return cy.get(".header_secondary_container");
    }

    getCartLink() {
        return cy.get(".shopping_cart_link");
    }

    getCartBadge() {
        return cy.get(".shopping_cart_badge");
    }

    getOpenMenuBtn() {
        return cy.get("#react-burger-menu-btn");
    }

    getLogoutBtn() {
        return cy.get("#logout_sidebar_link");
    }

    logout() {
        this.openMenu();
        this.getLogoutBtn().click();
    }

    openMenu() {
        this.getOpenMenuBtn().click();
    }

    getItemNameBar(index) {
        return cy.get(`.inventory_item:nth-child(${index}) .inventory_item_name`);
    }

    getAddProductBtn(index) {
        return cy.get(`.inventory_item:nth-child(${index}) button`);
    }

    addAnItemToCart() {
        let index = dynamicData.randomIndex;
        this.getAddProductBtn(index).click();
        this.getItemNameBar(index).then((el) => {
            let txt = el.text();
            cy.wrap(txt).as("itemName")
        })
    }

    navigateToCartPage() {
        this.getCartLink().click();
    }
}

module.exports = new ProductsPage();
