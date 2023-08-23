const BasePage = require('./basePage');

class personalOZandAY extends BasePage {
    get emailAddres() {
        return $('#log-submit  div.b-inputs.rec-v.rec-change > input[name="email"]');
    }
    
    get phoneNum() {
        return $('#log-submit  div.b-inputs.rec-v.rec-change > input[name="phone"]');
    }
}

module.exports = new personalOZandAY;