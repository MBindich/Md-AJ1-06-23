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
        await loginPopup.clickLoginByMailButton();
        await loginPopup.sendTextToEmailInput('a@a.a');
        await loginPopup.sendTextToPasswordInput('a');
        await loginPopup.clickLoginButton();
        await loginPopup.loginFormErrorNotification.waitForDisplayed();
        expect(await loginPopup.loginFormErrorNotification.getText()).to.equal('Введите корректный адрес электронной почты');
    })

    it('Should get correct notification if wrong password sent', async () => {
        await loginPopup.clickLoginByMailButton();
        await loginPopup.sendTextToEmailInput('mbindich@gmail.com');
        await loginPopup.sendTextToPasswordInput('a');
        await loginPopup.clickLoginButton();
        await loginPopup.loginFormErrorNotification.waitForDisplayed();
        expect(await loginPopup.loginFormErrorNotification.getText()).to.equal('Неверный пароль. Если вы потеряли или забыли пароль — восстановите его');
    })

    it('Should get correct notification if no phone number sent', async () => {
        await loginPopup.clickLoginByPhoneButton();
        await loginPopup.clickSendSMSButton();
        await loginPopup.phoneFormErrorNotification.waitForDisplayed();
        expect(await loginPopup.phoneFormErrorNotification.getText()).to.equal('Этот номер телефона не зарегистрирован. Проверьте его на ошибки, введите другой или зарегистрируйтесь');
    })

    it('Should succesfully login with correct credentials', async () => {
        await loginPopup.clickLoginByMailButton();
        await loginPopup.sendTextToEmailInput('mbindich@gmail.com');
        await loginPopup.sendTextToPasswordInput('Gfhjkz_OZ');
        await loginPopup.clickLoginButton();
        await topPanel.username.waitForDisplayed()
        expect (await topPanel.username.isDisplayed()).to.equal(true);
    })
})