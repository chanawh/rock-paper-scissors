let playerScore = 0;
let computerScore = 0;

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
  console.log("Computer chose " + computerInput + ".");

  if (playerInput === "rock" && computerInput === "scissors") {
    console.log("Player wins, rock beats scissors!");
    return playerScore++;
  } else if (playerInput === "paper" && computerInput === "rock") {
    console.log("Player wins, paper beats rock!");
    return playerScore++;
  } else if (playerInput === "scissors" && computerInput === "paper") {
    console.log("Player wins, scissors beats paper!");
    return playerScore++;
  } else if (computerInput === "rock" && playerInput === "scissors") {
    console.log("Computer wins, rock beats scissors!");
    return computerScore++;
  } else if (computerInput === "paper" && playerInput === "rock") {
    console.log("Computer wins, paper beats rock!");
    return computerScore++;
  } else if (computerInput === "scissors" && playerInput === "paper") {
    console.log("Computer wins, scissors beats paper!");
    return computerScore++;
  } else if (playerInput === computerInput) {
    console.log("Draw, neither player nor computer wins.");
  } else {
    console.log("Invalid input, please try again.");
  }
}

function startGame() {
  let rockBtn = document.getElementById("rock");
  let paperBtn = document.getElementById("paper");
  let scissorsBtn = document.getElementById("scissors");
  let resultsDiv = document.getElementById("results");

  rockBtn.addEventListener("click", () => {
    console.log("Player chose rock.");
    evaluateRound("rock", computerChoice(randomInt(1, 3)));
    resultsDiv.textContent = playerScore + "-" + computerScore;
  });

  paperBtn.addEventListener("click", () => {
    console.log("Player chose paper.");
    evaluateRound("paper", computerChoice(randomInt(1, 3)));
    resultsDiv.textContent = playerScore + "-" + computerScore;
  });

  scissorsBtn.addEventListener("click", () => {
    console.log("Player chose scissors.");
    evaluateRound("scissors", computerChoice(randomInt(1, 3)));
    resultsDiv.textContent = playerScore + "-" + computerScore;
  });
}

startGame();
