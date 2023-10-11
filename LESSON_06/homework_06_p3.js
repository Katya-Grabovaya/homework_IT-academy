function NumberSplit (number, count) {
  let result = [];
  for (let i = 1; i <= count; i++) {
    if (i === count) {
      result.push (number);
    } else {
      let random = Math.floor(Math.random()*(number - (count - i)) + 1);
      result.push (random);
      number = number - random;
    }
  }
  return result;
}
let NumberOriginal = 24;
let PartsOfNumber = 4;
let result = NumberSplit (NumberOriginal, PartsOfNumber);
console.log (result);

function NumberSplit2 (number, count) {
  let result = [];
  let sum = 0;
  for (i=1; i <= count-1; i++) {
    let random = parseFloat ((Math.random()*(number - (count -1))).toFixed(2));
    result.push (random);
    sum = sum + random;
  }
  result.push (parseFloat((number - sum).toFixed(2)));
  return result;
}
let NumberOriginal2 = 14;
let PartsOfNumber2 = 2;
let result2 = NumberSplit2 (NumberOriginal2, PartsOfNumber2);
console.log (result2);
