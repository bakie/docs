# A Closer Look at Functions

## Table of contents
* [Default Parameters](#default-parameters)
* [How Passing Arguments Works: Value vs. Reference](#how-passing-arguments-works--value-vs-reference)

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
