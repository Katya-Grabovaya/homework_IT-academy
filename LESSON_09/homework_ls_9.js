  function checkSum (str) {
    let sum1 = parseInt (str[0]) + parseInt(str[1]) + parseInt(str[2]);
    let sum2 = parseInt (str[3]) + parseInt(str[4]) + parseInt(str[5]);
    if (sum1 === sum2) {
        console.log ('Yes')
    } else {
        console.log ('No')
    }
  }
  checkSum ('125233')



  function divideByTwoToFifty (number) {
    let num = 0
    while (number >= 50) {
        number /= 2;
        num++;
    };
    return [number, num]
    
  }
  console.log (divideByTwoToFifty (560))



  function findArithmetic (arr){
    let sum = 0;
    arr.forEach(array => {
        sum += array;        
    });
    let avg = sum / arr.length;
    return avg
  }
  const arr = [12,15,20,25,59,79]
  let result = findArithmetic (arr)
  console.log (result)



  function findArithmetic1 (array) {
    if (array.length < 1) {
      return;
    }
    return array.reduce((prev, current) => prev + current) / array.length;
}
  const array = [12,15,20,25,59,79];
  console.log (findArithmetic1 (array));
  

  
  function insertInto (arr, index, ...item) {
    arr.splice (index, 0, ...item);
    return arr;
  }
  console.log (insertInto([1,2,3,4,5], 3, 'a','b','c'));



  function insertDataMultiple(arr1, arr2, indices) {
    indices.sort((a, b) => a - b);
    let offset = 0;
  
    for (let i = 0; i < indices.length; i++) {
      let index = indices[i] + offset;
      arr1.splice(index, 0, arr2[i]);
      offset++;
    }
  
    return arr1;
  }
  
  console.log(insertDataMultiple([5,6,7,8,9], ['a', 'b', 'c', 'e'], [1, 4, 6, 7])); 



  function sortArr(arr) {
    arr.sort((a, b) => a - b);
    return arr;
  }
  
  console.log(sortArr([5,7,12,3,18,9,45])); 
    