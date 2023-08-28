const BasePage = require('./basePage');

class ProfilePage extends BasePage {
    get personalInformationButton() {
        return $('//*[@id="top-page"]//a[@href="/personal/personal.phtml"]');
    }

    get usernameHeader() {
        return $('#top-page div.l-row-user-name > h1');
    }

    get exitButton() {
        return $('#top-page div.l-col-3 ul.uc-nav.uc-nav-last a');
    }
}

module.exports = ProfilePage;