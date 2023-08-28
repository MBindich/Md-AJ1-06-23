const BasePage = require('./basePage');

class CategoryResultsPage extends BasePage {
    get englishCategoryCheckbox() {
        return $('//*[@id="v5_2"]/ancestor::label');
    }

    get onBelarussianCheckbox() {
        return $('//*[@id="ti8_1"]/ancestor::label');
    }

    getYearOfReleaseCheckbox(year) {
        return $(`//*[@id="si1_${year}"]/ancestor::label`);
    }

    get goodsTable() {
        return $('#goods-table');
    }

    getGoodNameByIndex(index) {
        return $(`//*[@id="goods-table"]/div[${index}]//*[@class="product-card__title"]`)
    }

    get showResultsButton() {
        return $('#f-results');
    }

    get allGoodsOnPage() {
        return $$('//*[@id="goods-table"]/div//a');
    }

    getGoodFromResultsByIndex(index) {
        return $(`//*[@id="goods-table"]/div[${index}]//a`);
    }

    async clickOnGoodFromResultsByIndex(index) {
        const good = await this.getGoodFromResultsByIndex(index);
        await good.waitForClickable();
        await good.click();
    }

    async applySelectedFilters() {
        const initialAmountOfGoods = await this.allGoodsOnPage.length;
        await this.showResultsButton.waitForClickable();
        await this.showResultsButton.click();
        await this.waitForAmountOfGoodsChange(initialAmountOfGoods, this.allGoodsOnPage);
     }

    async clickOnYearOfReleaseCheckbox(year) {
        const yearOfReleaseFilter = await this.getYearOfReleaseCheckbox(year); 
        await yearOfReleaseFilter.waitForClickable();
        await yearOfReleaseFilter.click();
    }
}

module.exports = new CategoryResultsPage;