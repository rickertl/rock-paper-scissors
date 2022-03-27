
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
    const controls = document.querySelector('.controls');
    const display = document.querySelector('.display');
    const winner = document.querySelector('.winner');
    const score = document.querySelector('.score');
    const playagain = document.querySelector('.playagain');
    winner.textContent = result;
    score.textContent = `Player Score: ${playerTally} Computer Score: ${computerTally}`;
    const gameover = document.createElement('div');
    gameover.classList.add('gameover');
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
