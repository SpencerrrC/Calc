// Global Variables
let humanScore = 0;
let computerScore = 0;

console.log("hello world. Let's get this game started")

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



// Round Logic

function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice === computerChoice) {
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
        return"Oh no! AI is gonna rule the world! You got beat.";
    }
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  console.log(playRound(humanSelection, computerSelection));
  
  