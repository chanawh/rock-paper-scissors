let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let welcomeDiv = document.getElementById("welcome");
let progressDiv = document.getElementById("progress");
let resultsDiv = document.getElementById("results");
let winnerDiv = document.getElementById("winner");
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
  if (playerInput === "rock" && computerInput === "scissors") {
    progressDiv.innerHTML =
      "Your <b>ROCK</b> beats\nthe computer's <b>SCISSORS</b>!\n\nPlayer earns a point.";
    return playerScore++;
  } else if (playerInput === "paper" && computerInput === "rock") {
    progressDiv.innerHTML =
      "Your <b>PAPER</b> beats\nthe computer's <b>ROCK</b>!\n\nPlayer earns a point.";
    return playerScore++;
  } else if (playerInput === "scissors" && computerInput === "paper") {
    progressDiv.innerHTML =
      "Your <b>SCISSORS</b> beats\nthe computer's <b>PAPER</b>!\n\nPlayer earns a point.";
    return playerScore++;
  } else if (computerInput === "rock" && playerInput === "scissors") {
    progressDiv.innerHTML =
      "The computer's <b>ROCK</b> beats\nyour <b>SCISSORS</b>!\n\nComputer earns a point.";
    return computerScore++;
  } else if (computerInput === "paper" && playerInput === "rock") {
    progressDiv.innerHTML =
      "The computer's <b>PAPER</b> beats\nyour <b>ROCK</b>!\n\nComputer earns a point.";
    return computerScore++;
  } else if (computerInput === "scissors" && playerInput === "paper") {
    progressDiv.innerHTML =
      "The computer's <b>SCISSORS</b> beats\nyour <b>PAPER</b>!\n\nComputer earns a point.";
    return computerScore++;
  } else {
    progressDiv.innerHTML = "<b>Draw</b>!\n\nPlease continue playing.";
  }
}

function startGame() {
  welcomeDiv.innerHTML =
    "Please choose\nRock, Paper, or Scissors.\n\n<b>First</b> to <b>5</b> is the winner.";

  rockBtn.addEventListener("click", () => {
    welcomeDiv.textContent = "";
    evaluateRound("rock", computerChoice(randomInt(1, 3)));
    displayResults();
  });

  paperBtn.addEventListener("click", () => {
    welcomeDiv.textContent = "";
    evaluateRound("paper", computerChoice(randomInt(1, 3)));
    displayResults();
  });

  scissorsBtn.addEventListener("click", () => {
    welcomeDiv.textContent = "";
    evaluateRound("scissors", computerChoice(randomInt(1, 3)));
    displayResults();
  });
}

function displayResults() {
  resultsDiv.textContent = playerScore + "-" + computerScore;

  if (playerScore == 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    progressDiv.textContent = "";
    resultsDiv.textContent = "";
    winnerDiv.textContent = "Player Wins!";
  } else if (computerScore == 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    progressDiv.textContent = "";
    resultsDiv.textContent = "";
    winnerDiv.textContent = "Computer Wins!";
  }
}

startGame();
