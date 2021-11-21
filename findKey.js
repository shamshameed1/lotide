const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`😄😄 Assertion Passed: "${actual}" === "${expected}"`);
        
    }

    else {
        console.log(`🥲 🥲 Assertion Failed: "${actual}" !== "${expected}"`);
        
    }

};

const findKey = function(object, callback) {
    for (let key in object) {
      //console.log(key);
      console.log(object[key]);
      console.log(callback(object[key]));
      if (callback(object[key])) {
        return key;
      } 
    }
    return undefined;
  }
  
//   const callback = function(objKey) {
//     let cbResult;
//     if (objKey) {
//       cbResult = true;
//     } else {
//       cbResult = false
//     }
//     return cbResult;
//   }
  
  
  console.log(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2)); // => "noma"

  console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5)); // => undefined

//////just a comment