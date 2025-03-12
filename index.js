console.log("hello world. Let's get this game started")

// Computer's decision
function getComputerChoice(computerResponse) {
    
    computerResponse = Math.random();

    if (computerResponse <= .33) { 
        return console.log("Rock");
    }

    else if (computerResponse <= .66) { 
        return console.log("Paper");
    }

    else {
        return console.log("Scissors");
    }
    
};

getComputerChoice(1);


