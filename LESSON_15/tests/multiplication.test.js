const Calculator = require('./calculator');
const calculate = new Calculator;

describe(`Tests for mathematical operation of multiplication`, function () {
test(`Should return correct composition of integers`, async () => {
    const composition = await calculate.multiply(4,5);
    await expect(composition).toEqual(20);
})

test(`Should return correct composition of decimal number`, async () => {
    const composition = await calculate.multiply(2.5,3.4);
    await expect(composition).toEqual(8.5);
})

test(`Should return correct composition of negative numbers`, async () => {
    const composition = await calculate.multiply(-2,-7);
    await expect(composition).toEqual(14);
})

test(`Should return correct composition of negative number and positive number`, async () => {
    const composition = await calculate.multiply(-2,7);
    await expect(composition).toEqual(-14);
})

test(`should return 0 when multiplied by 0`, async () => {
    const result = await calculate.multiply(5,0);
    await expect(result).toEqual(0);
})

test(`should return 1 without parameter`, async () => {
    const result = await calculate.multiply();
    await expect(result).toEqual(1);
})

test('Should return an error when using a string instead of a number', async () => {
    const result = await calculate.multiply('string', 5);
    await expect(result).toEqual(NaN)
})

test.each([
    [2,4,8],
    [-3,9,-27],
    [2.5,3.4,8.5],
    [-6,-5,30],
])(`%i * %i equal %i`, async (firstNumber,secondNumber, result) => {
    const composition = await calculate.multiply(firstNumber,secondNumber)
    await expect(composition).toEqual(result)
})

})