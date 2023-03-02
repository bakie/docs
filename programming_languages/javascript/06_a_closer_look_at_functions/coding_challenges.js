'use strict';

// Coding Challenge #1
console.log('CODING CHALLENGE #1');
const poll = {
    question: 'What is your favourite programming language?',
    options: [
        '0: JavaScript',
        '1: Python',
        '2: Rust',
        '3: C++',
    ],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));

        if (typeof answer === 'number' && (answer >= 0 || answer < this.options.length)) {
            this.answers[answer] ? this.answers[answer]++ : (this.answers[answer] = 1);
        }

        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
}

poll.registerNewAnswer();
poll.registerNewAnswer();
poll.registerNewAnswer();

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
