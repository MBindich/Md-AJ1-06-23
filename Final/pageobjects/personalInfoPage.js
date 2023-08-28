const ProfilePage = require('./profilePage');
const profilePage = new ProfilePage();
const topPanel = require("./components/topPanel");

class PersonalInfoPage extends ProfilePage {
    get personalPersonalInfoButton() {
        return $('//*[@id="top-page"]//a[@href="/auth/personal.phtml"]');
    }

    get nicknameField() {
        return $('#frm-l-1');
    }

    get saveChangesButton() {
        return $('#top-page  button.button-small');
    }

    async changeNickname(newNickname) {
        await this.clearTextFromElement(this.nicknameField);
        await this.sendTextToElement(this.nicknameField, newNickname);
        await this.clickOnElement(this.saveChangesButton);
        await topPanel.clickOnElement(topPanel.profileButton);
        await profilePage.usernameHeader.waitForDisplayed();
    }
}

module.exports = new PersonalInfoPage;