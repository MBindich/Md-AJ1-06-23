const {expect} = require('chai');
const mainPage = require('../pageobjects/mainPage');
const topPanel = require('../pageobjects/components/topPanel');
const loginPopup = require('../pageobjects/components/loginPopup');
const ProfilePage = require('../pageobjects/profilePage');
const profilePage = new ProfilePage();
const mail = "mbindich@gmail.com";
const psw = "Gfhjkz_OZ";

describe('oz.by login tests', function () {
    this.beforeEach(async () => {
        await mainPage.navigate('https://oz.by/');
    })

    it('Should get correct notification if wrong email sent', async () => {
        await topPanel.clickLoginButton();
        await loginPopup.loginByEMail('a@a.a', 'a');
        await loginPopup.loginFormErrorNotification.waitForDisplayed();
        expect(await loginPopup.loginFormErrorNotification.getText()).to.equal('Введите корректный адрес электронной почты');
    })

    it('Should get correct notification if wrong password sent', async () => {
        await topPanel.clickLoginButton();
        await loginPopup.loginByEMail(mail, 'a');
        await loginPopup.loginFormErrorNotification.waitForDisplayed();
        expect(await loginPopup.loginFormErrorNotification.getText()).to.equal('Неверный пароль. Если вы потеряли или забыли пароль — восстановите его');
    })

    it('Should get correct notification if no phone number sent', async () => {
        await topPanel.clickLoginButton();
        await loginPopup.loginByPhone('');
        await loginPopup.phoneFormErrorNotification.waitForDisplayed();
        expect(await loginPopup.phoneFormErrorNotification.getText()).to.equal('Введите номер мобильного телефона белорусских опереторов');
    })

    it('Should succesfully login with correct credentials', async () => {
        await topPanel.clickLoginButton();
        await loginPopup.loginByEMail(mail, psw);
        await topPanel.username.waitForDisplayed()
        expect (await topPanel.username.isDisplayed()).to.equal(true);
    })

    it('', async() => {
        await topPanel.clickOnProfileButton();
        await profilePage.clickOnExitButton();
        await topPanel.loginButton.waitForDisplayed();
        expect(await topPanel.loginButton.isDisplayed()).to.equal(true);
    })
})