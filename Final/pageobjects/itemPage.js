const BasePage = require('./basePage');

class ItemPage extends BasePage {
    get itemName() {
        return $('//*[@id="top-page"]//h1[@itemprop="name"]');
    }

    get addToCartButton() {
        return $('button.addtocart-btn');
    }

    async clickOnAddToCartButton() {
        await this.addToCartButton.waitForClickable();
        await this.addToCartButton.click();
    }
}

module.exports = new ItemPage;