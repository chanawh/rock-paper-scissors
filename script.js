function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerChoice(num) {
  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function evaluateRound(playerInput, computerInput) {
  let playerChoice = playerInput.toLowerCase();

  if (playerChoice === "rock" && computerInput === "scissors") {
    console.log("Player wins, rock beats scissors!");
  } else if (playerChoice === "paper" && computerInput === "rock") {
    console.log("Player wins, paper beats rock!");
  } else if (playerChoice === "scissors" && computerInput === "paper") {
    console.log("Player wins, scissors beats paper!");
  } else if (computerInput === "rock" && playerChoice === "scissors") {
    console.log("Computer wins, rock beats scissors!");
  } else if (computerInput === "paper" && playerChoice === "rock") {
    console.log("Computer wins, paper beats rock!");
  } else if (computerInput === "scissors" && playerChoice === "paper") {
    console.log("Computer wins, scissors beats paper!");
  } else if (playerChoice === computerInput) {
    console.log("Draw, neither player nor computer wins.");
  } else {
    console.log("Invalid input, please try again.");
  }
}

function startGame() {
  let playerRPS = prompt("Choose rock, paper, or scissors.").toLowerCase();
  let computerRPS = computerChoice(randomInt(1, 3));

  console.log("Player chose " + playerRPS + ".");
  console.log("Computer chose " + computerRPS + ".");

  evaluateRound(playerRPS, computerRPS);
}

for (let i = 0; i < 5; i++) {
  startGame();
}
