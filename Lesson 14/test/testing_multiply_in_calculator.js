const { expect } = require('chai');
const Calculator = require('../calculator.js');

const calc = new Calculator();

describe(`Testing multiply function in calculator`, function () {
  it('Sending correct numbers, should return correct number', async () => {
    const result = await calc.multiply(-1, 3, 4);
    expect(result).to.equal(-12);
  });

  it('Sending strings, should return number', async () => {
    const result = await calc.multiply(`a`, `b`, `c`);
    expect(typeof result).to.equal(`number`);
  });

  it('Sending float numbers, should return correct number', async () => {
    const result = await calc.multiply(-1.5, 3.5, 4);
    expect(result).to.equal(-21);
  });

  it('Sending large numbers, should return correct number', async () => {
    const result = await calc.multiply(123456789, 123456789);
    expect(result).to.equal(15241578750190521);
  });

  it('Sending 17 and more digit numbers, should return correct number', async () => {
    const result = await calc.multiply(1234567890123456789, 3);
    expect(result).to.equal(3703703670370370367);
  });
});
