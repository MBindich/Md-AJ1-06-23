const BasePage = require('./basePage');

class SearchResultsPage extends BasePage {
    getNthSearchResult(numberOfResult) {
        return $(`//*[@id="goods-table"]/div[${numberOfResult}]`);
    }

    async clickOnNthSearchResult(numberOfResult) {
        const nthSearchResult = await this.getNthSearchResult(numberOfResult);
        nthSearchResult.waitForClickable();
        await nthSearchResult.click();
    }
}

module.exports = new SearchResultsPage;