# A Closer Look at Functions

## Table of contents
* [Default Parameters](#default-parameters)
* [How Passing Arguments Works: Value vs. Reference](#how-passing-arguments-works--value-vs-reference)
* [First-Class and Higher-Order Functions](#first-class-and-higher-order-functions)
* [Functions Accepting Callback Functions](#functions-accepting-callback-functions)
* [Functions Returning Functions](#functions-returning-functions)
* [The call and apply Methods](#the-call-and-apply-methods)
* [The bind method](#the-bind-method)
* [Immediately Invoked Function Expressions](#immediately-invoked-function-expressions--iife-)
* [Closures](#closures)

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

## The call and apply Methods
* Manually set the `this` keyword for any function call.
* The `call()` method calls the function with a given `this` value and `arguments` provided individually.  
* The `apply()` method calls the specified function with a given `this` value, and `arguments` provided as an array.
```
const airline = {
    name: 'air',
    code: 'AI',
    bookings: [],
    book(flightNum, passengerName) {
        console.log(`${passengerName} booked a seat on ${this.name} flight ${this.code}${flightNum}`);
        this.bookings.push({flight: `${this.code}${flightNum}`, name })
    }
}

airline.book(123, 'me'); // me booked a seat on air flight AI123

const airline2 = {
    name: 'air2',
    code: 'AI2',
    bookings: [],
}

const book = airline.book;
book(234, 'you'); // Gives TypeError Cannot read property name of undefined (in strict mode). The this keyword becomes undefined

// Call method
book.call(airline2, 234, 'you'); // you booked a seat on air2 flight AI2234

// Apply method
book.apply(airline2, [234, 'you']); // you booked a seat on air2 flight AI2234
```

## The bind method
* Manually set the `this` keyword for any function call
* Does not immediately call the function, instead it returns a new function were the `this` keyword is set to the value we pass into bind
* The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of `arguments` preceding any provided when the new function is called.
```
const airline = {
    name: 'air',
    code: 'AI',
    bookings: [],
    book(flightNum, passengerName) {
        console.log(`${passengerName} booked a seat on ${this.name} flight ${this.code}${flightNum}`);
        this.bookings.push({flight: `${this.code}${flightNum}`, name })
    }
}

const airline2 = {
    name: 'air2',
    code: 'AI2',
    bookings: [],
}

// The this keyword will always be set to airline2
const bookAir2 = airline.book.bind(airline2);

bookAir2(456, 'you'); // you booked a seat on air2 flight AI2456

// Preset the flightNum to 456. This way you don't need to pass the flightNum all the time. You can only pass the passengerName
const bookAir2456 = airline.book.bind(airline2, 456);
bookAir2456('me'); // me booked a seat on air2 flight AI2456
```

## Immediately Invoked Function Expressions (IIFE)
* A JavaScript function that runs as soon as it is defined.
* Avoid polluting the global namespace
* Execute an async function
```
(functoin() {
    console.log('This will never run again');
})();

(() => console.log('This will never run again'))(); 
```

## Closures
* We do not have to manually create closures, this is a JavaScript feature that happens automatically. We can't even access closed-over variables explicitly. A closure is NOT a tangible JavaScript object.
* Makes a function remember all the variables that existed at the function's birthplace (e.g. passengerCount)
* Any function always has access to the variable environment of the execution context in which the function was created. Even when that execution context is gone.
  (booker was created in the execution context of secureBooking() which was popped of the stack. 
  The booker function will get access to the variable environment of the secureBooking which contains the passengerCount variable)
* A Closure: Variable environment attached to the function, exactly as it was at the time and place the function was created.
* Priority over scope chain
```
const secureBooking = function() {
    let passengerCount = 0;
    
    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers
```
* A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone
* A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
* A closure makes sure that a function doesn't loose connect to variables that existed at the function's brith place
* A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.