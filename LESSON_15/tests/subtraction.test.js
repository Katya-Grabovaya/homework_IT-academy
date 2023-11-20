const Calculator = require('./calculator');
const calculate = new Calculator;

describe(`Tests for mathematical operation of subtraction`, function () {

    test ('Should return correct difference of integers', async () => {
        const difference = await calculate.subtraction(20,10);
        await expect (difference).toEqual(10);
    })

    test(`Should return correct difference of decimal numbers`, async () => {
        const difference = await calculate.subtraction(5.5,2.2);
        await expect(difference).toEqual(3.3);
    })

    test(`Should return correct difference of negative numbers`, async () => {
        const difference = await calculate.subtraction(-14,-7);
        await expect(difference).toEqual(-7);
    })

    test(`Should return correct difference of negative number and positive number`, async () => {
        const difference = await calculate.subtraction(-14,7);
        await expect(difference).toEqual(-21);
    })

    test(`should return error without parameter`, async () => {
        const result = await calculate.subtraction();
        await expect(result).toEqual(NaN);
    })
    
    test('Should report an error when using a string instead of a number', async () => {
        const result = await calculate.subtraction('string', 5);
        await expect(result).toEqual(NaN)
      })

  test.each([
       [3,2,1],
       [-3,-4,1],
       [5.5,2.2,3.3],
       [-5,6,-11],
    ])(`%i - %i equal %i`, async (firstNumber, secondNumber, result) => {
        const difference = await calculate.subtraction(firstNumber, secondNumber)
        await expect(difference).toEqual(result)
    })

})