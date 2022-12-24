// Get a random number between 0 and 2
function getRandom012() {
	return Math.floor(Math.random() * 3);
}


// Variable to store choice from number from function getComputerChoice
let computerSelection;


// Translate random number to option Rock/Paper/Scissor to get computer input
function getComputerChoice() {
	// Store random number in a variable
	let randomNumber = getRandom012();

	// Assign choice to number
	if (randomNumber === 0) {
		return computerSelection = "Rock";
	} else if (randomNumber === 1) {
		return computerSelection = "Paper";
	} else {
		return computerSelection = "Scissor";
	}
}

computerSelection = getComputerChoice();

console.log(computerSelection);

// Variable to store the result from comparison
let message;

// Compare Player input with computer choice
function playRound(playerSelection, computerSelection) {
	// Call function to get computerSelection
	if (playerSelection === computerSelection) {
		return message = `It's a tie!`;
	}
	else if (playerSelection === 'Rock' && computerSelection === 'Scissor' || playerSelection === 'Scissor' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Rock') {
		return message = `You win! ${playerSelection} beats ${computerSelection}`;
	} else {
		return message = `You lose! ${computerSelection} beats ${playerSelection}`;
	}
}



playRound('Paper', computerSelection);

console.log(message);