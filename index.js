// The player will input their choices here
let playerChoice = [];

// A randomizer for the computer to choose a value from 0 - 4
const randomChoice = () => Math.floor(Math.random() * 5);

// Round0 has a value of three since the computer's intital number of choices will be 3. This value will increase by 1 each round.
let round = 3;

// A function to push generated values to the compChoice array by round number of times.
const computerArray = () => {
	let compChoice = [];
	for (let i = 0; i < round; i++) {
		compChoice.push(randomChoice());
	}
	return compChoice;
};

// A function to advance the round by 1
const advanceRound = () => round++;

// TESTING
advanceRound();
advanceRound();
advanceRound();

console.log(computerArray());
