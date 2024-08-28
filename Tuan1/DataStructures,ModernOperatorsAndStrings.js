// Coding Challenge #1
// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

console.log('-----Coding Challenge #1');
// Game data (replace with actual data from the web service)
const game = {
teams: [
    { name: 'Bayern Munich', players: ['Neuer', 'Davies', 'Alaba', 'Boateng', 'Pavard', 'Kimmich', 'Goretzka', 'Muller', 'Gnabry', 'Lewandowski', 'Coman'] },
    { name: 'Barcelona', players: ['Ter Stegen', 'Alba', 'Pique', 'Umtiti', 'Semedo', 'Busquets', 'Rakitic', 'De Jong', 'Messi', 'Suarez', 'Griezmann'] }
],
odds: { team1: 1.2, draw: 5.0, team2: 6.0 },
scored: ['Lewandowski', 'Suarez', 'Messi']
};

// Create player arrays for each team
const players1 = game.teams[0].players;
const players2 = game.teams[1].players;

// Extract goalkeeper and field players for Bayern Munich
const gk = players1[0];
const fieldPlayers = players1.slice(1);

// Create an array containing all players
const allPlayers = [...players1, ...players2];

// Create a new array for Bayern Munich with substitutes
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// Extract odds from the game data
const team1Odd = game.odds.team1;
const drawOdd = game.odds.draw;
const team2Odd = game.odds.team2;

// Function to print goals
function printGoals(...players) {
console.log(`${players.length} goals scored:`);
for (const player of players) {
    console.log(player);
}
}

// Test the printGoals function
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// Determine the more likely team to win
const likelyToWin = Math.min(team1Odd, team2Odd) === team1Odd ? game.teams[0].name : game.teams[1].name;
console.log(`The team more likely to win is: ${likelyToWin}`);

// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }

console.log('-----Coding Challenge #2');
// 1. Loop over the game.scored array and print each player name with the goal number
for (let i = 0; i < game.scored.length; i++) {
console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

// 2. Calculate the average odd
const odds = Object.values(game.odds);
const averageOdd = odds.reduce((acc, odd) => acc + odd, 0) / odds.length;
console.log(`Average Odd: ${averageOdd.toFixed(2)}`);

// 3. Print the odds in a formatted way
const { team1, team2 } = game;
const { team1: odd1, x: oddX, team2: odd2 } = game.odds;
console.log(`Odd of victory ${team1}: ${odd1}`);
console.log(`Odd of draw: ${oddX}`);
console.log(`Odd of victory ${team2}: ${odd2}`);

// 4. Bonus: Create an object called 'scorers'
const scorers = {};
game.scored.forEach(player => {
scorers[player] = (scorers[player] || 0) + 1;
});
console.log(scorers);

// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

console.log('-----Coding Challenge #3');
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🟨 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🟨 Yellow card']
]);

// 1. Create an array of different game events (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log('Events:', events);

// 2. Remove the unfair yellow card from minute 64
gameEvents.delete(64);
console.log('Updated gameEvents:', gameEvents);

// 3. Compute and log the average time between events
const eventMinutes = [...gameEvents.keys()].sort((a, b) => a - b);
const totalTimeSpan = eventMinutes[eventMinutes.length - 1] - eventMinutes[0];
const averageTime = totalTimeSpan / (eventMinutes.length - 1);
console.log(`An event happened, on average, every ${averageTime.toFixed(2)} minutes`);

// 4. Log each event with its half of the game
for (const [minute, event] of gameEvents) {
const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
console.log(`[${half}] ${minute}: ${event}`);
}

  