const {expect} = require('chai');
const mainPage = require('../pageobjects/mainPage');
const topPanel = require('../pageobjects/components/topPanel');
const loginPopup = require('../pageobjects/components/loginPopup');

describe('oz.by login tests', function () {
    this.beforeEach(async () => {
        await mainPage.navigate('https://oz.by/');
        await topPanel.clickLoginButton();
    })

    it('Should get correct notification if wrong email sent', async () => {
        await loginPopup.loginByEMail('a@a.a', 'a');
        await loginPopup.loginFormErrorNotification.waitForDisplayed();
        expect(await loginPopup.loginFormErrorNotification.getText()).to.equal('Введите корректный адрес электронной почты');
    })

    it('Should get correct notification if wrong password sent', async () => {
        await loginPopup.loginByEMail('mbindich@gmail.com', 'a');
        await loginPopup.loginFormErrorNotification.waitForDisplayed();
        expect(await loginPopup.loginFormErrorNotification.getText()).to.equal('Неверный пароль. Если вы потеряли или забыли пароль — восстановите его');
    })

    it('Should get correct notification if no phone number sent', async () => {
        await loginPopup.loginByPhone('');
        await loginPopup.phoneFormErrorNotification.waitForDisplayed();
        expect(await loginPopup.phoneFormErrorNotification.getText()).to.equal('Введите номер мобильного телефона белорусских опереторов');
    })

    it('Should succesfully login with correct credentials', async () => {
        await loginPopup.loginByEMail('mbindich@gmail.com', 'Gfhjkz_OZ');
        await topPanel.username.waitForDisplayed()
        expect (await topPanel.username.isDisplayed()).to.equal(true);
    })
})