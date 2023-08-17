class TopPanel {
    // //*[@id="top-page"]/div[@class="top-panel page-init-scroll"]

    get loginButton() {
        return $('//*[@id="top-page"]//*[@class="top-panel__userbar__auth"]');
    }

    get username() {
        return $('//*[@class="top-panel__userbar__user__name__inner"]');
    }

    async clickLoginButton() {
        await this.loginButton.waitForClickable();
        await this.loginButton.click();
    }
}

module.exports = new TopPanel;