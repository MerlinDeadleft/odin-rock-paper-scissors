let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const logsDiv = document.querySelector("#logs");

rockBtn.addEventListener("click", () => handleChoiceButtonClicked("rock"));
paperBtn.addEventListener("click", () => handleChoiceButtonClicked("paper"));
scissorsBtn.addEventListener("click", () => handleChoiceButtonClicked("scissors"));

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

function handleChoiceButtonClicked(choice) {
    const computerChoice = getComputerChoice();
    const roundResult = playRound(choice, computerChoice);
        
    switch(roundResult) {
        case -1:
            log(`You chose: ${choice}. Computer chose: ${computerChoice}.\nYou lose!`);
            computerScore++;
            break;
        case 0:
            log(`You chose: ${choice}. Computer chose: ${computerChoice}.\nTie!`);
            break;
        case 1:
            log(`You chose: ${choice}. Computer chose: ${computerChoice}.\nYou win!`);
            humanScore++;
            break;
    }

    if(humanScore === 5 || computerScore === 5)
    {
        const gameResult = humanScore > computerScore
        ? "You win!"
        : humanScore < computerScore
        ? "You lose!"
        : "Tie!";
        log(`Final Score:\n\tYou:\t\t${humanScore}\n\tComputer:\t${computerScore}\n${gameResult}`);
        log("-".repeat(30));
        humanScore = 0;
        computerScore = 0;

        rockBtn.toggleAttribute("disabled");
        paperBtn.toggleAttribute("disabled");
        scissorsBtn.toggleAttribute("disabled");

        const playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Play Again";
        playAgainButton.addEventListener("click", () =>{
            rockBtn.toggleAttribute("disabled");
            paperBtn.toggleAttribute("disabled");
            scissorsBtn.toggleAttribute("disabled");
            logsDiv.replaceChildren();
        })
        logsDiv.appendChild(playAgainButton);
    }
}

function log(message) {
    const p = document.createElement("p");
    p.textContent = message;
    logsDiv.appendChild(p);
}