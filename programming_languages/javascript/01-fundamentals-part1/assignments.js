// Lecture Values and Variables
console.log('LECTURE VALUES AND VARIABLES');
let country = 'Belgium';
let continent = 'Europe';
let population = 11;
console.log(country);
console.log(continent);
console.log(population);

// Lecture Data Types
console.log('LECTURE DATA TYPES');
let isIsland = false;
let language;
console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// Lecture let, const and var
console.log('LECTURE LET, CONST AND VAR');
language = 'dutch';
//const country = 'Belgium';
//const continent = 'Europe';
//const isIsland = true;

// Lecture Basic Operators
console.log('LECTURE BASIC OPERATORS');
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
console.log(country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language);

// Lecture Strings and Template Literals
console.log('LECTURE STRING AND TEMPLATE LITERALS');
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// Lecture Taking decisions if / else statements
console.log('LECTURE TAKING DECISIONS IF/ELSE STATEMENTS');
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}

// Lecture Type Conversion and Coercion
console.log('LECTURE TYPE CONVERSION AND COERCION');
console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

// Lecture Equality Operators: == vs. ===
console.log('LECTURE EQUALITY OPERATORS == VS ===');
//const numNeighbours = Number(prompt(
//  'How many neighbour countries does your country have?',
//));
const numNeighbours = 3;

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

// Lecture Logical Operators
console.log('LOGICAL OPERATORS');
if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

// Lecture The switch Statement
console.log('THE SWITCH STATEMENT');
const switchLanguage = 'chinese';
switch(switchLanguage) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
      break;
    case 'spanish':
       console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

// Lecture The Conditional (Ternary) Operator
console.log('THE CONDITIONAL (TERNARY) OPERATOR');
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);