const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// function eqArrays (arr1, arr2) {
//     if (arr1 === arr2) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const assertArraysEqual = function(actual, expected) {
//     let arr1 = [];
//     let arr2 = [];
//     actual = eqArrays(arr1, arr2);
    
//     if (actual === eqArrays(arr1, arr2)) {
//       console.log(`😄😄😄 Assertion Passed: ${actual} === ${expected}`);
//     } else if (actual !== eqArrays(arr1, arr2)) {
//       console.log(`🥲🥲🥲 Assertion Failed: ${actual} !== ${expected}`);
//     }
//   };

  const middle = function(array) {
    
    let midArr = [];
    let midNum = Math.floor(array.length/2);
  
    
    
    for (let mid = 0; mid < (array.length - (array.length - 1)); mid++) {
      
      if (array.length > 2 && array.length % 2 === 0 ) {
        midArr.splice(0, 0, array[midNum - 1], array[midNum]); 
    
      } else if (array.length > 2 && array.length % 2 !== 0) {
         midArr.push(array[midNum]); 
      } else if (array.length <= 2 ) {
        return midArr;
      }
    }
    return midArr;
    
  }

  // console.log(middle([1])); // []
  // console.log(middle([1, 2])); // []
  // console.log(middle([1, 2, 3])); // => [2]
  // console.log(middle([1, 2, 3, 4, 5])); // => [3]
  // console.log(middle([1, 2, 3, 4])); // => [2, 3]
  // console.log(middle([1, 2, 3, 4, 5, 6])); // [3, 4]

  module.exports = middle;


