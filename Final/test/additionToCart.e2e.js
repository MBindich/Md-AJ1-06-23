const {expect} = require('chai');
const mainPage = require('../pageobjects/mainPage');
const topPanel = require('../pageobjects/components/topPanel');
const itemPage = require('../pageobjects/itemPage');
const searchResultsPage = require('../pageobjects/searchResultsPage');
const checkoutPage = require('../pageobjects/checkoutPage');
const clearCart = require('../helpers/clearCart');
const loginByMail = require('../helpers/login');
const searchQuerys = ['Гарри Поттер', 'Игра престолов'];
const mail = "mbindich@gmail.com";
const psw = "Gfhjkz_OZ";

describe('oz.by add to cart test', function() {
    this.beforeAll(async() => {
        await loginByMail(mail, psw);
    })

    searchQuerys.forEach((query) => {
        it('should correctly add item to cart', async() => {
            await mainPage.navigate('https://oz.by/');
            await topPanel.sendTextToSearchField(query);
            await topPanel.clickSearchButton();
            await searchResultsPage.clickOnNthSearchResult(1);
            const itemName = await itemPage.itemName.getText();
            await itemPage.clickOnAddToCartButton();
            await topPanel.clickOnCartButton();
    
            expect(await checkoutPage.getNthCartItemName(1).getText()).to.equal(itemName);
        })
    })

    this.afterEach(async() => {
        await clearCart();
    })
})