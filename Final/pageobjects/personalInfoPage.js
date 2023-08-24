const ProfilePage = require('./profilePage');

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

    async clickSaveChangesButton() {
        await this.saveChangesButton.waitForClickable();
        await this.saveChangesButton.click();
    }

    async sendTextToNicknameField(text) {
        await this.nicknameField.waitForClickable();
        await this.nicknameField.addValue(text);
    }

    async removeTextFromNicknameField() {
        await this.nicknameField.waitForClickable();
        await this.nicknameField.clearValue();
    }

    async clickOnPersonalPersonalInfoButton() {
        await this.personalPersonalInfoButton.waitForClickable();
        await this.personalPersonalInfoButton.click();
    }
}

module.exports = new PersonalInfoPage;