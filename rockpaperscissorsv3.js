//Starting list of possible choices for computer's choice
//and starting counters
const picks = ["ROCK","PAPER","SCISSORS"];
let playerScore = 0
let computerScore = 0
let roundWinner = ""


//Single round function
function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      roundWinner = "tie"
    }
    if
      ((playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
      (playerSelection === "PAPER" && computerSelection === "ROCK") ||
      (playerSelection === "SCISSORS" && computerSelection === "PAPER")) 
      {
        playerScore++
        roundWinner = 'player'
      }
    if
      ((computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
      (computerSelection === "PAPER" && playerSelection === "ROCK") ||
      (computerSelection === "SCISSORS" && playerSelection === "PAPER")) 
      {
        computerScore++
        roundWinner = 'computer'
      }
      updateScoreMessage(roundWinner,playerSelection,computerSelection)
   }

//Computer move "generator"
function computerPlay() {
  return picks[Math.floor(Math.random()*picks.length)];
}

//Checks if game's over
function isGameOver() {
  return playerScore === 5 || computerScore === 5
}
    
//GUI
const scoreInfo = document.getElementById("scoreInfo")
const scoreMessage = document.getElementById('man')
const playerScorePara = document.getElementById("playerScore")
const computerScorePara = document.getElementById("computerScore")
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")
const playerSign = document.getElementById("playerSign")
const computerSign = document.getElementById("computerSign")
const modalEnd = document.getElementById("modalEnd")
const endGameMsg = document.getElementById("endGameMsg")
const playAgainBtn = document.getElementById("playAgainBtn")
const overlay = document.getElementById("overlay")
const span = document.getElementsByClassName("close")[0];

rockBtn.addEventListener("click", () => 
  clickReact("ROCK"))
paperBtn.addEventListener("click", () => 
  clickReact("PAPER"))
scissorsBtn.addEventListener("click", () => 
  clickReact("SCISSORS"))

function clickReact(playerSelection) {
  if (isGameOver()) {
    openEndGameModal()
    return 
  }
  const computerSelection = computerPlay();
  singleRound(playerSelection,computerSelection);
  updateChoices(playerSelection,computerSelection);
  updateScore();
  
  if (isGameOver()) {
    openEndGameModal()
    setFinalMessage()
  }
}

function updateChoices(playerSelection,computerSelection) {
  switch (playerSelection) {
    case "ROCK":
      playerSign.textContent = "???"
      break;
    case "PAPER":
      playerSign.textContent = "???"
      break;
    case "SCISSORS":
      playerSign.textContent = "???";
      break;
  }
  switch (computerSelection) {
    case "ROCK":
      computerSign.textContent = "???"
      break;
    case "PAPER":
      computerSign.textContent = "???"
      break;
    case "SCISSORS":
      computerSign.textContent = "???"
      break;
  }
}
function openEndGameModal() {
  modalEnd.style.display = "block";
}

function updateScore() {
  if (roundWinner === "player") {
    scoreInfo.textContent = "You won!"
  }
  else if (roundWinner === "computer") {
    scoreInfo.textContent = "You lost!"
  }
  else if (roundWinner === "tie") {
    scoreInfo.textContent = "It's a tie!"
  }

  playerScorePara.textContent = `Player: ${playerScore}`
  computerScorePara.textContent = `Computer: ${computerScore}`
}

function updateScoreMessage(roundWinner,playerSelection,computerSelection) {
  if (roundWinner === "player") {
    scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} 
    beats ${computerSelection.toLowerCase()}`
    return
  }
  if (roundWinner === "computer") {
    scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} 
    is beaten by ${computerSelection.toLowerCase()}`
    return
  }
  scoreMessage.textContent = `${capitalizeFirstLetter(
  playerSelection)}
  ties with ${computerSelection.toLowerCase()}`
}

function setFinalMessage() {
  return playerScore > computerScore
    ? (endGameMsg.textContent = 'You won!')
    : (endGameMsg.textContent = 'You lost...')
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

//When the users click on <span> (x), close the modal
span.onclick = function () {
  modalEnd.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalEnd) {
    modalEnd.style.display = "none";
  }
}

playAgainBtn.addEventListener("click", () => 
  restartGame())

function restartGame() {
  playerScore = 0
  computerScore = 0
  scoreInfo.textContent = 'Choose your weapon'
  scoreMessage.textContent = 'First to score 5 points wins the game'
  playerScorePara.textContent = 'Player: 0'
  computerScorePara.textContent = 'Computer: 0'
  playerSign.textContent = '???'
  computerSign.textContent = '???'
  modalEnd.style.display = "none"
}