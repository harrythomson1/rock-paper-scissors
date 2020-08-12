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
        if (playerScore < 5 && computerScore < 5) {
        playerScore += 1;
        textScore.textContent = `You win! Rock beats Scissors current score - Player:${playerScore} Computer:${computerScore}`
        checkResult()
        }
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        if (playerScore < 5 && computerScore < 5) {
        playerScore += 1;
        textScore.textContent = `You win! Scissors beats Paper current score - Player:${playerScore} Computer:${computerScore}`
        checkResult()
        }
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        if (playerScore < 5 && computerScore < 5) {
        playerScore += 1;
        textScore.textContent = `You win! Paper beats rock current score - Player:${playerScore} Computer:${computerScore}`
        checkResult()
        }
    }

    //Player loses
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        if (playerScore < 5 && computerScore < 5) {
        computerScore += 1;
        textScore.textContent = `You lose! Paper beats rock current score - Player:${playerScore} Computer:${computerScore}`
        checkResult()
        }
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        if (playerScore < 5 && computerScore < 5) {
        computerScore += 1;
        textScore.textContent = `You lose! Rock beats Scissors current score - Player:${playerScore} Computer:${computerScore}`
        checkResult()
        }
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
        if (playerScore < 5 && computerScore < 5) {
        computerScore += 1;
        textScore.textContent = `You lose! Scissors beats paper current score - Player:${playerScore} Computer:${computerScore}`
        checkResult()
        }
    }

    //Draw
    else if ((playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") || (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") || (playerSelection.toLowerCase() == "rock" && computerSelection == "rock")) {
        if (playerScore < 5 && computerScore < 5) {
        textScore.textContent = `Draw! current score - Player:${playerScore} Computer:${computerScore}`
        checkResult()
        }
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

// Stops the game when 5 is reached by either side
function checkResult() {
    if (playerScore >= 5) {
        textScore.textContent = "WINNER!"
        document.getElementById("rock").removeEventListener("click", function(){playRound("rock")});
    }
    else if (computerScore >= 5) {
        textScore.textContent = "Loser!"
    }
}

textScore = document.getElementById("textScore");
rock = document.getElementById("rock");
paper = document.getElementById("paper");
scissors = document.getElementById("scissors");
rock.addEventListener("click", function(){playRound("rock")});
paper.addEventListener("click", function(){playRound("paper")});
scissors.addEventListener("click", function(){playRound("scissors")});



//Generate random integer from 0-2
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}