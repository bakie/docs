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

// Lecture Basic Array Operations (Methods)
console.log('LECTURE BASIC ARRAY OPERATIONS (METHODS)');
const neighbours = ['Netherlands', 'Germany', 'France', 'Luxemburg'];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
console.log(`Probably ${neighbours.includes('Germany') ? '' : 'not '}a central European country.`);
neighbours[neighbours.indexOf('Luxemburg')] = 'Luxemburg (country)';
console.log(neighbours);

// Lecture Introduction to Objects
console.log('LECTURE INTRODUCTION TO OBJECTS');
const myCountry = {
    country: 'Belgium',
    capital: 'Brussel',
    language: 'Dutch',
    population: 11,
    neighbours: ['Netherlands', 'Germany', 'France', 'Luxemburg'],
    //Added in Lecture Object Methods
    describe: function() {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    },
    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0;
        return this.isIsland;
    }
}
console.log(myCountry);

// Lecture Dot vs. Bracket Notation
console.log('LECTURE DOT VS. BRACKET NOTATION');
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
myCountry.population += 2;
console.log(myCountry);
myCountry['population'] -= 2;
console.log(myCountry);

// Lecture Object Methods
console.log('LECTURE OBJECT METHODS');
console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry.isIsland);

// Lecture Iteration: The for Loop
console.log('LECTURE ITERATION THE FOR LOOP');
for (let i = 1; i <= 5; i++) {
    console.log(`Voter number ${i} is currently voring.`);
}

// Lecture Looping Arrays, Breaking and Continuing
console.log('LECTURE LOOPING ARRAYS, BREAKING AND CONTINUING');
const percentagesLoop = [];
for (let i = 0; i < populations.length; i++) {
    percentagesLoop.push(percentageOfWorld1(populations[i]));
}
console.log(percentages);
console.log(percentagesLoop);

// Lecture Looping Backwards and Loops in Loops
console.log('LECTURE LOOPING BACKWARDS AND LOOPS IN LOOPS');
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden','Russia']];
for(let i = 0; i < listOfNeighbours.length; i++) {
    for(let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}

// Lecture The while loop
console.log("LECTURE THE WHILE LOOP");
const percentagesWhile = [];
let i = 0;
while(i < populations.length) {
    percentagesWhile.push(percentageOfWorld1(populations[i]));
    i++;

}
console.log(percentages);
console.log(percentagesLoop);
console.log(percentagesWhile);