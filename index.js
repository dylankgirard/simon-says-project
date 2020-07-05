const player = {
	playerChoice: [],
};

const computer = {
	computerChoice: [],
};

const randomChoice = () => Math.floor(Math.random() * 5);

const round0 = 3;

for (let i = 0; i < round0; i++) {
	computer.computerChoice.push(randomChoice());
}
