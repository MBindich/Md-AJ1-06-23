const topPanel = require("../pageobjects/components/topPanel");
const itemPage = require("../pageobjects/itemPage");
const mainPage = require("../pageobjects/mainPage");
const searchResultsPage = require("../pageobjects/searchResultsPage");

async function addItemToCart(searchQuerys) {
    for (let query of searchQuerys) {
        await mainPage.navigate('https://oz.by/');
        await topPanel.sendTextToSearchField(query);
        await topPanel.clickSearchButton();
        await searchResultsPage.clickOnNthSearchResult(1);
        await itemPage.clickOnAddToCartButton();
        await topPanel.clickOnCartButton();
    }
    return;
}

module.exports = addItemToCart; 