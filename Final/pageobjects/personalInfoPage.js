const ProfilePage = require('./profilePage');

class PersonalInfoPage extends ProfilePage {
    get personalPersonalInfoButton() {
        return $('//*[@id="top-page"]//a[@href="/auth/personal.phtml"]');
    }

    async clickOnPersonalPersonalInfoButton() {
        await this.personalPersonalInfoButton.waitForClickable();
        await this.personalPersonalInfoButton.click();
    }
}

module.exports = new PersonalInfoPage;