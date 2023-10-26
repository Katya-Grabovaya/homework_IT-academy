let promiseFulfilledFirst = (num, min, max) => { return new Promise ((resolve => {
    setTimeout(() => resolve(num),
Math.floor(Math.random() * (max - min + 1)) + min);
})
)
}

      Promise.race([
        promiseFulfilledFirst(1,1000,5000),
        promiseFulfilledFirst(2,1000,5000),
        promiseFulfilledFirst(3,1000,5000),
      ])
        .then(result => {
          console.log('Fulfilled:', result);
        })
        .catch(error => {
          console.log('Rejected:', error);
        });



function getNum (timeout, min, max)  {
    return new Promise(resolve => {
        setTimeout (() => { 
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        resolve(randomNumber);
    }, timeout);
});
}

let squareNum = async () => {
    let num = await getNum(3000, 1, 5);
    let result = num ** 2;
    console.log("The square of the number:", result);
}
squareNum()


async function getSum () {
    let num1 = await getNum (3000,1,5);
    let num2 = await getNum (5000,6,10);
    let res = num1 + num2;
    console.log ("Sum of numbers:", res);
}
getSum()

