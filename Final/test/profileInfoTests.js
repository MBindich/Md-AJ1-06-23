const {expect} = require('chai');
const topPanel = require('../pageobjects/components/topPanel');
const loginByMail = require('../helpers/login');
const ProfilePage = require('../pageobjects/profilePage');
const personalInfoPage = require('../pageobjects/personalInfoPage');
const personalDataForOZandAY = require('../pageobjects/personalDataForOZandAY');
const mainPage = require('../pageobjects/mainPage');
const profilePage = new ProfilePage();
const mail = "mbindich@gmail.com";
const phone = "375293034637";
const psw = "Gfhjkz_OZ";
const testNickname = "TestNicknameForProject"
const initialNickname = "MBlind"

describe('oz.by profile info tests', function () {
    this.beforeAll(async() => {
        await loginByMail(mail, psw);
    })

    this.beforeEach(async() => {
        await mainPage.navigate('https://oz.by/');
        await topPanel.clickOnProfileButton();
        await profilePage.clickOnPersonalInformationButton();
    })

    it('Should have correct information about profile', async () => {
        await personalInfoPage.clickOnPersonalPersonalInfoButton();
        expect(await personalDataForOZandAY.emailAddres.getValue()).to.equal(mail) && expect(await personalDataForOZandAY.phoneNum.getValue()).to.equal(phone);
    })

    it('Should correctly change nickname', async() => {
        await personalInfoPage.removeTextFromNicknameField();
        await personalInfoPage.sendTextToNicknameField(testNickname);
        await personalInfoPage.clickSaveChangesButton();
        await topPanel.clickOnProfileButton();
        await profilePage.usernameHeader.waitForExist();

        expect(await profilePage.usernameHeader.getText()).to.equal(testNickname);
    })

    this.afterAll(async() => {
        await mainPage.navigate('https://oz.by/');
        await topPanel.clickOnProfileButton();
        await profilePage.clickOnPersonalInformationButton();
        await personalInfoPage.removeTextFromNicknameField();
        await personalInfoPage.sendTextToNicknameField(initialNickname);
        await personalInfoPage.clickSaveChangesButton();
    })
})