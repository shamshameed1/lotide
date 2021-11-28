const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3] === [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it("returns false for ['3', '4', '5'], ['5', '4', '3'] ", () => {
    assert.strictEqual(assertArraysEqual(["3", "4", "5"], ["5", "4", "3"])); 
  });
});





// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertArraysEqual(eqArrays(["3", "4", "5"], ["5", "4", "3"]), false);