# Data Structures, Modern Operators and Strings

## Table of contents
* [Destructuring Arrays](#destructuring-arrays)

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
  }
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