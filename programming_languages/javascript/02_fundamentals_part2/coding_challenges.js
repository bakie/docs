'use strict';

// Coding Challenge #1
console.log('CODING CHALLENGE #1');
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins.');
    }
}

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// Coding Challenge #2
console.log('CODING CHALLENGE #2');
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * (15/100) : bill * (20/100);
const bills = [125, 555, 44];
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
]
console.log(tips);
// Bonus
const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]
console.log(total);

// Coding Challenge #3
console.log('CODING CHALLENGE #3');
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName()}'s BMI (${mark.bmi}) is higher than ${john.fullName()}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName()}'s BMI (${john.bmi}) is higher than ${mark.fullName()}'s BMI (${mark.bmi})`)
}
