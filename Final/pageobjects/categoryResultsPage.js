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

    getNthGoodName(n) {
        return $(`//*[@id="goods-table"]/div[${n}]//*[@class="product-card__title"]`)
    }

    get showResultsButton() {
        return $('#f-results');
    }

    get allGoodsOnPage() {
        return $$('//*[@id="goods-table"]/div//a');
    }

    getNthGoodFromResults(n) {
        return $(`//*[@id="goods-table"]/div[${n}]//a`);
    }

    async clickOnNthGoodFromResults(n) {
        const good = await this.getNthGoodFromResults(n);
        await good.waitForClickable();
        await good.click();
    }

     async waitForAmountOfGoodsChange(initialAmountOfGoods) {
        const elms = await this.allGoodsOnPage;
        await browser.waitUntil(async function() {
            const currentAmountOfGoods = elms.length;
            return (await currentAmountOfGoods !== initialAmountOfGoods);
        })
    }

    async clickOnShowResultsButton() {
        const initialAmountOfGoods = await this.allGoodsOnPage.length;
        await this.showResultsButton.waitForClickable();
        await this.showResultsButton.click();
        await this.waitForAmountOfGoodsChange(initialAmountOfGoods);
    }

    async clickOnYearOfReleaseCheckbox(year) {
        const yearOfReleaseFilter = this.getYearOfReleaseCheckbox(year); 
        await yearOfReleaseFilter.waitForClickable();
        await yearOfReleaseFilter.click();
    }

    async clickOnBelarussianCheckbox() {
        await this.onBelarussianCheckbox.waitForClickable();
        await this.onBelarussianCheckbox.click();
    }

    async clickOnEnglishCategoryCheckbox() {
        await this.englishCategoryCheckbox.waitForClickable();
        await this.englishCategoryCheckbox.click();
    }
}

module.exports = new CategoryResultsPage;