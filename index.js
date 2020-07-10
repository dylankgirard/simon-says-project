// The player and computer will input their choices here

let playerChoice = [];
let compChoice = [];

const playerChoiceToString = () => playerChoice.toString();
const compChoiceToString = () => compChoice.toString();

// A randomizer for the computer to choose a value from 0 - 4

const randomChoice = () => Math.floor(Math.random() * 5);

// Round0 has a value of three since the computer's intital number of choices will be 3. This value will increase by 1 each round.

let round = 3;

// A function to push generated values to the compChoice array by round number of times.

const computerChoiceGenerator = () => {
	for (let i = 0; i < round; i++) {
		compChoice.push(randomChoice());
	}
	return compChoice;
};

// A function to advance the round by 1

const advanceRound = () => {
	compChoice = [];
	round++;
};

// A function that will compare computer-choices to human-choices that equates to TRUE if they are equal and FALSE if they are not.

const compareChoiceArrays = () => {
	if (playerChoiceToString() === compChoiceToString()) {
		return true;
	} else {
		return false;
	}
};

// TESTING


// Arrays that are converted to strings can be compared with strict equality
// let array1 = [1, 2, 3]
// let array2 = [1, 2, 3] <-- These two values equate to FALSE when compared

// let arrayToString1 = array1.toString()
// let arrayToString2 = array2.toString() <-- These two values equate to TRUE when compared
