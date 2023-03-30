# Modern JavaScript Development: Modules, Tooling and Functional

## Table of contents
* [An Overview of Modules in JavaScript](#an-overview-of-modules-in-javascript)
* [Exporting and Importing Modules in ES6](#exporting-and-importing-modules-in-es6)

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