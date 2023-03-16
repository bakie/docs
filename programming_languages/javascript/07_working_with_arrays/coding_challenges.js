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

// Coding Challenge #3
console.log('CODING CHALLENGE #3');
const calcAverageHumanAgeChained = function (ages) {
    return ages
        .map(age => age <= 2 ? age * 2 : 16 + age * 4)
        .filter(age => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
}

console.log(calcAverageHumanAgeChained([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAgeChained([16, 6, 10, 5, 6, 1, 4]));

// Coding Challenge #4
console.log('CODING CHALLENGE #4');
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
const logEating = function(dog) {
}
// 1.
console.log('CODING CHALLENGE #4 - 1');
dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));
console.log(dogs);
// 2.
console.log('CODING CHALLENGE #4 - 2');
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'}`);
// 3.
console.log('CODING CHALLENGE #4 - 3');
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);
// 4.
console.log('CODING CHALLENGE #4 - 4');
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);
// 5.
console.log('CODING CHALLENGE #4 - 5');
console.log(dogs.some(dog => dog.recommendedFood === dog.curFood));
// 6.
console.log('CODING CHALLENGE #4 - 6');
const eatingOkay = (dog) => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10);
console.log(dogs.some(eatingOkay));
// 7.
console.log('CODING CHALLENGE #4 - 7');
console.log(dogs.filter(eatingOkay));
// 8.
console.log('CODING CHALLENGE #4 - 8');
console.log(dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood));
