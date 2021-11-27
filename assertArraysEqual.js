const eqArrays = require('./eqArrays');

// function eqArrays (ar1, ar2) {
//     if (ar1 === ar2) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

const assertArraysEqual = function(actual, expected) {
  let arr1 = [];
  let arr2 = [];
  actual = eqArrays(arr1, arr2);
  
  if (actual === eqArrays(arr1, arr2)) {
    console.log(`😄😄😄 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== eqArrays(arr1, arr2)) {
    console.log(`🥲🥲🥲 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//TEST
// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//assertArraysEqual(eqArrays(["3", "4", "5"], ["5", "4", "3"]), false);

module.exports = assertArraysEqual;