function reverseArray (array3) {
    const newArr = []
    for (let i = array3.length - 1; i >= 0; i--) {
        newArr.push(array3[i])
    }
return newArr;
}
let array3 = [16,99,88,6,3,];
const newArr = reverseArray (array3);
console.log (newArr);



function findMaxValue (arr) {
    const maxValue = Math.max(...arr);
    return maxValue;
}
let arr = [2,98,34,113];
const maxValue = findMaxValue (arr);
console.log (maxValue);



function fibonacciArray(N, M) {
    let fibArray = [0, 1]; 
    for (var i = 2; i < N + M; i++) {
      if (fibArray.length === M) {
        break;
      }
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray.slice(N); 
  }
  
  console.log(fibonacciArray(7, 15)); 
  



function compareNumbers (number1, number2) {

    let matchValue = 0;
    let completelyMatch = 0;
    number1 = number1.toString();
    number2 = number2.toString();
    for (let i=0; i < number1.length; i++) {
        if(number1[i] === number2[i]) {
            matchValue++;
        } else if(number2.includes(number1[i])) {
            completelyMatch++;
        }
    }return [matchValue, completelyMatch];
} 
const result = compareNumbers (8167, 3186);
console.log (result);
  


function sortNumbersIncrease (array) {
    return array.sort ((a,b) => a-b);
}
function sortNumberDecrease (array) {
    return array.sort ((a,b) => b-a);
}
const array = [2,5,78,9,34,1];
const numderIncrease = sortNumbersIncrease (array);
console.log (numderIncrease);

const numberDecrease = sortNumberDecrease(array);
console.log (numberDecrease);



function removeDuplicates (Array1) {
    return Array1.filter ((value, index, self) =>
    index === self.indexOf((value)));
}
const Array1 = ['a','a','b','c','b','a'];
const arrayWithoutDuplicates =  removeDuplicates (Array1);
console.log (arrayWithoutDuplicates);


  