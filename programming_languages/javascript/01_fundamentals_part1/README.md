# JavaScript Fundamentals - Part 1

## Table of contents
* [Data Types](#data-types)
* [Let, const and vars](#let-const-and-vars)
* [Basic Operators](#basic-operators)
* [Operator Precedence](#operator-precedence)
* [String and Template Literals](#strings-and-template-literals)
* [Taking Decisions: if/else Statements](#taking-decisions--if--else-statements)
* [Type Conversion and Coercion](#type-conversion-and-coercion)
* [Truthy and Falsy Values](#thruthy-and-falsy-values)
* [Equality Operators: == vs. ===](#equality-operators---vs-)
* [Logical Operators](#logical-operators)
* [Switch Statement](#switch-statement)
* [Statements and Expressions](#statements-and-expressions)
* [The Conditional (Ternary) Operator](#the-conditional-ternary-operator)

## Data Types
7 primitive types
1. Number: Floating point of numbers -> used for decimals and integers
2. String: Sequence of characters -> used for text
3. Boolean: Logical type that can only be true or false
4. Undefined: Value taken by a variable that is not yet defined `(let children)` (empty value)
5. Null: also means 'empty value'.
6. Symbol (ES2015): Value that is unique and cannot be changed
7. BigInt (ES2020): Larger integers than the Number tye can hold

JS has **dynamic** typing: We do not have to manually defined the data type of the value stored in a variable. Data types are determined automatically. Value has type, **not** the variable.

## Let, const and vars
let and const are introduced in ES6, var mainly for legacy (old way)
* let -> declare variable that can change later.
* const -> declare variable that can not be changed later.

## Basic Operators
* Arithmetic operators (+, -, *, /, %)
* Assignment operators (=) `(let x = 10 + 5;)`
* Comparison operators (>, <, >=, <=, ==, ===)
* Logical operators (AND, OR, NOT)
* ...

[MDN operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

## Operator Precedence
The order in which operators are executed.

[MDN operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table)

## Strings and Template Literals
Template literals (ES6) are used to write strings by using backticks (`), and insert variables directly into the string. Backticks can also be used for any regular strings (without variables).
Without template literals:
```
const firstName = 'john';
const job = 'programmer';
const age = 50;

const text = "I'm " + firstName + ', a ' + age + ' year old ' + job + '!';
```

With Template literals:
```
const firstName = 'john';
const job = 'programmer';
const age = 50;

const text = `I'm ${firstName}, a ${age} year old ${job}!`;
```

## Taking Decisions: if / else Statements
This is called a control structure.
```
if(...) {
    console.log(...);
} else {
    console.log(...)
}
```

## Type Conversion and Coercion
Type Conversion is when we manualy convert from one type to another.
```
const inputYear = '1990';
console.log(inputYear); // "1990"
console.log(inputYear + 10); // 199010
console.log(Number(inputYear)); //1990
console.log(Number(inputYear) + 10); //2000
console.log(Number('text')); // NaN (means an invalid number, the typeof Nan is number)
```
Can only convert to three types
* number
* string
* boolean

Type Coercion is when js automatically converts types behind the scenes for us. When an operator deals with 2 values of different types.
```
console.log('I am ' + 23 + ' years old'); // "I am 23 years old"
```
Not all operators do type coercion to string
```
console.log('23' - '10' - 3); // 10 JS converted the strings to numbers
console.log('23' + '10' + 3); // "23103 JS converted the number to string
console.log('23' * '2'); // 46. Because the multiply operator can only multiple numbers
console.log('23' / '2'); // 11.5 Same as the multiply operator
```

## Thruthy and Falsy Values
Falsy values are values that are not exaclty false, but will become false when we convert them to a boolean.
5 falsy values
* 0
* ''
* undefined
* null
* NaN
Everything else is a thruthy values are the opposite. Values that will become true when converting to a boolean.

## Equality Operators: == vs. ===
=== is the strict equality operator. It does not perform type coercion. It only returns true when both values are exactly the same.
== is the loose equality operator. It does perform type coercion.
```
'18' === 18 // false
'18' == 18  // true
```

## Logical Operators
The and (&&), or (||) & not (!) operators

## Switch Statement
```
const day = 'monday';

switch(day) {
    case 'monday':
      console.log('Day is a Monday');
      console.log('this will also be printed in the case it is a Monday');
      break;
    case 'tuesday':
      console.log('Day is a Tuesday');
      break;
    case 'wednesday':
    case 'thursday':
      console.log('Day is a Wednesday of Thursday')
      break;
    case 'friday':
      console.log('Day is a Friday');
      break;
    case 'saturday':
    case 'sunday':
      console.log('It is weekend');
      break;
    default:
      console.log('Day is not known');
}
```
The break keyword makes the code stop executing. If we do not set the break in the monday case, it will print until 'Day is a Tuesday'.

## Statements and Expressions
Expression is a piece of code that produces a value. For example `3 + 4`, `1991`, `true && false && !false`, ...

Statement is a bigger piece of code that is executed and that does not produce a value on itself. For example the if/else statement

## The Conditional (Ternary) Operator
```
const age = 23;
age >= 18 ? console.log('You are older than 18') : console.log('You are younger than 18);

const older = age >= 18 ? true : false;
```