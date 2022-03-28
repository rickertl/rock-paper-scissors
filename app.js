
// initialize algorithm variables
let playerTally = 0;
let computerTally = 0;
let result = '';
let rounds = 5;

// initialize DOM variables
const controls = document.querySelector('.controls');
const display = document.querySelector('.display');
const winner = document.querySelector('.winner');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const playagain = document.querySelector('.playagain');
const gameover = document.createElement('div');
gameover.classList.add('gameover');

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
        result = `You Win Round! ${playerSelection} beats ${computerSelection}`;
        ++playerTally;
    } else if ( (playerSelection == "Scissors" && computerSelection == "Rock") || 
    (playerSelection == "Paper" && computerSelection == "Scissors") || 
    (playerSelection == "Rock" && computerSelection == "Paper") ) {
        result = `You Lose Round! ${computerSelection} beats ${playerSelection}`;
        ++computerTally;
    } else {
        result = `Tie! You both chose ${playerSelection}`;
    }
    winner.textContent = result;
    playerScore.textContent = `Player Score: ${playerTally}`;
    computerScore.textContent = `Computer Score: ${computerTally}`;
    if (playerTally === rounds) {
        controls.classList.add('hidden');
        gameover.textContent = 'GAME OVER! You win!';
        display.appendChild(gameover);
        playagain.classList.remove('hidden');
    } else if (computerTally === rounds) {
        controls.classList.add('hidden');
        gameover.textContent = 'GAME OVER! You lose!';
        display.appendChild(gameover);
        playagain.classList.remove('hidden');
    }
}

// initiates a full game
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
