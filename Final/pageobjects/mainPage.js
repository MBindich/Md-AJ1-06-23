const BasePage = require('./basePage');

class MainPage extends BasePage {
    get mainMenuList() {
        return $('//*[@id="top-page"]//*[@class="main-nav__list"]//a[@href="/books/"]');
    }
}

module.exports = new MainPage;