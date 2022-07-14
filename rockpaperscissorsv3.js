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
  if (playerScore === 5 || computerScore === 5)
}
    
  console.log(game());