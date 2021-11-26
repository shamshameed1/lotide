function eqArrays (ar1, ar2) {
  if (ar1.length !== ar2.length) {
    return false;
  }
  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] !== ar2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  let arr1 = [];
  let arr2 = [];
  actual = eqArrays(arr1, arr2);
  

  if (actual === eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}



const map = function(array, callback) {
    const results = [];
    for(let item of array) {
        results.push(callback(item));
    }
    return results;
  }


 
  const words = ["ground", "control", "to", "major", "tom"];
 

assertArraysEqual(map(words, word => word[0]), ["g","c","t","m","t"]);
assertArraysEqual(map([1, 2, 3], num => num[0]), [1, 2, 3]);
assertArraysEqual(map(["cat", "dog", "squirrel"], word => word[0], ["d", "k", "c"]));



