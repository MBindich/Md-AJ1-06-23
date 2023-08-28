const BasePage = require('./basePage');

class SearchResultsPage extends BasePage {
    getSearchResultByIndex(IndexOfResult) {
        return $(`//*[@id="goods-table"]/div[${IndexOfResult}]`);
    }

    async clickOnSearchResultByIndex(IndexOfResult) {
        const SearchResultByIndex = await this.getSearchResultByIndex(IndexOfResult);
        await SearchResultByIndex.waitForClickable();
        await SearchResultByIndex.click();
    }
}

module.exports = new SearchResultsPage;