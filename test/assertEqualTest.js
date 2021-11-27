const assertEqual = require('../assertEqual');

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

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(5, -3);
assertEqual("cats", "cats");

// random comment

module.exports = assertEqual;