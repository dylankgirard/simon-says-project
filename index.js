// The player and computer will input their choices here

let playerChoice = [];
let compChoice = [];

// A variable that keeps track of the current round.

let round = 0;

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

// A function to push randomChoice values to the compChoice array by 'round' number of times.

const computerChoiceGenerator = () => {
	for (let i = 0; i < round + 2; i++) {
		compChoice.push(randomChoice());
	}
	return compChoice;
};

// computerChoiceGenerator();
console.log(compChoice);

// A function to reset choices between rounds or on restart.

const resetChoices = () => {
	playerChoice = [];
	compChoice = [];
};

// A banner that updates each round.
const roundBanner = document.querySelector('.round-banner');

// A function that will compare computer-choices to human-choices that equates to TRUE if they are equal and FALSE if they are not.

const compareChoiceArrays = () => {
	if (playerChoice.length !== compChoice.length) {
		return false;
	}
	for (let i = 0; i < playerChoice.length; i++) {
		if (playerChoice[i] !== compChoice[i]) {
			roundBanner.style.color = 'red';
			roundBanner.innerText = 'FAILURE';
			return false;
		}
	}
	resetChoices();
	roundBanner.innerText = 'GREAT JOB';
	return true;
};

// Functionality for generating playerChoice values.
const pushValueToPlayerArray = (event) => {
	if (event.target.className === 'main-button button') {
		playerChoice.push(event.target.dataset.button);
		compareChoiceArrays();
		console.log(playerChoice);
		console.log(compareChoiceArrays());
	}
};

const gridButtons = document.querySelector('.game-grid');
gridButtons.addEventListener('click', pushValueToPlayerArray);

/* A function that allows the computer to 'click' a button every 1.5 seconds. Found some useful suggestions for the timing element here: https://stackoverflow.com/questions/22154129/javascript-settimeout-loops , specifically from someone named Dupinder Singh. 
When the playButton is pushed, the footer banner is made visible. */

const compButtonPusher = () => {
	round++;
	console.log(round);
	computerChoiceGenerator();
	console.log(compChoice);
	roundBanner.innerText = `Round: ${round}`;
	roundBanner.style.visibility = 'visible';
	setTimeout(() => {
		for (let i = 0; i < compChoice.length; i++) {
			setTimeout(() => {
				const currentComputerChoice = document.querySelector(
					`[data-button='${compChoice[i]}']`
				);
				currentComputerChoice.classList.toggle('game-buttons-animation');
				setTimeout(() => {
					currentComputerChoice.classList.toggle('game-buttons-animation');
				}, 600);
				console.log(`The ${compChoice[i]} button was clicked`);
				currentComputerChoice.click();
			}, i * 1000);
		}
	}, 1300);
};

const playButton = document.querySelector('.play-button');
playButton.addEventListener('click', compButtonPusher);

roundBanner.innerText = `Round: ${round}`;
roundBanner.style.visibility = 'hidden';

// TESTING

// Simon Game Steps

// 1. The player arrives at the game.

// 2. The player pushes the start button.

// 3. The computer generates values that are pushed into the compChoice array.

// 4. The compChoice array sequence is displayed to the player (buttons light up). Then the computer waits for the player input.

// 5. The player attempts to match the sequence that was displayed. If they match the  colors correctly, they advance to the next round. If they do not, GAME OVER and they will have to restart.

// 6. If the player matched the sequence, the computer generates a new set of values based on the round numbers, and steps 3 - 5 are repeated until the player loses or restarts manually.
