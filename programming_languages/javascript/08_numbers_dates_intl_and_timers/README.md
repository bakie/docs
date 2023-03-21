# Working with Arrays

## Table of contents
* [Converting and Checking Numbers](#converting-and-checking-numbers)
* [Math and Rounding](#math-and-rounding)
* [The Remainder Operator](#the-remainder-operator)
* [Numeric Separators](#numeric-separators)
* [Working with BigInt](#working-with-bigint)
* [Creating Dates](#creating-dates)
* [Internationalizing Dates and Numbers](#internationalizing-dates-and-numbers)

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

// Adding decimals to Number
console.log(Number(23).toFixed(2)); // 23.00
console.log((23).toFixed(2)); // 23.00
console.log(Number(23.2).toFixed(2)); // 23.20
console.log((23.235).toFixed(2)); // 23.23
```

## Math and Rounding
* [MDN Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
* Many Math methods to type coercion ('23' --> 23)

## The Remainder Operator
* [MDN Remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
* The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend
```
console.log(13 % 5); // 3
console.log(-13 % 5); // -3
console.log(4 % 2); // 0
console.log(-4 % 2); // -0
```

## Numeric Separators
* Introduced in ES2021
* To improve readability for numeric literals, underscores (_) can be used as separators
```
// 287,460,0000,000
const diamter = 287_460_000_000;
console.log(diamter); // 287460000000
```

## Working with BigInt
* [MDN BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
* Introduced in ES2020
* BigInt values represent numeric values which are too large to be represented by the number primitive
* Numbers are represented internally as 64bits. There are 64 1's or 0's to represent any given number.
  * only 53 or used to store the digits itself. The rest are for storing the position of the decimal point and the sign.
* Any integer greater than the MAX_SAFE_INTEGER can not be represented accurately
```
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(2 ** 53 - 1); // 9007199254740991
// Not safe anymore, but still correct
console.log(2 ** 53 + 1); // 9007199254740992
// Not safe anymore and incorret
console.log(2 ** 53 + 2); // 9007199254740994
console.log(2 ** 53 + 3); // 9007199254740996

const previouslyMaxSafeInteger = 9007199254740991n;
console.log(previouslyMaxSafeInteger); // 9007199254740991n
const alsoHuge = BigInt(9007199254740991); // 9007199254740991n
const hugeString = BigInt("9007199254740991"); // 9007199254740991n
```

## Creating Dates
* [MDN Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
```
// Auto correct for instance when creating a new date
console.log(new Date(2037, 10, 30)); // Date Mon Nov 30 2037 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(new Date(2037, 10, 31)); // Date Tue Dec 01 2037 00:00:00 GMT+0000 (Coordinated Universal Time)
```

## Internationalizing Dates and Numbers
* [MDN Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
```
// Dates
const now = new Date();
console.log(Intl.DateTimeFormat('en-US').format(now)); // 3/21/2023
console.log(Intl.DateTimeFormat('en-GB').format(now)); // 21/03/2023
const options = {hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'long', year: 'numeric'}
console.log(Intl.DateTimeFormat('en-US', options).format(now)); // March 21, 2023 at 12:42 PM

// Numbers
const num = 2048214.24;
console.log(Intl.NumberFormat('en-US').format(num)); // 2,048,214.24
console.log(Intl.NumberFormat('be-NL').format(num)); // 2 048 214,24
const options = { style: "currency", currency: "EUR" };
console.log(Intl.NumberFormat('be-NL', options).format(num)); // 2 048 214,24 €
```