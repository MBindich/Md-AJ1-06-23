const BasePage = require('./basePage');

class CheckoutPage extends BasePage {
    getCartItemNameByIndex(index) {
        return $(`//*[@id="goods-block"]/tbody/tr[${index+1}]//a[@class="goods-table-cell__line goods-table-cell__line_title"]`);
    }

    get emptyCartNotification() {
        return $('#top-page div.i-textual__plain');
    }

    getItemByIndex(index) {
        return $(`//*[@id="goods-block"]/tbody/tr[${index+1}]`);
    }

    get selectAllItems() {
        return $('//*[@id="goods-block"]//*[@class="goods-table__row goods-table__row_footer"]//label[@class="goods-table-cell__sub goods-table-cell__sub_controls"]');
    }

    get removeItemsButton() {
        return $('#goods-block  button.remove');
    }

    get confirmRemoveItemsButton() {
        return $('#goods-block  button.remove-yes');
    }

    get allGoodsInCart() {
        return $$('//*[@id="goods-block"]/tbody[@class="goods-table__body"]/tr');
    }

    getItemCheckboxByIndex(index) {
        return $(`//*[@id="goods-block"]/tbody/tr[${index+1}]//span[@class="i-checkbox i-checkbox_large"]`);
    }

    async confirmRemovementFromCart() {
        const initialAmountOfGoods = await this.allGoodsInCart.length;
        await this.clickOnElement(this.removeItemsButton);
        await this.clickOnElement(this.confirmRemoveItemsButton);
        await this.waitForAmountOfGoodsChange(initialAmountOfGoods, this.allGoodsInCart);
    }

    async clickOnItemCheckboxByIndex(index) {
        const item = await this.getItemCheckboxByIndex(index);
        await item.waitForClickable();
        await item.click();
    }
}

module.exports = new CheckoutPage;