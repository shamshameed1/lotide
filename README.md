# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shamshameed1/lotide`

**Require it:**

`const _ = require('@shamshameed1/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => 1`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: This function takes in 2 values and returns true if they are equal and false otherwise.
* `head(arr)`: This function takes in an array and returns the first element in the array.
* `eqArrays(arr1, arr2)`: This function takes in 2 arrays and returns true if the arrays are equal and false otherwise.
* `assertArraysEqual(actual, expected)`: This function takes in 2 arrays and returns true if they are equal and false otherwise.
* `without(source, itemsToRemove)`: This function takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
* `middle(array)`: This function takes in an array and returns middle most element of the array.
* `countOnly(allItems, itemsToCount)`: This function takes in a collection of items and returns a specific subset of those items.
* `findKeyByValue(object, str)`: This function takes in an object and a value and returns the first key that corresponds to that value.
* `eqObjects(object1, object2)`: This function takes in 2 objects and return true if they are equal and false otherwise.
* `assertObjectsEqual(actual, expected)`: This function takes in 2 objects and returns true if they are equal and false otherwise.
* `map(array, callback)`: This function takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
* `takeUntil(array, callback)`: This function takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.)`: This function
* `findKey(object, callback)`: This function takes in an object and callback and returns the first key that meets the criteria specified in callback.
