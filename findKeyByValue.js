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

const findKeyByValue = function (object, str) {
    for (const key in object) {
        if (object[key] === str) {
            return key;
        }
    }

    return undefined;
}
const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    comedy: "Friends"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "comedy");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Friends"), "comedy");