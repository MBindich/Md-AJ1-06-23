const { expect } = require('chai');
const mainPage = require('../pageobjects/mainPage');
const topPanel = require('../pageobjects/components/topPanel');
const searchResultsPage = require('../pageobjects/searchResultsPage');
const itemPage = require('../pageobjects/itemPage');

const searchQuerys = ['Гарри Поттер', 'Игра престолов'];

describe('oz.by search tests', function () {
  this.beforeEach(async () => {
    await mainPage.navigate('https://oz.by/');
  });

  searchQuerys.forEach((query) => {
    it(`Search result item name should contain ${query}`, async () => {
      await topPanel.sendTextToElement(topPanel.searchField, query);
      await topPanel.clickOnElement(topPanel.searchButton);
      await searchResultsPage.clickOnSearchResultByIndex(1);
      expect(await itemPage.itemName.getText()).to.contain(query);
    });
  });
});
