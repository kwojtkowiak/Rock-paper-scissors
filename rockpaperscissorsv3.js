//Starting list of possible choices for computer's choice
//and starting counters
const picks = ["ROCK","PAPER","SCISSORS"];
const computerSelection = computerPlay();
let playerScore = 0
let computerScore = 0
let roundWinner = ""


//Single round function
function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      roundWinner = "tie"
    }
    else if
      ((playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
      (playerSelection === "PAPER" && computerSelection === "ROCK") ||
      (playerSelection === "SCISSORS" && computerSelection === "PAPER")) 
      {
        playerScore++
        roundWinner = 'player'
      }
    else
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
const span = document.getElementsByClassName("close")

rockBtn.addEventListener("click", () => 
  clickReact("ROCK"))
paperBtn.addEventListener("click", () => 
  clickReact("PAPER"))
scissorsBtn.addEventListener("click", () => 
  clickReact("SCISSORS"))

function clickReact(playerSelection) {
  if (isGameOver()) {
    openEndGameModal()
    return n 
  }
  singleRound(playerSelection,computerSelection);
  updateScoreMessage
}