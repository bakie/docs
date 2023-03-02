# Working with Arrays

## Table of contents
* [Simple Array Methods](#simple-array-methods)

## Simple Array Methods
* Arrays are objects and get access to special build-in methods
* [Slice method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
* [Splice method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
* [Reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
* [Concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
* [Join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
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
```
