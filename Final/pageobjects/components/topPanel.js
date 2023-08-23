class TopPanel {
    // //*[@id="top-page"]/div[@class="top-panel page-init-scroll"]

    get loginButton() {
        return $('//*[@id="top-page"]//*[@class="top-panel__userbar__auth"]');
    }

    get username() {
        return $('//*[@class="top-panel__userbar__user__name__inner"]');
    }

    get searchField() {
        return $('//input[@id="top-s"]');
    }

    get searchButton() {
        return $('//*[@id="search-top"]//button[@class="top-panel__search__btn"]');
    }

    get cartButton() {
        return $('//*[@id="top-page"]//a[@class="top-panel__userbar__cart__item"]');
    }

    get profileButton() {
        return $('//*[@class="top-panel__userbar__user__name__inner"]/ancestor::a');
    }

    async clickOnProfileButton() {
        await this.profileButton.waitForClickable();
        await this.profileButton.click();
    }

    async clickOnCartButton() {
        await this.cartButton.waitForClickable();
        await this.cartButton.click();
    }

    async clickSearchButton() {
        await this.searchButton.waitForClickable();
        await this.searchButton.click();
    }

    async sendTextToSearchField(searchQuery) {
        await this.searchField.waitForClickable();
        await this.searchField.addValue(searchQuery);
    }

    async clickLoginButton() {
        await this.loginButton.waitForClickable();
        await this.loginButton.click();
    }
}

module.exports = new TopPanel;