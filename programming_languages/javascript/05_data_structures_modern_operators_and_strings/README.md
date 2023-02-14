# Data Structures, Modern Operators and Strings

## Table of contents
* [Destructuring Arrays](#destructuring-arrays)
* [Destructuring Objects](#destructuring-objects)
* [The Spread Operator (...)](#the-spread-operator---)
* [Rest Pattern and Parameters](#rest-pattern-and-parameters)
* [Short Circuiting (&& and ||)](#short-circuiting---and--)
* [The Nullish Coalescing Operator (??)](#the-nullish-coalescing-operator---)
* [Logical Assignment Operators](#logical-assignment-operators)
* [Looping Arrays: The for-of Loop](#looping-arrays--the-for-of-loop)
* [Enhanced Object Literals](#enhanced-object-literals)
* [Optional Chaining (?.)](#optional-chaining---)
* [Looping Objects: Object Keys, Values and Entries](#looping-objects--object-keys-values-and-entries)
* [Sets](#sets)
* [Maps: Fundamentals](#maps--fundamentals)
* [Maps: Iteration](#maps--iteration)
* [Summary: Which Data Structure to Use?](#summary--which-data-structure-to-use)

## Destructuring Arrays
is an ES6 feature, a way of unpacking values from an array or object into separate values.
```
const arr = [2, 3, 4];
// Without destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];
// With destructuring
const [x,y,z] = arr;
console.log(x, y, z); // 2 3 4
```

```
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Brischetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
}

// Get the first and second value from the categories array
let [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria
// Get the first and third value from the categories array
let [first, , third] = restaurant.categories;
console.log(first, third); // Italian Vegetarian

// Switch the first and second value
// Without destructuring
const temp = first;
first = second;
second = temp;
console.log(first, second); // Pizzeria Italian
// With destructuring
[first, second ] = [second, first];
console.log(first, second); // Pizzeria Italian

// Receive 2 return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main); // Garlic Bread Pizza

// Nested array destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // 2 [5, 6]
const [i, ,[j, k]] = nested
console.log(i, j, k); // 2 5 6

// Default values
const [p, q, r] = [8, 9];
console.log(p, q, r); // 8 9 undefined
[p=1, q=1, r=1] = [8, 9];
console.log(p, q, r); // 8 9 1
```

## Destructuring Objects
```
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Brischetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
}

// You need to use the exact property names to extract variables from the object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // Classico Italiano {thu: ...} ["Italian", ...] 

// Use different property names
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags); // Classico Italiano {thu: ...} ["Italian", ...]

// Default values
const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters); // [] ["Focaccia", ...]

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

{a, b} = obj; // Gives syntax error: Unexpected token '='.
              // When we start a line with { then JS expects a code block and we can't assign anything to a code block. 
// Solution: Wrap it in ( )
({a, b} = obj);
console.log(a, b); // 23 7

// Nested objects
const { fri } = openingHours;
console.log(fri); // {open: 11, close: 23}
const { fri: {open, close} };
console.log(open, close); // 11 23
const { fri: {open: o, close: c} };
console.log(o, c); // 11 23

// Destructuring an argument object in a function with default values
orderDelivery: function({ starterIndex = 1, mainIndex = 0, time, address }) {
  console.log(starterIndex, mainIndex, time, address);
}
restaurant.orderDelivery({
  time: '22:30',
  address: 'Vai del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})
```

## The Spread Operator (...)
Expand an array into all its elements. Unpacking all array elements at once.  
Difference with destructuring: The spread operator takes the elements from the array and doesn't create new variables. We can only use it in places were we write values separated by comma's
```
// Adding 1 and 2 to the beginning of the array
const arr = [7, 8, 9];
// Without spread operator
const baddNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1, 2, 7, 8, 9]
// With spread operator
const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9]
// Logs the individual elements
console.log(...newArr); // 1 2 7 8 9
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // ["Pizza", "Pasta", "Risotto", "Gnocci"]

// Shallow copy (copy array)
const mainMenuCopy = [...restaurant.mainMenu];
// Join 2 arrays (or more)
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

const str = 'spread';
const letters = [...str, ' ', 's'];
console.log(letters); // ["s", "p", "r", "e", "a", "d", " ", "s"]

orderPasta: function(ingredient1, ingredient2, ingredient3) {
  console.log(ingredient1, ingredient2, ingredient3)
}
const ingredients = ['a', 'b', 'c'];
// Old way
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// Spread operator
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1999, ...restaurant, founder: 'Guiseppe'};
const restaurantCopy = { ...restaurant };
```

## Rest Pattern and Parameters
Rest patterns looks like the spread operator. Uses the same syntax ..., but does the opposite of the spread operator.  
It packs elements into an array.
```
// Spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// Rest, because on the LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(1, b, others); // 1 2 [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood'); // Pizza Risotto ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // {thu: {...}, fri: {...}}

// Rest parameters
const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}
add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(1, 2, 3, 4, 5, 6, 7); // 28
// Using the spread operator
const x = [23, 5, 7];
add(...x); // 35

orderPizza: function(mainIngredient, ...otherIngredients) {
  console.log(mainIngredient, otherIngredients);
}
restaurant.orderPizza('ingredient1', 'ingredient2', 'ingredient3'); // ingredients1 ["ingredient2", "ingredient3"]
restaurant.orderPizza('ingredient1'); // ingredient1 []
```

## Short Circuiting (&& and ||)
Logical operators:
* can use any data type
* can return any data type
* do short-circuiting

The AND operator: it will short-circuit if the value is a falsy value, and it will return that value
```
console.log(0 && 'Me'); // 0
console.log(7 && 'Me'); // Me
console.log('Hello' && 23 && null && 'Me'); // null
```

The OR operator: it will short-circuit if the value is a truthy value, and it will return that value.
```
console.log(3 || 'Me'); // 3
console.log('' || 'Me'); // Me
console.log(true || 0); true
console.log(undefined || null); // undefined
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// Setting a default value without using if/else or ternary operator.
// Note that if numbGuests = 0 it will set the guests to 10 because 0 if a falsy value.
const guests = restaurant.numGuests || 10;
console.log(guests); // 10
```

## The Nullish Coalescing Operator (??)
Introduced in ES2020. Works with the concept of nullish values instead of falsy values.  
Nullish values are null and undefined. It does not include 0 or '' (empty string).
```
restaurant.numGuests = 0;
const guests = restaurant.numbGuests || 10;
console.log(guests); // 10

// Nullish coalescing
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); // 0
```

## Logical Assignment Operators
Introduced in ES2021.  
OR assignment operator: Assigns a value to a variable if that variable is currently falsy.  
Nullish assignment operator: Assigns a value to a variable if that variable is currently nullish.  
AND assignment operator: Assigns a value to a variable if that variable is currently truthy.
```
const rest1 = {
  name: 'Rest1',
  numGuests: 20,
}
const rest2 = {
  name: 'Rest2',
  owner: 'Me',
}

// OR assignment operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1); // { name: 'Rest1', numGuests: 20}
console.log(rest2); // { name: 'Rest2', owner: 'Me', numGuests: 10}

// Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1); // { name: 'Rest1', numGuests: 20}
console.log(rest2); // { name: 'Rest2', owner: 'Me', numGuests: 10}

// AND assignment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1); // { name: 'Rest1', numGuests: 20}
console.log(rest2); // { name: 'Rest2', owner: '<ANONYMOUS>', numGuests: 10}
```

## Looping Arrays: The for-of Loop
Introduced in ES6. Possible to use the `continue` and `break` keyword.
```
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(menu); // Focaccia
                                            // Bruschetta ...

// Getting the index (count)
for (const item of menu.entries()) {
    console.log(item);  // [0, "Focaccia"]
                        // [1, "Bruschetta"] ...
}
// Using destructuring
for (const [i, el] of menu.entries()) {
    console.log(i);     // 1            // 2            // ...
    console.log(el);    // Focaccia     // Bruschetta   // ...
}
```

## Enhanced Object Literals
Introduced in ES6.  
three enhancements: 
* including properties
* methods
* compute property names
```
// Including properties
const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
}
const restaurant = {
    name: 'Restaurant',
    // Before
    openingHours: openingHours,
    // ES6 enhanced object literals
    openingHours,
}

// Methods
const restaurant = {
    name: 'Restaurant'
    // Before
    order: function(food1, food2) {
        console.log(food1, food2);
    }
    // ES6 enhanced object literals
    order(food1, food2) {
        console.log(food1, food2);
    }
}

// Computer property names
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [`day-${2 + 4}`]: {
        open: 11,
        close: 24,
    }
}
```

## Optional Chaining (?.)
Introduced in ES2020. 
* properties
* method
* arrays
```
// Optional chaining with properties
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
}
for (const day of days) {
    // Without optional chaining
    if (restaurant.openingHoursp[day]) {
        const open = restaurant.openingHours[day].open;
     }
    // With optional chaining. Only if the day exists then read the open property. Otherwise undefined is returned.
    const open = restaurant.openingHours[day]?.open;
    console.log(open); // undefined
                       // undefined
                       // undefined
                       // 12
                       // 11
                       // undefined
                       // undefined
}

// Optional chaining with methods
const restaurant = {
    name: 'Rest',
    order() {
        return 'The order method';
    }
}

console.log(restaurant.order?.() ?? 'Method does not exist'); // The order method
console.log(restaurant.orderSomething?.() ?? 'Method does not exist'); // Method does not exist

// Optional chaining with arrays
const users = [{ name: 'Me' }]
console.log(users[0]?.name ?? 'User array empty'); // Me
const emptyUsers = []
console.log(emptyUsers[0]?.name ?? 'User array empty'); // User array empty
```

## Looping Objects: Object Keys, Values and Entries
Objects are not iterables, but we can loop over them in an indirect way.
```
const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
}
// Looping over property names (Keys)
for (const day of Object.keys(openingHours)) {
    console.log(day); // thu
                      // fri
}

// Looping over property values
for (const dayValue of Object.values(openingHours)) {
    console.log(dayValue); // {open: 12, close: 22}
                           // {open: 11, close: 23}
}

// Looping over the entries (name (key) + value together)
for (const [key, value] of Object.entries(openingHours)) {
    console.log(key, value);  // thu, {open: 12, close: 22}
                              // fri, {open: 11, close: 23}
}
```

## Sets
Introduced in ES6. A collection of unique values. Can't have duplicates.  
In sets there are no indexes, we can't do ordersSet[0]. This will give undefined.
```
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet); // {"Pasta", "Pizza", "Risotto"}
console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false
ordersSet.add('Bread');
ordersSet.add('Bread');
console.log(ordersSet); // {"Pasta", "Pizza", "Risotto", "Bread"}
ordersSet.delete('Risotto');
console.log(ordersSet); // {"Pasta", "Pizza", "Bread"}
for(const order of OrdersSet) console.log(order); // Pasta
                                                  // Pizza ...
ordersSet.clear();
console.log(ordersSet); // {}
```

## Maps: Fundamentals
Introduced in ES6. A data structure to map values to keys.  
The keys can be any type of key, while in objects they keys are always a string.
```
const restMap = new Map();
`restMap.set('keyName', 'keyValue');
`restMap.set(1, 'First');
restMap.set(2, 'Second');
console.log(restMap); // { keyName → "keyValue", 1 → "First", 2 → "Second" }

// setting a value returns the map, so we can chain the commands.
restMap.set(true, 'This is true').set(false, 'This is false');
console.log(restMap); // { keyName → "keyValue", 1 → "First", 2 → "Second", true → "This is true", false → "This is false" }

console.log(rest.get('keyName')); // keyValue
console.log(rest.get(1)); // First
console.log(rest.get(true)); // This is true

console.log(restMap.has('unknown'));  // false
restMap.delete('keyName');
console.log(restMap); // { 1 → "First", 2 → "Second", true → "This is true", false → "This is false" }

console.log(restMap.size); // 4

restMap.set([1,2], 'Array');
console.log(restMap); //{ 1 → "First", 2 → "Second", true → "This is true", false → "This is false", (2) […] → "Array" }
console.log(restMap.get([1,2])); // undefined. The two arrays are not the same objects!

restMap.clear();
console.log(restMap); // Map(0)

// Convert object to map
const obj = {
    first: {
        yes: "Hello from first",
        no: "No hello from first"
    },
    second: {
        yes: "Hello from second",
        no: "No hello from second",
    }
}
const objMap = new Map(Object.entries(obj));
console.log(objMap); // { first → {yes: "Hello from first", no: "No hello from first"}, second → {yes: "Hello from second", no: "No hello from second"} }

// Convert map to array
console.log([...objMap]); //Array [ ["first", {...}], ["second", {...}] ]
```

## Maps: Iteration
```
const restMap = new Map([['firstArray', 'firstValue'], ['secondArray', 'secondValue'], ['thirdArray', 'thirdValue']]);
console.log(restMap); //{ firstArray → "firstValue", secondArray → "secondValue", thirdArray → "thirdValue" }

for (const [key,value] of restMap) {
    console.log(key);
    console.log(value);
}
//firstArray
//firstValue
//secondArray
//secondValue
//thirdArray
//thirdValue
```

## Summary: Which Data Structure to Use?
Simple List ? --> Arrays or Sets  
Key/Value pairs ? --> Objects or Maps

Build-in data structures:
* Arrays
  * Use when you need ordered list of values (might contain duplicates)
  * Use when you need to manipulate data
* Sets
  * Use when you need to work with unique values
  * Use when high-performance is really important
  * Use to remove duplicates from arrays
* Objects
  * More "traditional" key/value store (Maps are introduced in ES6)
  * Easier to write and access value with . and []
  * Use when you need to include functions (methods)
  * Use when working with JSON (can convert to map)
* Maps
  * Better performance
  * Keys can have any data type
  * Easy to iterate
  * Easy to compute size
  * Use when you simply need to map key to values
  * Use when you need keys that are not strings
