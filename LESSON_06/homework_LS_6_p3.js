function numberSplit (number, count) {
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
  let numberOriginal = 24;
  let partsOfNumber = 4;
  let result = numberSplit (numberOriginal, partsOfNumber);
  console.log (result);
  
  function numberSplit2 (number, count) {
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
  let numberOriginal2 = 14;
  let partsOfNumber2 = 2;
  let result2 = numberSplit2 (numberOriginal2, partsOfNumber2);
  console.log (result2);