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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(5, -3);

function eqArrays (arr1, arr2) {
    if (arr1 === arr2) {
        return true;
    }
    else {
        return false;
    }
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["3", "2", "1"]), false);