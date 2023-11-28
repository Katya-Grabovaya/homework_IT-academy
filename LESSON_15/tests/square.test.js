const Calculator = require('./calculator');
const calculate = new Calculator;

describe(`Tests for mathematical operation of squre`, function () {

    test ('Should return correct square of integer', async () => {
        const square = await calculate.square(5);
        await expect (square).toEqual(25);
    })

    test(`Should return correct square of decimal number`, async () => {
        const square = await calculate.square(2.1);
        await expect(square).toEqual(4.41);
    })

    test(`Should return correct square of negative number`, async () => {
        const square = await calculate.square(-2);
        await expect(square).toEqual(4);
    })

    test(`should return an error without parameter`, async () => {
        const result = await calculate.square();
        await expect(result).toEqual(NaN);
    })

    test('Should return an error when using a string instead of a number', async () => {
        const result = await calculate.square('string');
        await expect(result).toEqual(NaN)
      });

      test.each([
        [2,4],
        [-3,9],
        [2.1,4.41]
    ])(`%i * %i equal %i`, async (firstNumber, result) => {
        const square = await calculate.square(firstNumber)
        await expect(square).toEqual(result)
    })

})