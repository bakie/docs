# Modern JavaScript Development: Modules, Tooling and Functional

## Table of contents
* [An Overview of Modules in JavaScript](#an-overview-of-modules-in-javascript)
* [Exporting and Importing Modules in ES6](#exporting-and-importing-modules-in-es6)
* [Top Level await](#top-level-await)
* [Review: Writing Clean and Modern JavaScript](#review--writing-clean-and-modern-javascript)
* [Declarative and Functional JavaScript Principles](#declarative-and-functional-javascript-principles)

## An Overview of Modules in JavaScript
* module:
  * reusable piece of code that encapsulates implementation details
  * usually a standalone file, but it doesn't have to be
* composer software: modules are small building blocks that we put together to build complex applications
* isolate components: modules can be developed in isolation without thinking about the entire codebase
* abstract code: implement low-level code in modules and import these abstractions into other modules
* organized code: modules naturally lead to a more organized codebase
* reuse code: modules allow us to easily reuse the same code, even across multiple projects
```
// Dependency
import { rand } from './math.js';
// Modulde code
const diceP1 = rand(1, 6, 2);
const diceP2 = rand(1, 6, 2);
const scores = { diceP1, diceP2 };
// Export
export { scores };
```
* as of ES6 JS has a native build-in module system. Before ES6 we had to implement them ourselves or use external libraries
* ES6 modules: modules stored in files, exactly one module per file

|                      | ES6 module                         | script        |
|----------------------|------------------------------------|---------------|
| Top-level variables  | scoped to module                   | global        |
| Default mode         | strict mode                        | "sloppy" mode |
| Top-level this       | undefined                          | window        |
| Import and exports   | yes (needs to happen at top-level) | no            |
| HTML linking         | <script type="module">             | <script>      |
| File downloading     | asynchronous                       | synchronous   |

* importing modules before execution:
  * modules are imported synchronously, but downloading is asynchronously
  * possible thanks to top-level ("static") imports, which make imports known before execution
  * this makes bundling and dead code elimination possible

## Exporting and Importing Modules in ES6
* [JavaScript modules MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#a_background_on_modules)
```
// Importing module
import { customFunction, otherFunction as other, rv } from './customModule.js';
customFunction('hello'); // hello
other(); // Other function
console.log(rv); // 37

// Alternative Importing module
import * as CustomModule from './customModule.js';
CustomModule.customFunction('hello');
CustomModule.other(); // Other function
CustomModule.console.log(rv); // 37


// Exporting module
export const customFunction = function(word) {
  console.log(word);
}

const otherFunction = function() {
  console.log('Other function');
}
const randomValue = 37;

export { otherFunction, randomValue as rv };
```

## Top Level await
* introduced in ES2022
* [Top level await MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#top_level_await)
* Use the `await` keyword outside an async function
* only works in modules (<script type="module" ... ></script>)
* using top level await will block the entire module

## Review: Writing Clean and Modern JavaScript
* readable code:
  * write code so that others can understand it
  * write code so that you can understand it in 1 year
  * avoid too "clever" and overcomplicated solutions
  * use descriptive variable names: what they contain
  * use descriptive function names: what they do
* general:
  * use DRY principle (refactor your code)
  * don't pollute global namespace, encapsulate instead
  * don't use var, use let and const
  * use strong type checks (=== and !==)
* functions:
  * generally, functions should do only one thing
  * don't use more than 3 function parameters
  * use default parameters whenever possible
  * generally, return same data type as received
  * use arrow functions when they make code more readable
* OOP:
  * use ES6 classes
  * encapsulate data and don't mutate it from outside the class
  * implement method chaining
  * do not use arrow functions as methods (in regular objects)
* avoid nested code:
  * use early return (guard clauses)
  * use ternary (condintional) or logical operators instead of if
  * use multiple if instead of if/else-if
  * avoid for loops, use array methods instead
  * avoid callback-based asynchronous APIs
* asynchronous code
  * consume promises with async/await for best readability
  * whenever possible, run promises in parallel (Promise.all)
  * handle errors and promise rejections

## Declarative and Functional JavaScript Principles
* imperative code:
  * Programmer explains "how to do things"
  * We exaplain the computer every single step it has to follow to achieve a result
  ```
  const arr = [2, 4, 6, 8];
  const doubled = [];
  for (let i = 0; i < arr.length; i++)
    doubled[i] = arr[i] * 2;
  ```
* declarative code:
  * programmer tells what to do
  * we simply describe the way the computer should achieve the result
  * the HOW (step-by-step instructions) gets abstracted away
  ```
  const arr = [2, 4, 6, 8];
  const doubled = arr.map(n => n * 2);
  ```
* functional programming:
  * declarative programming paradigm
  * based on the idea of writing software by combining many pure functions, avoiding side effects and mutating data
  * side effect: modification (mutation) of any data outside of the function (mutating external variables, loggin to console, writing to DOM, etc.)
  * pure function: function without side effects. Does not depend on external variables. Given the same inputs, always returns the same outputs
  * immutability: state (data) is never modified! Instead, state is copied and the copy is mutated and returned
* functional programming techniques:
  * try to avoid data mutations
  * use bult-in methods that don't produce side effects
  * do data transformations with methods such as .map(), .filter() and .reduce()
  * try to avoid side effects in functions
* declarative syntax:
  * use array and object destructuring
  * use the spread operator (...)
  * use the ternary (conditional) operator
  * use template literals