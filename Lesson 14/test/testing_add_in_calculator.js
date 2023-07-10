const { expect } = require('chai');
const Calculator = require('../calculator.js');

const calc = new Calculator();

describe(`Testing add function in calculator`, function () {
  it('Sending correct numbers, should return correct number', async () => {
    const result = await calc.add(-1, 3, 4);
    expect(result).to.equal(6);
  });

  it('Sending strings, should return string', async () => {
    const result = await calc.add(`a`, `b`, `c`);
    expect(typeof result).to.equal(`string`);
  });

  it('Sending float numbers, should return correct number', async () => {
    const result = await calc.add(-1.5, 3.5, 4);
    expect(result).to.equal(6);
  });

  it('Sending large numbers, should return correct number', async () => {
    const result = await calc.add(123456789, 123456789);
    expect(result).to.equal(246913578);
  });

  it('Sending 17 and more digit numbers, should return correct number', async () => {
    const result = await calc.add(1234567890123456789, 1);
    expect(result).to.equal(1234567890123456789);
  });
});
