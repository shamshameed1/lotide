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
  
  if (actual === eqArrays(arr1, arr2)) {
    console.log(`😄😄😄 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== eqArrays(arr1, arr2)) {
    console.log(`🥲🥲🥲 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
    const results = [];
    for(let item of array) {
        results.push(callback(item));
    }
    return results;
  }

  const map2 = function(array, callback) {
    const results2 = [];
    for(let item of array) {
        results2.push(callback(item));
    }
    return results2;
  }
  const firstLetter = function(item) {
    item = [];
    for (let letter of item) {
      return letter[0];
    }
  }

const getLength = function(item) {
    return item.length;
  }

  const firstNum = function(numArr) {
    return numArr[0];
  }
  
//   const words = ["ground", "control", "to", "major", "tom"];
  const nums = [1447, 12357, 7532, 6899, 3457924];
// const results4 = assertArraysEqual(map(words.length));
// console.log(results4);

// console.log(assertArraysEqual(map(words, firstLetter)));
// console.log(assertArraysEqual(map(words, getLength)));
// console.log(assertArraysEqual(map2(nums, firstNum)));
console.log(assertArraysEqual(map(words, getLength)), [6, 7, 2, 5, 3]);
console.log(assertArraysEqual(map(nums, firstNum)), [1, 1, 7, 6, 3]);
console.log(assertArraysEqual(map(words, firstLetter)),['g','c','t','m','t']);
