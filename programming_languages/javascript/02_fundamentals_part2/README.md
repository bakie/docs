# JavaScript Fundamentals - Part 2

## Table of contents
* [Strict Mode](#strict-mode)
* [Functions](#functions)
* [Function Declarations vs. Expressions](#function-declarations-vs-expressions)
* [Arrow Functions](#arrow-functions)
* [Functions Calling Other Functions](#functions-calling-other-functions)
* [Reviewing Functions](#reviewing-functions)

## Strict Mode
A way to opt in to a restricted variant of JavaScript. Strict mode forbids us to do certain things and creates visible errors in the development console.
This has to be the first line in the js file.
```
'use strict';
```

## Functions
A function is a piece of code that we can reuses over and over again in our code.
```
function logger() {
    console.log('This is a function named logger');
}

// calling, running or invoking the function
logger();

function funcWithParameters(first, second) {
    console.log(first);
    console.log(second);
}

funcWithParameters('first param', 'second param');
```
parameter is the placeholder in the function (birthYear) and the argument (1990) is the actual value to fill in the placeholder.

## Function Declarations vs. Expressions
Function decleration:
```
function calcAge(birthYear) {
    return 2023 - birthYear;
}

console.log(calcAge(1970));
```

Function Expression:
```
const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

console.log(calcAge(1970));
```

Function declerations can be called before they are defined, but function expressions can't be called before being initialized.

## Arrow Functions
Introduced in ES6. Arrow functions do not get the this keyword!
```
const calcAge = birthYear => 2023 - birthYear;
console.log(calcAge(1970));

const yearsUntilRetirement = birthYear => {
    const age = 2023 - birthYear;
    const retirement = 67 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1970));

const multipleParameters = (first, second) => `${first} and ${second}`;
console.log(multipleParameters('my', 'something'));
```

## Functions Calling Other Functions
```
function callMeFromOtherFunction(text) {
    return `you called me with text ${text}`;
}

function callingOtherFunction(text) {
    const returnedText = callMeFromOtherFunction(text);

    return returnedText;
}

console.log(callingOtherFunction('call the other function'));
```

## Reviewing Functions
Function declaration: Function that can be used before it's declared.  
Function expression: Essentially a function value stored in a variable.  
Arrow function: Great for a quick one-line function.  
Three different ways of writing functions, but they all work in a similar way: receive input data, transform data, and then ourput data.

Anatomy of a function:  
![Anatomy_of_a_function](anatomy_of_a_function.png)

