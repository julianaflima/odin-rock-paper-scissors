// Get a random number between 0 and 2
function getRandom012() {
	return Math.floor(Math.random() * 3);
}


// Translate random number to computer play (Rock/Paper/Scissor)
function getComputerChoice() {
	let randomNumber = getRandom012();
	let computerSelection;

	// Assign choice to number
	if (randomNumber === 0) {
		return computerSelection = "Rock";
	} else if (randomNumber === 1) {
		return computerSelection = "Paper";
	} else {
		return computerSelection = "Scissor";
	}
}



// Capitalize first letter 
function capitalizeFirstLetter(string) {
	return string.slice(0,1).toUpperCase() + string.slice(1).toLowerCase()
}





let message;
let computerScore = playerScore = 0;

// Compare user play with computer play
function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return message = `It's a tie!`;
	}
	else if (playerSelection === 'Rock' && computerSelection === 'Scissor' || playerSelection === 'Scissor' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Rock') {
		playerScore += 1;
		return message = `You win! ${playerSelection} beats ${computerSelection}`;
	} else {
		computerScore += 1;
		return message = `You lose! ${computerSelection} beats ${playerSelection}`;
	}
	
}




// Allow 5 rounds and announce the winner
function game() {
	for(let i = 1; i < 6; i++) {

		// Ask for user to choose an option
		let playerSelection = capitalizeFirstLetter(prompt(`Round ${i}: Rock, Paper, or Scissor?`));

		// Randomly generate computer play
		let computerSelection = getComputerChoice();

		// Get the winner of the round
		console.log(playRound(playerSelection, computerSelection));
	}

	// Show final score count
	console.log(`Player score: ${playerScore}`);
	console.log(`Computer score: ${computerScore}`);

	//Get the winner of 5 rounds
	if (computerScore > playerScore) {
		console.log(`You lost! ${computerScore} vs ${playerScore}`);
	}	else if (playerScore > computerScore) {
		console.log(`You won! ${playerScore} vs ${computerScore}`);
	} else {
		console.log(`It's a tie! ${computerScore} vs ${playerScore}`);
	}
}

game();
