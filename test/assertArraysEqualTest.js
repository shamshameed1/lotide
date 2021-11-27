
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays(["3", "4", "5"], ["5", "4", "3"]), false);