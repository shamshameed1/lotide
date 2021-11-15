function eqArrays (arr1, arr2) {
    if (arr1 === arr2) {
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

  const without = function(source, itemsToRemove) {
    let newArray = [];
    for (let index = 0; index < source.length; index++) {
      if (!itemsToRemove.includes(source[index])) {
        newArray.push(source[index]);
      } 
    }
    return newArray;
  };
  
  //TEST 1 - ensure removal of items that are the same
  console.log(without([1, 2, 3], [1])); // => [2, 3]
  console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// touch base later and retest yourself
