const { expect } = require('chai');
const Calculator = require('../calculator.js');

const calc = new Calculator();

describe(`Testing exponentiation function in calculator`, function () {
  it('Sending correct numbers, should return correct number', async () => {
    const result = await calc.exponentiation(2);
    expect(result).to.equal(4);
  });

  it('Sending strings, should return string', async () => {
    const result = await calc.exponentiation(`a`, `b`);
    expect(typeof result).to.equal(`number`);
  });

  it('Sending float numbers, should return correct number', async () => {
    const result = await calc.exponentiation(1.5);
    expect(result).to.equal(2.25);
  });

  it('Sending large numbers, should return correct number', async () => {
    const result = await calc.exponentiation(123456789);
    expect(result).to.equal(15241578750190521);
  });

  it('Sending 17 and more digit numbers, should return correct number', async () => {
    const result = await calc.exponentiation(1234567890123456789);
    expect(result).to.equal(1.5241578753238835e36);
  });
});
