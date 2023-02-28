# A Closer Look at Functions

## Table of contents
* [Default Parameters](#default-parameters)
* [How Passing Arguments Works: Value vs. Reference](#how-passing-arguments-works--value-vs-reference)
* [First-Class and Higher-Order Functions](#first-class-and-higher-order-functions)
* [Functions Accepting Callback Functions](#functions-accepting-callback-functions)
* [Functions Returning Functions](#functions-returning-functions)

## Default Parameters
```
// ES5
const create = function(param1, param2, param3) {
    param1 = param1 || 'default1'
    param2 = param2 || 'default2'
    param2 = param3 || 'default3'
    console.log(param1, param2, param3);
}
create('first'); // first default2 default3
create('first', 'second', 'third'); // first second third

// ES6
const create = function(param1 = 'default1', param2 = 'default3', param3 = 'default3') {
    console.log(param1, param2, param3);
}
create('first'); // first default2 default3
create('first', 'second', 'third'); // first second third
create('first', undefined, 'third'); // first default2 third
```

## How Passing Arguments Works: Value vs. Reference
```
const flight = 'flight1';
const me = {
    name: 'me',
    passport: '123456789',
};

const check = function(flightNum, passenger) {
    flightNum = 'flight2';
    passenger.name = 'Mr. ' + passenger.name;
}

check(flight, me);
console.log(flight); // flight1
console.log(me); // { name: "Mr. me", passport: "123456789" }
```
flight is a primitive type, as we pass the value, the flightNum is a copy of the original value.  
When we pass a reference type (the me object) to a function, then the reference to the object in the memory heap is copied.  

Note: JavaScript does not have passing by reference. Only passing by value!  
For objects we pass a reference, but that reference is still a value. It contains a memory address.  
We pass a reference to the function, but we do not pass by reference.  

## First-Class and Higher-Order Functions
First-Class functions:
* JavaScript treats functions as first-class citizens
* This means that functions are simply values
* Functions are just another "type" of object
* Store functions in variables of properties
* Pass functions as arguments to other functions
* Return functions from functions
* Call methods on functions

Higher-Order functions:
* A function that receives another function as an argument, that returns a new function, or both
* This is only possible because of first-class functions

## Functions Accepting Callback Functions
```
const upperFirstWord = function(str) {
    const [first, ...otherWords] = str.split(' ');
    return [first.toUpperCase(), ...otherWords].join(' ');
}

// Higher-Order function
const transformer = function(str, fn) {
    console.log(`Original string; ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);

// Original string: JavaScript is the best!
// Transformed string: JAVASCRIPT is the best!
// Transformed by: upperFirstWord
```

## Functions Returning Functions
```
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('me'); // Hey me
greeterHey('you'); // Hey you

greet('Hello')('me'); // Hello me
```