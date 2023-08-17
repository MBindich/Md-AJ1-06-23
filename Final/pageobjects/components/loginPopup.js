class LoginPopup {
    // //*[@id="auth-overlay"]//div[@class="i-popup-login"]
    
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

    get loginFormErrorNotification() {
        return $('//*[@id="loginForm"]//*[@id="test"]//div[@class="i-popover__line"]');
    }

    get phoneFormErrorNotification() {
        return $('//*[@id="phoneForm"]//div[@class="i-popover__line"]');
    }

    async clickSendSMSButton() {
        await this.sendSMSButton.waitForClickable();
        await this.sendSMSButton.click();
    }

    async clickLoginButton() {
        await this.loginButton.waitForClickable();
        await this.loginButton.click();
    }

    async sendTextToEmailInput(email) {
        await this.emailInputField.waitForClickable();
        await this.emailInputField.addValue(email);
    }

    async sendTextToPasswordInput(password) {
        await this.passwordInputField.waitForClickable();
        await this.passwordInputField.addValue(password);
    }

    async clickLoginByPhoneButton() {
        await this.loginByPhoneButton.waitForClickable();
        await this.loginByPhoneButton.click();
    }

    async clickLoginByMailButton() {
        await this.loginByEMailButton.waitForClickable();
        await this.loginByEMailButton.click();
    }
}

module.exports = new LoginPopup;