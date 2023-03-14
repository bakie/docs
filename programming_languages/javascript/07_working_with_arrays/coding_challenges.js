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

// Coding Challenge #2
console.log('CODING CHALLENGE #2');
const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map(age => age <= 2 ? age * 2 : 16 + age * 4);
    const adults = humanAges.filter(age => age >= 18);
    const average = adults.reduce((acc, age) => acc + age) / adults.length;
    const shorterAverage = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

    return [adults, average, shorterAverage];
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

