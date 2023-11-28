class Calculator {
    constructor() {
        this.theArgs = []
    };

    async add(...theArgs) {
        let result = 0;
        for (let i = 0; i < theArgs.length; i++) {
          result += theArgs[i];
        }
  
        return result;
    };

    async multiply(...theArgs) {
        let result = 1;
        for (let i = 0; i < theArgs.length; i++) {
          result = result *= theArgs[i];
        }
        return result;
    };
    
    async subtraction(reduced, subtrahend) {
        return reduced - subtrahend;
    }

    async divide(dividend, divider) {
        return dividend / divider;
    }

    async square(number) {
        return number * number;
    }

  };

  
  module.exports = Calculator;