// The player and computer will input their choices here

let playerChoice = [];
let compChoice = [];

// A variable that keeps track of the current round

let round = 0;

// A variable to store the high score

let highScoreValue = 0;

// A randomizer for the computer to choose a value from 0 - 4, corresponding to the button colors

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

// A function to push randomChoice values to the compChoice array by 'round + 2' number of times

const computerChoiceGenerator = () => {
	for (let i = 0; i < round + 2; i++) {
		compChoice.push(randomChoice());
	}
	return compChoice;
};

// A function to reset choices between rounds or on restart

const resetChoices = () => {
	playerChoice = [];
	compChoice = [];
};

// A banner that updates each round.
const roundBanner = document.querySelector('.round-banner');

// A function that will compare computer-choices to human-choices that equates to TRUE if they are equal and FALSE if they are not

const compareChoiceArrays = () => {
	if (playerChoice.length !== compChoice.length) {
		return false;
	}
	for (let i = 0; i < playerChoice.length; i++) {
		if (playerChoice[i] !== compChoice[i]) {
			disableGridButtons();
			failureSound.play();
			playButton.innerText = '';
			restartButton.style.color = 'red';
			roundBanner.style.color = 'red';
			finalScore.style.visibility = 'visible';
			highScore.style.visibility = 'visible';
			roundBanner.innerText = `${randomBannerSelector(failureBannerOutputs)}`;
			return false;
		}
	}
	resetChoices();
	disableGridButtons();
	victorySound.play();
	roundBanner.style.color = 'gold';
	playButton.disabled = false;
	playButton.innerText = 'CONTINUE';
	roundBanner.innerText = `${randomBannerSelector(successBannerOutputs)}`;
	return true;
};

// Functionality for generating playerChoice values
const pushValueToPlayerArray = (event) => {
	if (event.target.className === 'main-button button') {
		gridSelectSound.play();
		playerChoice.push(event.target.dataset.button);
		compareChoiceArrays();
	}
};

const gridButtons = document.querySelector('.game-grid');
gridButtons.addEventListener('click', pushValueToPlayerArray);

/* A function that allows the computer to 'click' a button every 1.5 seconds. Found some useful suggestions for the timing elements here: https://stackoverflow.com/questions/22154129/javascript-settimeout-loops, specifically from someone named Dupinder Singh. 
When the playButton is pushed, the round banner is made visible. */

const roundPlaysOut = () => {
	playButton.innerText = 'Watch Out';
	startSound.play();
	playButton.disabled = true;
	gridButtons.disabled = false;
	round++;
	if (round > highScoreValue) {
		highScoreValue++;
		highScore.innerText = `HIGH SCORE: ${highScoreValue}`;
	}
	finalScore.innerText = `FINAL SCORE: ${round}`;
	computerChoiceGenerator();
	roundBanner.innerText = `Round: ${round}`;
	roundBanner.style.color = 'white';
	roundBanner.style.visibility = 'visible';
	setTimeout(() => {
		for (let i = 0; i < compChoice.length; i++) {
			setTimeout(() => {
				gridSelectSound.play();
				const currentComputerChoice = document.querySelector(
					`[data-button='${compChoice[i]}']`
				);
				currentComputerChoice.classList.toggle('game-buttons-animation');
				setTimeout(() => {
					currentComputerChoice.classList.toggle('game-buttons-animation');
				}, 600);
				currentComputerChoice.click();
				if (i === compChoice.length - 1) {
					playButton.innerText = 'YOUR TURN';
					enableGridButtons();
				}
			}, i * 1000);
		}
	}, 1300);
};

const playButton = document.querySelector('.play-button');
playButton.addEventListener('click', roundPlaysOut);
playButton.innerText = 'START';

// Progress banner remains hidden until the game begins

roundBanner.innerText = `Round:${round}`;
roundBanner.style.visibility = 'hidden';

// Player final round score and high score banners, also hidden at first

const finalScore = document.querySelector('.final-score');
const highScore = document.querySelector('.high-score');
finalScore.style.visibility = 'hidden';
highScore.style.visibility = 'hidden';

// Targeting the restart button, return to round 0

const restartTheGame = () => {
	roundBanner.style.visibility = 'hidden';
	finalScore.style.visibility = 'hidden';
	highScore.style.visibility = 'hidden';
	round = 0;
	restartSound.play();
	playButton.disabled = false;
	resetChoices();
	disableGridButtons();
	roundBanner.innerText = `Round:${round}`;
	restartButton.style.color = 'white';
	roundBanner.style.color = 'white';
	playButton.innerText = 'START';
};
const restartButton = document.querySelector('.restart-button');
restartButton.addEventListener('click', restartTheGame);

// Functions for enabling/disabling grid buttons

const disableGridButtons = () => {
	for (let i = 0; i < gridButtons.children.length; i++) {
		gridButtons.children[i].disabled = true;
	}
};

const enableGridButtons = () => {
	for (let i = 0; i < gridButtons.children.length; i++) {
		gridButtons.children[i].disabled = false;
	}
};

disableGridButtons();

// Success banner outputs

const successBannerOutputs = {
	0: 'CONGRATS',
	1: 'HOLY COW',
	2: 'UNREAL',
	3: 'LIT',
	4: 'FIRE',
	5: 'AMAZING',
	6: 'WOW',
};

// Failure banner outputs

const failureBannerOutputs = {
	0: 'FAILURE',
	1: 'HUH?',
	2: 'WHAT?',
	3: 'NO NO NO',
	4: 'SOME DAY',
	5: 'NAH DOG',
	6: 'SAD',
};

// Randomly select different banners

const randomBannerSelector = (object) => {
	const randomNumber = Math.floor(Math.random() * 7);
	return object[randomNumber];
};

/////////// Button effect sounds ///////////

// Start sound - Credit ProjectsU012 on freesound.org

const startSound = document.querySelector('.start-sound');

// Victory sound - Credit danlucaz on freesound.org

const victorySound = document.querySelector('.victory-sound');

// Failure sound - Credit EVRetro on freesound.org

const failureSound = document.querySelector('.failure-sound');

// Grid button select sound - Credit Fupicat on freesound.org

const gridSelectSound = document.querySelector('.grid-sound');

// Restart sound - Credit ProjectsU012 on freesound.org

const restartSound = document.querySelector('.restart-sound');

// Info button sounds - Credit pumodi on freesound.org

const infoSound1 = document.querySelector('.info-sound-1');
const infoSound2 = document.querySelector('.info-sound-2');

////////// Targeting modal elements //////////

const infoButton = document.querySelector('.info-button');
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#close');

const openInfoTab = () => {
	modal.style.display = 'block';
	infoSound1.play();
};

infoButton.addEventListener('click', openInfoTab);

const closeInfo = () => {
	modal.style.display = 'none';
	infoSound2.play();
};

closeButton.addEventListener('click', closeInfo);
