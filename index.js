// Global Variables

console.log("hello world. Let's get this game started")
console.log(playGame());
// Computer's decision
function getComputerChoice() {
    
    computerResponse = Math.random();

    if (computerResponse <= .33) { 
        return "Rock";
    }

    else if (computerResponse <= .66) { 
        return "Paper";
    }

    else {
        return "Scissors";
    }
}



// Human Choice Algorithm
function getHumanChoice() {
    let humanResponse = prompt("Enter choice here");

    if (humanResponse === "rock") {
        return "Rock";
    }
    else if (humanResponse === "paper") {
        return "Paper";
    }
    else if (humanResponse === "scissors") {
        return "Scissors";
    }
}



// Game Logic
function playGame() {
    
    // Game Logic
    const numberRounds = 5;
    let roundCount = 0;
    let humanScore = 0;
    let computerScore = 0;
    

    while (roundCount < numberRounds) {
        roundCount += 1;
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
    }

    if (humanScore > computerScore) {
        return `Humans won! Final score of H: ${humanScore} and C: ${computerScore}`;
    }
    else if (humanScore === computerScore) {
        return `It's a tie! Final score of H: ${humanScore} and C: ${computerScore} and roundcount: ${roundCount}`;
    }
    else {
        return `Computer won! Final score of H: ${humanScore} and C: ${computerScore} and roundcount: ${roundCount}`;
    }
   

    function playRound(humanChoice, computerChoice) {
        
        if (humanChoice === computerChoice) {
            humanScore += 0;
            console.log("Draw")
            return "Draw-- No one wins the round";
        }

        else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            humanScore += 1;
            console.log(humanScore);
            return "Congrats! Human won the round; Rock beat Scissors";
        }

        else if (humanChoice === "Paper" && computerChoice === "Rock") {
            humanScore += 1;
            console.log(humanScore);
            return "Congrats! Human won the round; Paper beat Rock";
        }

        else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            humanScore += 1;
            console.log(humanScore);
            return "Congrats! Human won the round; Scissors beat Paper";
        }
        else {
            computerScore += 1;
            return"Oh no! AI is gonna rule the world! You got beat.";
        }
    }
    
}
