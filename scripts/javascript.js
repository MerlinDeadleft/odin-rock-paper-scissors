function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Please enter one of the following: 'rock', 'paper', 'scissors'");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    switch(humanChoice) {
        case "rock":
            return computerChoice == "rock"
                ? 0
                : computerChoice == "paper"
                    ? -1
                    : 1;
        case "paper":
            return computerChoice == "rock"
                ? 1
                : computerChoice == "paper"
                    ? 0
                    : -1;
        case "scissors":
            return computerChoice == "rock"
                ? -1
                : computerChoice == "paper"
                    ? 1
                    : 0;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++)
    {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        const roundResult = playRound(humanChoice, computerChoice);
        
        switch(roundResult) {
            case -1:
                console.log(`You chose: ${humanChoice}. Computer chose: ${computerChoice}.\nYou lose!`);
                computerScore++;
                break;
            case 0:
                console.log(`You chose: ${humanChoice}. Computer chose: ${computerChoice}.\nTie!`);
                break;
            case 1:
                console.log(`You chose: ${humanChoice}. Computer chose: ${computerChoice}.\nYou win!`);
                humanScore++;
                break;
        }
    }

    const gameResult = humanScore > computerScore
        ? "You win!"
        : humanScore < computerScore
            ? "You lose!"
            : "Tie!";
    console.log(`Final Score:\n\tYou:\t\t${humanScore}\n\tComputer:\t${computerScore}\n${gameResult}`);
}

playGame();