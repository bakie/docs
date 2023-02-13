# Data Structures, Modern Operators and Strings

## Table of contents
* [Destructuring Arrays](#destructuring-arrays)
* [Destructuring Objects](#destructuring-objects)

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