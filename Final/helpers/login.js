const loginPopup = require("../pageobjects/components/loginPopup");
const topPanel = require("../pageobjects/components/topPanel");
const mainPage = require("../pageobjects/mainPage");

async function loginByMail(mail, password) {
    await mainPage.navigate('https://oz.by/');
    await topPanel.clickLoginButton();
    await loginPopup.loginByEMail(mail, password);
    return;
}

module.exports = loginByMail;