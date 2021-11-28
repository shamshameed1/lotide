const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`😄😄 Assertion Passed: "${actual}" === "${expected}"`);
        return true;
    }

    else {
        console.log(`🥲 🥲 Assertion Failed: "${actual}" !== "${expected}"`);
        return false;
    }

};


function eqArrays (arr1, arr2) {
    if (arr1 === arr2) {
        return true;
    }
    else {
        return false;
    }
};

// In this simple scenario, two objects are equal when:

// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object


const eqObjects = function(object1, object2) {

    if (Object.keys(object1).length === Object.keys(object2).length) {
  
      for (let key in object1) {
        if (object2.hasOwnProperty(key)) {
          if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
            let isEqual = true;
  
            if (object1[key].length !== object2[key].length) {
              isEqual = false;
            }
            for (let i = 0; i < object1[key].length; i++) {
              if (object1[key][i] !== object2[key][i]) {
                return false;
              }
            }
            if (!isEqual)
              return false;
          } else {
            if (object1[key] !== object2[key]) {
              return false;
            }
          }
        } else {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  };

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false


// array checks using simple === will always return false. So in the case of cd2
// it will return false not because they contain arrays with different values
// but becasue they are 2 separate arrays no matter what. To avoid this, we implement eqArrays above.