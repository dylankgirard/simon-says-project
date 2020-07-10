// The player and computer will input their choices here

let playerChoice = [];
let compChoice = [];

// A randomizer for the computer to choose a value from 0 - 4

const randomChoice = () => {
	const randomNumber = Math.floor(Math.random() * 5);
	return colorMap[randomNumber];
};
const colorMap = {
	0: 'R',
	1: 'G',
	2: 'B',
	3: 'O',
	4: 'C',
};

// Round0 has a value of three since the computer's intital number of choices will be 3. This value will increase by 1 each round.

let round = 1;

// A function to push generated values to the compChoice array by round number of times.

const computerChoiceGenerator = () => {
	for (let i = 0; i < round; i++) {
		compChoice.push(randomChoice());
	}
	return compChoice;
};

// A function to advance the round by 1

const advanceRound = () => {
	playerChoice = [];
	compChoice = [];
	round++;
};

// A function that will compare computer-choices to human-choices that equates to TRUE if they are equal and FALSE if they are not.

const compareChoiceArrays = () => {
	if (playerChoice.length !== compChoice.length) {
		return false;
	}
	for (let i = 0; i < playerChoice.length; i++) {
		if (playerChoice[i] !== compChoice[i]) {
			return false;
		}
	}
	return true;
};

// Functionality for generating playerChoice values.

const gridButtons = document.querySelector('.game-grid');
gridButtons.addEventListener('click', pushValueToPlayerArray);
function pushValueToPlayerArray(event) {
	if (event.target.className === 'main-button') {
		playerChoice.push(event.target.dataset.button);
	}
}

// TESTING

// Simon Game Steps

// 1. The player arrives at the game.

// 2. The player pushes the start button.

// 3. The computer generates values that are pushed into the compChoice array.

// 4. The compChoice array sequence is displayed to the player (buttons light up). Then the computer waits for the player input.

// 5. The player attempts to match the sequence that was displayed. If they match the length and colors correctly, they advance to the next round. If they do not, GAME OVER and they will have to restart.

// 6. If the player matched the sequence, the computer generates a new set of values based on the round numbers, and steps 3 - 5 are repeated until the player loses or restarts manually.
