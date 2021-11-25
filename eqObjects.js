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

const eqObjects = function(object1, object2) {
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false