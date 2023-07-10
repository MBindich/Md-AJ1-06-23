const { expect } = require('chai');
const Calculator = require('../calculator');

const calc = new Calculator();

describe(`Testing divide function in calculator`, function () {
  it(`Sending numbers, should return correct number`, async () => {
    const result = await calc.divide(-1, 5);
    expect(result).to.equal(-0.2);
  });

  it('Sending strings, should return Number', async () => {
    const result = await calc.divide(`a`, `b`);
    expect(typeof result).to.equal(`number`);
  });

  it(`Sending float numbers, should return correct number`, async () => {
    const result = await calc.divide(10.0, 4.2);
    expect(result).to.equal(2.380952380952381);
  });

  it('Sending large numbers, should return correct number', async () => {
    const result = await calc.divide(123456789, 123456789);
    expect(result).to.equal(1);
  });

  it('Sending 17 and more digit numbers, should return correct number', async () => {
    const result = await calc.divide(1234567890123456789, -1);
    expect(result).to.equal(-1234567890123456790);
  });
});
