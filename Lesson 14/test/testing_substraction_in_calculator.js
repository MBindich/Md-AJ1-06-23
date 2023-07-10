const { expect } = require('chai');
const Calculator = require('../calculator');

const calc = new Calculator();

describe(`Testing substraction function in calculator`, function () {
  it(`Sending numbers, should return correct number`, async () => {
    const result = await calc.substract(1, 5);
    expect(result).to.equal(-4);
  });

  it('Sending strings, should return Number', async () => {
    const result = await calc.substract(`a`, `b`);
    expect(typeof result).to.equal(`number`);
  });

  it(`Sending float numbers, should return correct number`, async () => {
    const result = await calc.substract(1.5, 5.5);
    expect(result).to.equal(-4);
  });

  it('Sending large numbers, should return correct number', async () => {
    const result = await calc.substract(123456789, 123456789);
    expect(result).to.equal(0);
  });

  it('Sending 17 and more digit numbers, should return correct number', async () => {
    const result = await calc.substract(1234567890123456789, -1);
    expect(result).to.equal(1234567890123456788);
  });
});
