# Working with Arrays

## Table of contents
* [Converting and Checking Numbers](#converting-and-checking-numbers)

## Converting and Checking Numbers
* [MDN Number docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
* in JavaScript, all numbers are represented internally as floating point numbers. Always as decimals.
* only one data type for all numbers
* numbers are represented internally in a 64 base2 format, meaning numbers are always stored in a binary format (composed of 0's and 1's)
```
console.log(23 === 23.0); // true

// Base 10 - 0 to 9
// Binary base 2 - 0 and 1
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Conversion
console.log(Number('23')); // 23
// When JavaScript sees the + operator it will to type coercion, so it will convert all the operatns to numbers
console.log(+'23'); // 23

// Parsing
console.log(Number.parseInt('30px')); // 30
console.log(Number.parseInt('2.5rem')); // 2
console.log(Number.parseFloat('2.5rem')); // 2.5

// Checking if value is a number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20x')); // false
console.log(Number.isFinite(23 / 0)); // false. 23 / 0 gives the Infinity value
```