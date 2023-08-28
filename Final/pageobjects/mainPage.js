const BasePage = require('./basePage');

class MainPage extends BasePage {
    get mainMenuList() {
        return $('//*[@id="top-page"]//*[@class="main-nav__list"]');
    }

    get mainMenuBooksButton() {
        return $('//*[@id="top-page"]//*[@class="main-nav__list"]//a[@href="/books/"]');
    }

    get foreignLanguagesButton() {
        return $('//*[@id="top-page"]//a[@href="https://oz.by/selfstudytonguebooks/"]');
    }
    
    async moveToMainMenuBooksButton() {
        await this.mainMenuBooksButton.waitForClickable();
        await this.mainMenuBooksButton.moveTo();
    }
}

module.exports = new MainPage;