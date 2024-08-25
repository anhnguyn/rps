let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log('tie');
  }
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore += 1;
      console.log("You lose! Paper beats Rock");
    } else if (computerChoice === "scissors") {
      humanScore += 1;
      console.log("You win! Rock beats scissors");
    }
  }
  if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore += 1;
      console.log("You win! Scissors beats paper");
    } else if (computerChoice === "rock") {
      computerScore += 1;
      console.log("You lose! Rock beats scissors");
    }
  }
  if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore += 1;
      console.log("You lose! Scissors beats paper");
    } else if (computerChoice === "rock") {
      humanScore += 1;
      console.log("You win! Paper beats rock");
    }
  }
}

function getHumanChoice() {
  let input = prompt("rock, paper, or scissors?");
  if (
    input.toLowerCase() === "rock" ||
    input.toLowerCase() === "paper" ||
    input.toLowerCase() === "scissors"
  ) {
    console.log("You chose:", input.toLowerCase());
  } else {
    console.log("Your input is invalid!");
    getHumanChoice();
  }
  return input.toLowerCase();
}

function getComputerChoice() {
  const random = Math.random();
  if (0 <= random < 0.33) {
      console.log("Computer chose: rock");
      return "rock";
  }
  else if (0.33 >= random > 0.66) {
      console.log("Computer chose: scissors");
      return "scissors";
  }
  else {
      console.log("Computer chose: paper");
      return "paper";
  }
}
