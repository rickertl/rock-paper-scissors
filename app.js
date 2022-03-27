/**
 * 1) get players input
 * 2) get computers input
 * 3) compare
 * 4) announce winnner
 * 5) display running score
 * 6) announce match winner after a player = 5 
 */


// initialize variables
let playerTally = 0;
let computerTally = 0;
let result = '';
let rounds = 5;

//gets computer's random play
function computerPlay() {
    const computerSelections = ["Rock", "Paper", "Scissors"];
    const computerSelection = computerSelections[Math.floor(Math.random() * computerSelections.length)];
    return computerSelection;
}

//plays a round and determines winner or tie...plus keeps score
function playRound(playerSelection, computerSelection) {
    if ( (playerSelection == "Rock" && computerSelection == "Scissors") || 
    (playerSelection == "Scissors" && computerSelection == "Paper") || 
    (playerSelection == "Paper" && computerSelection == "Rock") ) {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
        ++playerTally;
    } else if ( (playerSelection == "Scissors" && computerSelection == "Rock") || 
    (playerSelection == "Paper" && computerSelection == "Scissors") || 
    (playerSelection == "Rock" && computerSelection == "Paper") ) {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        ++computerTally;
    } else {
        result = `Tie! You both chose ${playerSelection}`;
    }
    const display = document.querySelector('.display');
    display.textContent = `${result} Player Score: ${playerTally} Computer Score: ${computerTally}`;
    if (playerTally === rounds) {
        display.textContent += ` 
        GAME OVER! You win!`;
        return;
    } else if (computerTally === rounds) {
        display.textContent += ` 
        GAME OVER! Computer wins!`;
        return;
    }
}

function game() {
        // query all player selection buttons
        const buttons = document.querySelectorAll('button');
        // loop through each button
        buttons.forEach((button) => {
            // and add a 'click' listener
            button.addEventListener('click', () => {
                const playerSelection = button.id;
                const computerSelection = computerPlay();
                playRound(playerSelection, computerSelection);
            });
        });
}

game();
