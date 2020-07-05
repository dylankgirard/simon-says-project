const player = {
	playerChoice: [],
};

const computer = {
	computerChoice: [],
};

const randomChoice = () => Math.floor(Math.random() * 5);

let round0 = 3;

const computerArray = () => {
	let c = [];
	for (let i = 0; i < round0; i++) {
		c.push(randomChoice());
	}
	return c;
};

const advanceRound = () => round0++;

advanceRound();
advanceRound();

console.log(computerArray());
