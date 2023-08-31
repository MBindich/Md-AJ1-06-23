const { expect } = require('chai');
const categoryResultsPage = require('../pageobjects/categoryResultsPage');
const itemPage = require('../pageobjects/itemPage');
const mainPage = require('../pageobjects/mainPage');

describe('oz.by catalog navigation tests', function () {
  this.beforeAll(async () => {
    await mainPage.navigate('https://oz.by/');
  });

  it('Should correctly navigate to filtered item', async () => {
    await mainPage.moveToElement(mainPage.mainMenuBooksButton);
    await mainPage.clickOnElement(mainPage.foreignLanguagesButton);
    await categoryResultsPage.clickOnYearOfReleaseCheckbox(2021);
    await categoryResultsPage.clickOnElement(categoryResultsPage.onBelarussianCheckbox);
    await categoryResultsPage.clickOnElement(categoryResultsPage.englishCategoryCheckbox);
    await categoryResultsPage.applySelectedFilters();
    await categoryResultsPage.clickOnGoodFromResultsByIndex(1);
    expect(await itemPage.getLanguageOfBook()).to.equal('Английский') && expect(await itemPage.getYearOfRelease()).to.equal('2021');
  });
});
