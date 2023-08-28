const {expect} = require('chai');
const topPanel = require('../pageobjects/components/topPanel');
const ProfilePage = require('../pageobjects/profilePage');
const personalInfoPage = require('../pageobjects/personalInfoPage');
const personalDataForOZandAY = require('../pageobjects/personalDataForOZandAY');
const mainPage = require('../pageobjects/mainPage');
const loginPopup = require('../pageobjects/components/loginPopup');
const profilePage = new ProfilePage();
const mail = "";
const phone = "";
const psw = "";
const testNickname = "TestNicknameForProject"
const initialNickname = "MBlind"

describe('oz.by profile info tests', function () {
    this.beforeAll(async() => {
        await loginPopup.loginByMailHelper(mail, psw);
    })

    this.beforeEach(async() => {
        await mainPage.navigate('https://oz.by/');
        await topPanel.clickOnElement(topPanel.profileButton);
        await profilePage.clickOnElement(profilePage.personalInformationButton);
    })

    it('Should have correct information about profile', async () => {
        await personalInfoPage.clickOnElement(personalInfoPage.personalPersonalInfoButton);
        expect(await personalDataForOZandAY.emailAddres.getValue()).to.equal(mail) && expect(await personalDataForOZandAY.phoneNum.getValue()).to.equal(phone);
    })

    it('Should correctly change nickname', async() => {
        await personalInfoPage.changeNickname(testNickname);
        expect(await profilePage.usernameHeader.getText()).to.equal(testNickname);
    })

    this.afterAll(async() => {
        await mainPage.navigate('https://oz.by/');
        await topPanel.clickOnElement(topPanel.profileButton);
        await profilePage.clickOnElement(personalInfoPage.personalInformationButton);
        await personalInfoPage.changeNickname(initialNickname);
    })
})