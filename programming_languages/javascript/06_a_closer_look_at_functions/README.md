# A Closer Look at Functions

## Table of contents
* [Default Parameters](#default-parameters)

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