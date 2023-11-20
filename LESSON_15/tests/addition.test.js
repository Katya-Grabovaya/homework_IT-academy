const Calculator = require('./calculator');
const calculate = new Calculator;

describe(`Tests for mathematical addition operation`, function () {

    test(`Should return correct sum of integers`, async () => {
        const sum = await calculate.add(2,3);
        await expect(sum).toEqual(5);
    })

    test(`Should return correct sum of decimal numbers`, async () => {
        const sum = await calculate.add(2.8,3.1);
        await expect(sum).toEqual(5.9);
    })

    test(`Should return correct sum of negative numbers`, async () => {
        const sum = await calculate.add(-2,-3);
        await expect(sum).toEqual(-5);
    })

    test(`Should return correct sum of negative number and positive number`, async () => {
        const sum = await calculate.add(-2,5);
        await expect(sum).toEqual(3);
    })

    test(`Should return 0 without parameter`, async () => {
        const result = await calculate.add();
        await expect(result).toEqual(0);
    })

    test.each([
        [1,2,3],
        [-3,4,1],
        [2.8,3.1,5.9],
        [-2,-5,-7]
    ])(`%i + %i equal %i`, async (firstNumber, secondNumber, result) => {
        const sum = await calculate.add(firstNumber, secondNumber)
        await expect(sum).toEqual(result)
    })
})

