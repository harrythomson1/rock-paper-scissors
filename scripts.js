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

// Stops the game when 5 is reached by either side
function checkResult() {
    if (playerScore >= 5) {
        textScore.textContent = `WINNER! Final Score - Player:${playerScore} Computer:${computerScore}`
        document.getElementById("rock").removeEventListener("click", function(){playRound("rock")});
    }
    else if (computerScore >= 5) {
        textScore.textContent = `Loser! Final Score - Player:${playerScore} Computer:${computerScore}`
    }
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    textScore.textContent = "Rock Paper Scissors, first to five!";
}

textScore = document.getElementById("textScore");
reset = document.getElementById("reset");
rock = document.getElementById("rock");
paper = document.getElementById("paper");
scissors = document.getElementById("scissors");
rock.addEventListener("click", function(){playRound("rock")});
paper.addEventListener("click", function(){playRound("paper")});
scissors.addEventListener("click", function(){playRound("scissors")});
reset.addEventListener("click", function(){newGame()})


//Generate random integer from 0-2
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}