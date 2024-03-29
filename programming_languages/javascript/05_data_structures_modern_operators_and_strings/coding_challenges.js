'use strict';

// Coding Challenge #1
console.log('CODING CHALLENGE #1');
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final')
// containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {team1, x: draw, team2 } = game.odds;
//const {odds: { team1, x: draw, team2 }} = game;
console.log(team1);
console.log(draw);
console.log(team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and
// prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function(...players) {
    console.log(`There were ${players.length} goals scored.`);
    for(i=0; i<players.length;i++) {
        console.log(players[i]);
    }
}
console.log('Davies', 'Muller', 'Lewandowski', 'Kimmich');
console.log(...game.scored)

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win,
// without using an if/else statement or the ternary operator.
team1 < team2 && console.log('Team 1');
team1 > team2 && console.log('Team 2');

// Coding Challenge #2
console.log('CODING CHALLENGE #2');
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
for (const [index, player] of game.scored.entries()) {
    console.log(`Goal ${index + 1}: ${player}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
let average = 0;
for (const odd of Object.values(game.odds)) {
    average += odd;
}
console.log(`The average odd is: ${average / Object.values(game.odds).length}`);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//        Odd of victory Bayern Munich: 1.33
//        Odd of draw: 3.25
//        Odd of victory Borrussia Dortmund: 6.5
//    Get the team names directly from the game object, don't hardcode them (except for "draw").
//    Hint: Note how the odds and the game objects have the same property names.
for (const [key, value] of Object.entries(game.odds)) {
   console.log(`Odd of ${key === 'x' ? 'draw' : 'victory ' + game[key]}: ${value}`);
}

// 4. Bonus: Create an object called 'scorers' which contains the names of the
//    players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//      {
//        Gnarby: 1,
//        Hummels: 1,
//        Lewandowski: 2
//      }
//
//  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
const scorers = {};
for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

// Coding Challenge #3
console.log('CODING CHALLENGE #3');
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//    [FIRST HALF] 17: ⚽ GOAL
for (const [minute, event] of gameEvents) {
    console.log(`[${minute <= 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${minute}: ${event}`)
}

// Coding Challenge #4
// Simplified it. I just made a camelCaseConverter instead of one big string. And I don't print the checkmarks
// in case of one big string we first need to split the string on the newline character text.split('\n');
console.log('CODING CHALLENGE #4');
const camelCaseConverter = function(item) {
    const str = item.trim().toLowerCase().split('_');
    let newStr = '';
    for (const [key, val] of str.entries()) {
        if (key) {
            newStr += val.replace(val[0], val[0].toUpperCase());
        } else {
            newStr += val
        }
    }

    return newStr;
}

console.log(camelCaseConverter('underscore_case'));
console.log(camelCaseConverter(' first_name'));
console.log(camelCaseConverter('Some_Variable'));
console.log(camelCaseConverter('  calculate_AGE'));
console.log(camelCaseConverter('delayed_departure'));
console.log(camelCaseConverter('a_four_word_string'));
