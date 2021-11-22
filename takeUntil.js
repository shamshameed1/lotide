
const takeUntil = function(array, callback) {
    const results = [];
  
    for (let key in array) {
      if (!callback(array[key])) {
        results.push(array[key]);
      } 
      else {
        break;
      } 
    }
  
    return results;
  };
  
  function eqArrays (ar1, ar2) {
    if (ar1 === ar2) {
        return true;
    }
    else {
        return false;
    }
}

const assertArraysEqual = function(actual, expected) {
  let arr1 = [];
  let arr2 = [];
  actual = eqArrays(arr1, arr2);
  
 
  const results1 = takeUntil(actual, x => x === [3, 4, 5]);
  console.log(results1); 
};  
    
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3], [3, 4, 5]), true);




