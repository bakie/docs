# Working with Arrays

## Table of contents
* [Simple Array Methods](#simple-array-methods)
* [Looping Arrays: forEach](#looping-arrays--foreach)
* [forEach With Maps and Sets](#foreach-with-maps-and-sets)

## Simple Array Methods
* Arrays are objects and get access to special build-in methods
* [Slice method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
* [Splice method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
* [Reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
* [Concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
* [Join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
* [At](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
* [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
```
// Slice method - creates shallow copy
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); // [ 'c', 'd', 'e' ]
console.log(arr.slice(2, 4)); // [ 'c', 'd' ]
console.log(arr.slice(-2)); // [ 'd', 'e' ]
console.log(arr.slice(1, -1)); // [ 'b', 'c' ]

// Splice method - mutates the original array
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.splice(2)); // [ 'c', 'd', 'e' ]
console.log(arr); // [ 'a', 'b' ]
console.log(arr.splice(2, 0, 'c')); // []
console.log(arr); // [ 'a', 'b', 'c' ]
console.log(arr.splice(2, 1, 'd')); // [ 'c' ]
console.log(arr); // [ 'a', 'b', 'd' ]

// Reverse - mutates the original array
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.reverse()); // [ 'e', 'd', 'c', 'b', 'a' ]
console.log(arr); // [ 'e', 'd', 'c', 'b', 'a' ]

// Concat - does not change the existing arrays
let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e'];
console.log(arr1.concat(arr2)); // ['a', 'b', 'c', 'd', 'e']
console.log(arr1); // ['a', 'b', 'c']
console.log(arr2); // ['d', 'e']

// Join
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.join()); // a,b,c,d,e
console.log(arr.join('')); // abcde
console.log(arr.join('-')); // a-b-c-d-e

// At
let arr = ['a', 'b', 'c']
console.log(arr[0]); // a
console.log(arr.at(0)); // a
console.log(arr.at(-2)); // b
```

## Looping Arrays: forEach
* forEach passes the current element, the index and the entire array we are looping to the callback function.
* continue and break statements do not work in forEach statement.
```
const numbers = [200, 450, -400, 3000, -650, -130, 70, 1300];

// For loop
for (const number in numbers) {
    console.log(number);
}

// forEach loop
numbers.forEach(function(number) {
    console.log(number); 
});
// 200
// 450
// -400
// ...
numbers.forEach(function(number, index, array) {
    console.log(number); // 200
    console.log(index); // 0
    console.log(array); // [200, 450, -400, 3000, -650, -130, 70, 1300]
}
numbers.forEach(number => console.log(number));
```

## forEach With Maps and Sets
```
const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
])

currencies.forEach(function(value, key, map) {
    console.log(value);
    console.log(key);
    console.log(map);
}
// United States Dollar
// USD
// { USD → "United States Dollar", EUR → "Euro", GBP → "Pound Sterling" }
// ...

const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'USD', 'EUR']);
currenciesUnique.forEach(function(value, key, set) {
    console.log(value);
    console.log(key);
    console.log(set);
});
// USD
// USD
// [ "USD", "GBP", "EUR" ]
```