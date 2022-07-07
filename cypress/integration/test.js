/// <reference types="cypress" />

import mainPage from "../page-objects/mainPage";
import loginPage from "../page-objects/loginPage";
import productsPage from "../page-objects/productsPage";
import assertions from "../assertions/assertions";
import cartPage from "../page-objects/cartPage";

describe('Adding/Removing Item to Cart e2e test', () => {
  before(() => {
    mainPage.goTo();
    assertions.verifyThatLoginPageIsOpenedCorrectly();
  })

  it("Should succesfully login, add an item to cart, remove the item from cart and logout", () => {
    loginPage.logIn();
    assertions.verifyThatTheLoginIsSuccessful();
    productsPage.addAnItemToCart()
    assertions.verifyThatItemIsAddedToCart();
    productsPage.navigateToCartPage();
    assertions.verifyThatCartPageIsOpenedCorrectly();
    assertions.verifyThatItemIsAddedInCartPage();
    assertions.verifyThatCorrectItemIsAddedToTheCart();
    cartPage.removeAnItem();
    assertions.verifyThatItemIsSuccessfullyDeletedFromTheCart();
    cartPage.continueShopping();
    productsPage.logout();
    assertions.verifyThatLoginPageIsOpenedCorrectly();
  })
})