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
