class CartPage {
    getCartPageUrl() {
        return cy.url();
    }

    getCartPageTitle() {
        return cy.get(".header_secondary_container");
    }

    getCartPageItem() {
        return cy.get(".cart_item");
    }

    getCartPageItemNameBar() {
        return cy.get(".cart_item .inventory_item_name")
    }

    getContinueShoppingBtn() {
        return cy.get("#continue-shopping");
    }

    getRemoveBtn() {
        return cy.get(".cart_item button");
    }

    continueShopping() {
        this.getContinueShoppingBtn().click();
    }

    removeAnItem() {
        this.getRemoveBtn().click();
    }
}

module.exports = new CartPage();
