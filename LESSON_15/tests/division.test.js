const Calculator = require('./calculator');
const calculate = new Calculator;

describe(`Tests for mathematical operation of division`, function () {

    test ('Should return correct quotient of integers', async () => {
        const quotient = await calculate.divide(35,5);
        await expect (quotient).toEqual(7);
    })

    test(`Should return correct quotient of decimal numbers`, async () => {
        const quotient = await calculate.divide(6.6,3.3);
        await expect(quotient).toEqual(2);
    })

    test(`Should return correct quotient of negative numbers`, async () => {
        const quotient = await calculate.divide(-14,-7);
        await expect(quotient).toEqual(2);
    })

    test(`Should return correct quotient of negative number and positive number`, async () => {
        const quotient = await calculate.divide(-14,7);
        await expect(quotient).toEqual(-2);
    })

    test ('Should return an error when dividing by zero', async () => {
        const result = await calculate.divide(35,0);
        await expect (result).toEqual(Infinity);
    })

    test(`Should return an error without parameter`, async () => {
        const result = await calculate.divide();
        await expect(result).toEqual(NaN);
    })
    
    test('Should return an error when using a string instead of a number', async () => {
        const result = await calculate.divide('string', 6);
        await expect(result).toEqual(NaN)
    })


    test.each([
        [6,2,3],
        [-14,2,-7],
        [6.6,3.3,2],
        [-21,-3,7],
    ])(`%i / %i equal %i`, async (firstNumber, secondNumber, result) => {
        const quotient = await calculate.divide(firstNumber, secondNumber)
        await expect(quotient).toEqual(result)
    })

})