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
