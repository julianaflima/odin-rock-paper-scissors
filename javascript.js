// Set score to 0 when page is refreshed
let computerScore = playerScore = 0;
let counter = 1;
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

// Get a random number and translate into a play
function getComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 3);
	switch (randomNumber) {
		case 0: return "Rock";
		case 1: return "Paper";
		case 2: return "Scissor";
	}
}

// Disable button
function disableButton(){
	buttons.forEach(button =>
		button.removeEventListener('click', playRound));
}

// Get winner of each round
function playRound(e) {
	let playerSelection = e.target.textContent;
	let computerSelection = getComputerChoice();
	let roundMessage;

	if (playerSelection === computerSelection) {
		roundMessage = `It's a tie!`;
	}	else if (playerSelection === 'Rock' && computerSelection === 'Scissor' || playerSelection === 'Scissor' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Rock') {
		playerScore += 1;
		roundMessage = `You win! ${playerSelection} beats ${computerSelection}`;
	} else {
		computerScore += 1;
		roundMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
	}

	const roundResult = document.createElement('div');
	roundResult.textContent = `Round ${counter}: ${roundMessage}`;
	body.appendChild(roundResult);
	++counter;

	// End game when it gets to round 5
	if (counter === 6) endGame();
}

function endGame() {
		disableButton();
		let finalMessage = '';

		if (computerScore > playerScore) {
			finalMessage = `You lost! ${computerScore} vs ${playerScore}`
		}	else if (playerScore > computerScore) {
			finalMessage = `You won! ${playerScore} vs ${computerScore}`;
		} else {
			finalMessage = `It's a tie! ${computerScore} vs ${playerScore}`;
		}

		const finalResult = document.createElement('div')
		finalResult.innerHTML = finalMessage + '<br> Reload the page to play again.';
		body.insertBefore(finalResult, body.lastElementChild.nextSibling);
	// }
}

buttons.forEach(button => {
	button.addEventListener('click', playRound);
});
