function computerPlay () {
    let plays = ["rock", "paper", "scissors"];
    let play = plays[Math.floor(Math.random() * plays.length)];
    return play;
}

function playRound(playerSelection, computerSelection) {
    let winner = 0;
    if ( (playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "rock") ) {
        winner = "Player";
    } else if ( (playerSelection == "scissors" && computerSelection == "rock") || 
    (playerSelection == "paper" && computerSelection == "scissors") || 
    (playerSelection == "rock" && computerSelection == "paper") ) {
        winner = "Computer";
    } else {
        winner = "Tie";
    }
    return winner;
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log("Computer: " + computerSelection);
console.log("Player: " + playerSelection);
console.log("Winner: " + playRound(playerSelection, computerSelection));
