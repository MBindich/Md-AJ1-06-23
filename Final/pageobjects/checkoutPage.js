const BasePage = require('./basePage');

class CheckoutPage extends BasePage {
    getNthCartItemName(n) {
        return $(`//*[@id="goods-block"]/tbody/tr[${n+1}]//a[@class="goods-table-cell__line goods-table-cell__line_title"]`);
    }

    get emptyCartNotification() {
        return $('#top-page div.i-textual__plain');
    }

    getNthItem(n) {
        return $(`//*[@id="goods-block"]/tbody/tr[${n+1}]`);
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

    getNthItemCheckbox(n) {
        return $(`//*[@id="goods-block"]/tbody/tr[${n+1}]//span[@class="i-checkbox i-checkbox_large"]`);
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

    async clickOnNthItemCheckbox(n) {
        const item = await this.getNthItemCheckbox(n);
        await item.waitForClickable();
        await item.click();
    }
}

module.exports = new CheckoutPage;