const loginPopup = require("../pageobjects/components/loginPopup");
const topPanel = require("../pageobjects/components/topPanel");
const mainPage = require("../pageobjects/mainPage");

async function loginByMail() {
    await mainPage.navigate('https://oz.by/');
    await topPanel.clickLoginButton();
    await loginPopup.loginByEMail('mbindich@gmail.com', 'Gfhjkz_OZ');
}

module.exports = loginByMail;