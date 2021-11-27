const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns false for 'Lighthouse Labs' !== 'Bootcamp'", () => {
    assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

  it("returns true for 1 === 1", () => {
    assert.isTrue(assertEqual(1, 1)); 
  });

  it("returns false for 5 !== -3", () => {
    assert.isFalse(assertEqual(5, -3)); 
  });

  it("returns true for cats === cats", () => {
    assert.isTrue(assertEqual("cats", "cats")); 
  });
});



// const assertEqual = function(actual, expected) {
//     if (actual === expected) {
//         console.log(`😄😄 Assertion Passed: "${actual}" === "${expected}"`);
//         return true;
//     }

//     else {
//         console.log(`🥲 🥲 Assertion Failed: "${actual}" !== "${expected}"`);
//         return false;
//     }

// };

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(5, -3);
// assertEqual("cats", "cats");

// random comment

module.exports = assertEqual;