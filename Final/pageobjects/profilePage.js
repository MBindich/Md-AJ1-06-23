const BasePage = require('./basePage');

class ProfilePage extends BasePage {
    get personalInformationButton() {
        return $('//*[@id="top-page"]//a[@href="/personal/personal.phtml"]');
    }

    async clickOnPersonalInformationButton() {
        await this.personalInformationButton.waitForClickable();
        await this.personalInformationButton.click();
    }
}

module.exports = ProfilePage;