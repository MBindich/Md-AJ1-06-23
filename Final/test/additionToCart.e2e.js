const { expect } = require('chai');
const mainPage = require('../pageobjects/mainPage');
const topPanel = require('../pageobjects/components/topPanel');
const itemPage = require('../pageobjects/itemPage');
const searchResultsPage = require('../pageobjects/searchResultsPage');
const checkoutPage = require('../pageobjects/checkoutPage');
const cartHelpers = require('../helpers/cartHelpers');
const loginPopup = require('../pageobjects/components/loginPopup');
const searchQuerys = ['Гарри Поттер', 'Игра престолов'];
const mail = '';
const psw = '';

describe('oz.by add to cart test', function () {
  this.beforeAll(async () => {
    await loginPopup.loginByMailHelper(mail, psw);
  });

  searchQuerys.forEach((query) => {
    it('should correctly add item to cart', async () => {
      await mainPage.navigate('https://oz.by/');
      await topPanel.sendTextToElement(topPanel.searchField, query);
      await topPanel.clickOnElement(topPanel.searchButton);
      await searchResultsPage.clickOnSearchResultByIndex(1);
      const itemName = await itemPage.itemName.getText();
      await itemPage.clickOnElement(itemPage.addToCartButton);
      await topPanel.clickOnElement(topPanel.cartButton);

      expect(await checkoutPage.getCartItemNameByIndex(1).getText()).to.equal(itemName);
    });
  });

  this.afterEach(async () => {
    await cartHelpers.clearCart();
  });
});
