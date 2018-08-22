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

function startRound(playerInput, computerInput) {
  let player = playerInput.toLowerCase();

  if (player === "rock" && computerInput === "scissors") {
    console.log("Player wins, rock beats scissors!");
  } else if (player === "paper" && computerInput === "rock") {
    console.log("Player wins, paper beats rock!");
  } else if (player === "scissors" && computerInput === "paper") {
    console.log("Player wins, scissors beats paper!");
  } else if (computerInput === "rock" && player === "scissors") {
    console.log("Computer wins, rock beats scissors!");
  } else if (computerInput === "paper" && player === "rock") {
    console.log("Computer wins, paper beats rock!");
  } else if (computerInput === "scissors" && player === "paper") {
    console.log("Computer wins, scissors beats paper!");
  } else {
    console.log("Draw, neither player nor computer wins.");
  }
}

function game() {
  let computerRPS = computerChoice(randomInt(1, 3));
  let playerRPS = prompt("Choose rock, paper, or scissors.");

  console.log(computerRPS);
  startRound(playerRPS, computerRPS);
}

game();
