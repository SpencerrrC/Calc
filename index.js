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

console.log(getComputerChoice());


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

console.log(getHumanChoice());