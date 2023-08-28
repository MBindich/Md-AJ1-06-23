const {expect} = require('chai');
const cartHelpers = require('../helpers/cartHelpers')
const checkoutPage = require('../pageobjects/checkoutPage');
const loginPopup = require('../pageobjects/components/loginPopup');
const mail = "";
const psw = "";
const searchQuerys = ['Гарри Поттер', 'Игра престолов'];

describe('oz.by removal from cart tests', function() {
    this.beforeAll(async() => {
        await loginPopup.loginByMailHelper(mail, psw);
        await cartHelpers.addItemsToCart(searchQuerys);
    })
    
    it('Should be one element out of two after removing one', async() => {        
        await checkoutPage.clickOnItemCheckboxByIndex(1);
        await checkoutPage.confirmRemovementFromCart();

        expect(await checkoutPage.getItemByIndex(1).isExisting()).to.equal(true);
    })

    it('Should correctly remove all items from cart', async() => {
        await checkoutPage.navigate('https://oz.by/checkout/');
        await checkoutPage.clickOnElement(checkoutPage.selectAllItems);
        await checkoutPage.confirmRemovementFromCart();
        
        expect(await checkoutPage.emptyCartNotification.isExisting()).to.equal(true);
    })
})