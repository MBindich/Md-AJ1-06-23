const {expect} = require('chai');
const mainPage = require('../pageobjects/mainPage');
const topPanel = require('../pageobjects/components/topPanel');
const loginPopup = require('../pageobjects/components/loginPopup');
const loginByMail = require('../helpers/login');
const ProfilePage = require('../pageobjects/profilePage');
const personalInfoPage = require('../pageobjects/personalInfoPage');
const personalDataForOZandAY = require('../pageobjects/personalDataForOZandAY');
const profilePage = new ProfilePage();

const mail = "mbindich@gmail.com";
const phone = "375293034637";
const psw = "Gfhjkz_OZ";

describe('oz.by profile info tests', function () {
    it('Should have correct information about profile', async () => {
        await loginByMail(mail, psw);
        await topPanel.clickOnProfileButton();
        await profilePage.clickOnPersonalInformationButton();
        await personalInfoPage.clickOnPersonalPersonalInfoButton();
        expect(await personalDataForOZandAY.emailAddres.getValue()).to.equal(mail) && expect(await personalDataForOZandAY.phoneNum.getValue()).to.equal(phone);
    })
})