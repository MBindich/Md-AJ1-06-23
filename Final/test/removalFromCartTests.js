const {expect} = require('chai');
const addItemToCart = require('../helpers/addItemToCart');
const loginByMail = require('../helpers/login');
const checkoutPage = require('../pageobjects/checkoutPage');
const mail = "";
const psw = "";
const searchQuerys = ['Гарри Поттер', 'Игра престолов'];

describe('oz.by removal from cart tests', function() {
    this.beforeAll(async() => {
        await loginByMail(mail, psw);
        await addItemToCart(searchQuerys);
    })
    
    it('Should be one element out of two after removing one', async() => {        
        await checkoutPage.clickOnNthItemCheckbox(1);
        await checkoutPage.clickOnRemoveItemsButton();
        await checkoutPage.clickOnConfirmRemoveItemsButton();

        expect(await checkoutPage.getNthItem(1).isExisting()).to.equal(true);
    })

    it('Should correctly remove all items from cart', async() => {
        await checkoutPage.navigate('https://oz.by/checkout/');
        await checkoutPage.checkSelectAllItems();
        await checkoutPage.clickOnRemoveItemsButton();
        await checkoutPage.clickOnConfirmRemoveItemsButton();
        await checkoutPage.emptyCartNotification.waitForExist();
        
        expect(await checkoutPage.emptyCartNotification.isExisting()).to.equal(true);
    })
})