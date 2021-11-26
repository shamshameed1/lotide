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

  const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect; // <= add this line
    if (eqObjects(actual, expected) === true) {
        console.log(`😄😄😄 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
      } else {
        console.log(`🥲 🥲 🥲 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      }
    
  };

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false