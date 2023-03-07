'use strict';

// Coding Challenge #1
console.log('CODING CHALLENGE #1');
const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCopy = dogsJulia.slice(1, 3);
    const dogs = dogsJuliaCopy.concat(dogsKate);
    dogs.forEach(function(dogAge, index) {
        if (dogAge >= 3) {
            console.log(`Dog number ${index + 1} is an adult, and is ${dogAge} old`)
        } else {
            console.log(`Dog number ${index + 1} is still a puppy`)
        }
    });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);