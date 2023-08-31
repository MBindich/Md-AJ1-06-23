const checkoutPage = require('../pageobjects/checkoutPage');
const topPanel = require('../pageobjects/components/topPanel');
const itemPage = require('../pageobjects/itemPage');
const mainPage = require('../pageobjects/mainPage');
const searchResultsPage = require('../pageobjects/searchResultsPage');

class CartHelpers {
  async clearCart() {
    await topPanel.clickOnElement(topPanel.cartButton);
    await checkoutPage.clickOnElement(checkoutPage.selectAllItems);
    await checkoutPage.clickOnElement(checkoutPage.removeItemsButton);
    await checkoutPage.clickOnElement(checkoutPage.confirmRemoveItemsButton);
    return;
  }

  async addItemsToCart(searchQuerys) {
    for (let query of searchQuerys) {
      await mainPage.navigate('https://oz.by/');
      await topPanel.sendTextToElement(topPanel.searchField, query);
      await topPanel.clickOnElement(topPanel.searchButton);
      await searchResultsPage.clickOnSearchResultByIndex(1);
      await itemPage.clickOnElement(itemPage.addToCartButton);
      await topPanel.clickOnElement(topPanel.cartButton);
    }
    return;
  }
}

module.exports = new CartHelpers();
