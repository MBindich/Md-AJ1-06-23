const BasePage = require("../basePage");
const mainPage = require("../mainPage");
const topPanel = require("./topPanel");

class LoginPopup extends BasePage{
    get loginByPhoneButton() {
        return $('//*[@id="loginFormLoginPhoneLink"]');
    }

    get loginByEMailButton() {
        return $('//*[@id="loginFormLoginEmailLink"]');
    }

    get emailInputField() {
        return $('//*[@id="loginForm"]//*[@name="cl_email"]');
    }

    get passwordInputField() {
        return $('//*[@id="loginForm"]//*[@name="cl_psw"]');
    }

    get loginButton() {
        return $('//*[@id="loginForm"]/button[@value="login"]');
    }

    get sendSMSButton() {
        return $('//*[@id="phoneForm"]/button[@value="login"]');
    }

    get phoneNumberInputField() {
        return $('//*[@id="formInputLoginPhone"]');
    }

    get loginFormErrorNotification() {
        return $('//*[@id="loginForm"]//*[@id="test"]//div[@class="i-popover__line"]');
    }

    get phoneFormErrorNotification() {
        return $('//*[@id="phoneForm"]//div[@class="i-popover__line"]');
    }

    async loginByMailHelper(mail, password) {
        await mainPage.navigate('https://oz.by/');
        await topPanel.clickOnElement(topPanel.loginButton);
        await this.loginByEMail(mail, password);
        return;
    }

    async loginByPhone(phoneNumber, isLoggedInExpected = true) {
        await this.clickOnElement(this.loginByPhoneButton);
        await this.sendTextToElement(this.phoneNumberInputField, phoneNumber);
        await this.clickOnElement(this.sendSMSButton);
        if (isLoggedInExpected) {
            //Unable to do because manual actions are required
        }
        else {
            await this.phoneFormErrorNotification.waitForDisplayed();
        }
    }

    async loginByEMail(mail, password, isLoggedInExpected = true) {
        await this.clickOnElement(this.loginByEMailButton);
        await this.sendTextToElement(this.emailInputField, mail);
        await this.sendTextToElement(this.passwordInputField, password);
        await this.clickOnElement(this.loginButton);
        if (isLoggedInExpected) {
            await topPanel.username.waitForDisplayed();
        }
        else {
            await this.loginFormErrorNotification.waitForDisplayed();
        }
    }
}

module.exports = new LoginPopup;