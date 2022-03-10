//gets computer's random play
function computerPlay() {
    const cPlays = ["Rock", "Paper", "Scissors"];
    const cPlay = cPlays[Math.floor(Math.random() * cPlays.length)];
    return cPlay;
}

//gets player's inputted play
function playerPlay() {
    const pPlay = prompt("What's your play?").toLowerCase();
    return pPlay.charAt(0).toUpperCase() + pPlay.slice(1);
}

//plays a round and determines winner or tie
function playRound(playerSelection, computerSelection, playerTally, computerTally) {
    let result;
    if ( (playerSelection == "Rock" && computerSelection == "Scissors") || 
    (playerSelection == "Scissors" && computerSelection == "Paper") || 
    (playerSelection == "Paper" && computerSelection == "Rock") ) {
        result = "You Win! " + playerSelection + " beats " + computerSelection;
        playerTally++;
    } else if ( (playerSelection == "Scissors" && computerSelection == "Rock") || 
    (playerSelection == "Paper" && computerSelection == "Scissors") || 
    (playerSelection == "Rock" && computerSelection == "Paper") ) {
        result = "You Lose! " + computerSelection + " beats " + playerSelection;
        computerTally++;
    } else {
        result = "Tie! You both chose " + playerSelection;
    }
    return {result, playerTally, computerTally};
}

//plays five rounds and keeps score
function game() {
    let playerTally = 0;
    let computerTally = 0;
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = playerPlay();
        //console.log("Computer: " + computerSelection);
        //console.log("Player: " + playerSelection);
        let results = playRound(playerSelection, computerSelection, playerTally, computerTally);
        let result = results.result;
        playerTally = results.playerTally;
        computerTally = results.computerTally;
        console.log(result);
        console.log("Player score: " + playerTally);
        console.log("Computer score: " + computerTally);
    }
    console.log(`Game over!\n-Final Score-\nPlayer: ${playerTally}\nComputer: ${computerTally}`);
}

game();