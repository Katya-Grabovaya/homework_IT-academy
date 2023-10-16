function reverseArray1 (array3) {
    const newArr = []
    for (let i = array3.length - 1; i >= 0; i--) {
        newArr.push(array3[i])
    }
return newArr;
}
let array3 = [16,99,88,6,3,];
const newArr = reverseArray1 (array3);
console.log (newArr);



function findMaxValue (arr) {
    const obj = Object.assign ({}, ...arr.map(item => ({[item]: true})));
    const maxValue = Math.max(...Object.keys(obj));
    return maxValue;
}
let arr = [2,98,34,113];
const maxValue = findMaxValue (arr);
console.log (maxValue);



function getFibonachi (number) {
    return number <= 1 ? number : getFibonachi (number - 1) + getFibonachi(number - 2)
};
console.log (getFibonachi(10));



function compareNumbers (number1, number2) {

    let matchValue = 0;
    let completlyMatch = 0;
    const arr1 = Array.from (String(number1), Number);
    const arr2 = Array.from (String(number2), Number);
    for (let i=0; i < arr1.length; i++) {
        if(arr1[i] === arr2[i]) {
            matchValue++;
        } else if(arr2.includes(arr1[i])) {
            completlyMatch++;
        }
    }return [matchValue, completlyMatch];
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


  