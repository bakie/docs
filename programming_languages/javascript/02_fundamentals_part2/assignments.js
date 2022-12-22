'use strict';

// Lecture Functions
console.log('LECTURE FUNCTIONS');
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const belgium = describeCountry('Belgium', 11, 'Brussels');
const netherlands = describeCountry('Netherlands', 17, 'Amsterdam');
const germany = describeCountry('Germany', 84, 'Berlin');
console.log(belgium);
console.log(netherlands);
console.log(germany);

// Lecture Function Declerations vs. Expressions
console.log('LECTURE FUNCTIONS DECLERATIONS VS. EXPRESSIONS');
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const belgiumPercentage1 = percentageOfWorld1(11);
const netherlandsPercentage1 = percentageOfWorld1(17);
const germanyPercentage1 = percentageOfWorld1(84);
console.log(belgiumPercentage1, netherlandsPercentage1, germanyPercentage1);

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}
const belgiumPercentage2 = percentageOfWorld2(11);
const netherlandsPercentage2 = percentageOfWorld2(17);
const germanyPercentage2 = percentageOfWorld2(84);
console.log(belgiumPercentage2, netherlandsPercentage2, germanyPercentage2);

// Lecture Arrow Functions
console.log('LECTURE ARROW FUNCTIONS');
const percentageOfWorld3 = population => population / 7900 * 100;
const belgiumPercentage3 = percentageOfWorld3(11);
const netherlandsPercentage3 = percentageOfWorld3(17);
const germanyPercentage3 = percentageOfWorld3(84);
console.log(belgiumPercentage3, netherlandsPercentage3, germanyPercentage3);

// Lecture Functions Calling Other Functions
console.log('LECTURE FUNCTIONS CALLING OTHER FUNCTIONS');
const describePopulation = function (country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world`;
}

const belgiumFunc = describePopulation('Belgium', 11, 'Brussels');
const netherlandsFunc = describePopulation('Netherlands', 17, 'Amsterdam');
const germanyFunc = describePopulation('Germany', 84, 'Berlin');
console.log(belgiumFunc);
console.log(netherlandsFunc);
console.log(germanyFunc);

// Lecture Introduction to Arrays
console.log('LECTURE INTRODUCTION TO ARRAYS');
const populations = [11, 17, 84, 142];
console.log(populations.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log(percentages);
