// Coding Challenge #1
console.log('CODING CHALLENGE #1');
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2); 

const markHigherBMI = markBMI > johnBMI;

console.log('Mark\'s BMI is ' + markBMI);
console.log('John\'s BMI is ' + johnBMI);
console.log(markHigherBMI);

// Coding Challenge #2
console.log('CODING CHALLENGE #2');
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}

// Coding challenge #3
console.log('CODING CHALLENGE #3');
let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy!');
}
// BONUS 1 and 2 combined
console.log('CODING CHALLENGE #3 BONUS 1 and 2');
scoreDolphins = (97 + 112 + 80) / 3;
scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy');
}