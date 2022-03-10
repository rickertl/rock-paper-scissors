//gets computer's random play
function computerPlay() {
    const plays = ["Rock", "Paper", "Scissors"];
    const play = plays[Math.floor(Math.random() * plays.length)];
    return play;
}

//gets player's inputted play
function playerPlay() {
    const play = prompt("What's your play?").toLowerCase();
    return play.charAt(0).toUpperCase() + play.slice(1);
}

//plays a round and determines winner or tie
function playRound(playerSelection, computerSelection) {
    let result = 0;
    if ( (playerSelection == "Rock" && computerSelection == "Scissors") || 
    (playerSelection == "Scissors" && computerSelection == "Paper") || 
    (playerSelection == "Paper" && computerSelection == "Rock") ) {
        result = "You Win! " + playerSelection + " beats " + computerSelection;
    } else if ( (playerSelection == "Scissors" && computerSelection == "Rock") || 
    (playerSelection == "Paper" && computerSelection == "Scissors") || 
    (playerSelection == "Rock" && computerSelection == "Paper") ) {
        result = "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
        result = "Tie! You both chose " + playerSelection;
    }
    return result;
}

//plays five rounds and keeps score
function game() {
    for (let i = 0; i < 5; i++) {
        // your code here!
    }
}

const computerSelection = computerPlay();
const playerSelection = playerPlay();
console.log("Computer: " + computerSelection);
console.log("Player: " + playerSelection);
console.log(playRound(playerSelection, computerSelection));