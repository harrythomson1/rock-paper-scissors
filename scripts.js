//Computer choice
function computerPlay() {
    let computerChoice = getRandomInt(3);
    if (computerChoice == 0) {
        return "rock"
    }
    else if (computerChoice == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
} 

let computerScore = 0
let playerScore = 0

//Plays a round of Rock Paper Scissors
function playRound (playerSelection, computerSelection) {
    computerSelection = computerPlay();

    //Player wins
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        return `You win! Rock beats Scissors current score - Player:${playerScore} Computer:${computerScore}`
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        return `You win! Scissors beats Paper current score - Player:${playerScore} Computer:${computerScore}`
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        playerScore += 1;
        return `You win! Paper beats rock current score - Player:${playerScore} Computer:${computerScore}`
    }

    //Player loses
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        computerScore += 1;
        return `You lose! Paper beats rock current score - Player:${playerScore} Computer:${computerScore}`
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        return `You lose! Rock beats Scissors current score - Player:${playerScore} Computer:${computerScore}`
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
        computerScore += 1;
        return `You lose! Scissors beats paper current score - Player:${playerScore} Computer:${computerScore}`
    }

    //Draw
    else if ((playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") || (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") || (playerSelection.toLowerCase() == "rock" && computerSelection == "rock")) {
        return `Draw! current score - Player:${playerScore} Computer:${computerScore}`
    }

    //Incorrect information given
    else {
        return "Please enter either 'rock', 'paper' or 'scissors'"
    }
}   
    //Plays a five round game
    function game() {
        for (i = 0; i < 5; i++) {
            choice = prompt ("Rock, Paper, Scissors?", "");
            alert(playRound(choice));
        }
        if (playerScore > computerScore) {
            alert(`Final Score - Player:${playerScore} Computer:${computerScore}. Congratulations!`)
        }
        else if (computerScore > playerScore) {
            alert(`Final Score - Player:${playerScore} Computer:${computerScore}. Unlucky!`)
        }
        else if (computerScore == playerScore) {
            alert(`Final Score - Player:${playerScore} Computer:${computerScore}. It's a draw!`)
        }
        //Reset player scores
        playerScore = 0
        computerScore = 0
    }

//Generate random integer from 0-2
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}