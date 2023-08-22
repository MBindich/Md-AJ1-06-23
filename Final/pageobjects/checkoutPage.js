const BasePage = require('./basePage');

class CheckoutPage extends BasePage {
    getNthCartItemName(n) {
        return $(`//*[@id="goods-block"]/tbody/tr[${n+1}]//a[@class="goods-table-cell__line goods-table-cell__line_title"]`);
    }

    get emptyCartNotification() {
        return $('//*[@id="top-page"]//div[@class="i-textual__plain i-textual__plain_arrow i-textual__plain_limited"]');
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

    async checkSelectAllItems() {
        await this.selectAllItems.waitForClickable();
        await this.selectAllItems.click();
    }

    async clickOnRemoveItemsButton() {
        await this.removeItemsButton.waitForClickable();
        await this.removeItemsButton.click();
    }

    async clickOnConfirmRemoveItemsButton() {
        await this.confirmRemoveItemsButton.waitForClickable();
        await this.confirmRemoveItemsButton.click();
    }
}

module.exports = new CheckoutPage;