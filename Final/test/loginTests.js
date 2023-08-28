const {expect} = require('chai');
const mainPage = require('../pageobjects/mainPage');
const topPanel = require('../pageobjects/components/topPanel');
const loginPopup = require('../pageobjects/components/loginPopup');
const ProfilePage = require('../pageobjects/profilePage');
const profilePage = new ProfilePage();
const mail = "";
const psw = "";

describe('oz.by login tests', function () {
    this.beforeEach(async () => {
        await mainPage.navigate('https://oz.by/');
    })

    it('Should get correct notification if wrong email sent', async () => {
        await topPanel.clickOnElement(topPanel.loginButton);
        await loginPopup.loginByEMail('a@a.a', 'a', false);
        expect(await loginPopup.loginFormErrorNotification.getText()).to.equal('Введите корректный адрес электронной почты');
    })

    it('Should get correct notification if wrong password sent', async () => {
        await topPanel.clickOnElement(topPanel.loginButton);
        await loginPopup.loginByEMail(mail, 'a', false);
        expect(await loginPopup.loginFormErrorNotification.getText()).to.equal('Неверный пароль. Если вы потеряли или забыли пароль — восстановите его');
    })

    it('Should get correct notification if no phone number sent', async () => {
        await topPanel.clickOnElement(topPanel.loginButton);
        await loginPopup.loginByPhone('', false);
        expect(await loginPopup.phoneFormErrorNotification.getText()).to.equal('Введите номер мобильного телефона белорусских опереторов');
    })

    it('Should succesfully login with correct credentials', async () => {
        await topPanel.clickOnElement(topPanel.loginButton);
        await loginPopup.loginByEMail(mail, psw);
        expect (await topPanel.username.isDisplayed()).to.equal(true);
    })

    it('Should logout correctly', async() => {
        await topPanel.clickOnElement(topPanel.profileButton);
        await profilePage.clickOnElement(profilePage.exitButton);
        expect(await topPanel.loginButton.isDisplayed()).to.equal(true);
    })
})