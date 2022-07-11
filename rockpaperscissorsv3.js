//Some starting stuff
const picks = ["Rock","Paper","Scissors"];
const computerSelection = computerPlay();
console.log(computerSelection);
let winCounter = 0;

//Alerting winner func
function alertWinner() {
    if (winCounter >= 3) {
        return alert(`You've won ${winCounter} out of 5 games. You win!`);
    } else if (winCounter === 2.5) {
        return alert(`You've won 2.5 out of 5 games. It's a tie!`);
    } else {
        return alert(`You've won ${winCounter} out of 5 games. You lost!`);
    }
}

//Computer move
function computerPlay() {
    return picks[Math.floor(Math.random()*picks.length)];
}
//Single round function
function singleRound(playerSelection, computerSelection) {
    let getPlayerInsensitive = playerSelection.toLowerCase();
    if (getPlayerInsensitive === "rock" && computerSelection === "Rock") {
      winCounter = winCounter+0.5;
      return "It's a tie, both are Rock";
    } else if (getPlayerInsensitive === "rock" && computerSelection === "Paper") {
      winCounter = winCounter;
      return "You Lose! Paper beats Rock";
    } else if (getPlayerInsensitive === "rock" && computerSelection === "Scissors") {
      winCounter = winCounter+1;
      return "You win! Rock beats Scissors";
    } else if (getPlayerInsensitive === "paper" && computerSelection === "Rock") {
      winCounter = winCounter+1;
      return "You win! Paper beats Rock";
    } else if (getPlayerInsensitive === "paper" && computerSelection === "Paper") {
        winCounter = winCounter+0.5;
      return "It's a tie! Both are Paper";
    } else if (getPlayerInsensitive === "paper" && computerSelection === "Scissors") {
      winCounter = winCounter;
      return "You lose! Scissors beats Paper";
    } else if (getPlayerInsensitive === "scissors" && computerSelection === "Rock") {
      winCounter = winCounter;
      return "You lose! Rock beats Scissors";
    } else if (getPlayerInsensitive === "scissors" && computerSelection === "Scissors") {
        winCounter = winCounter+0.5;
      return "It's a tie! Both are Scissors";
    } else if (getPlayerInsensitive === "scissors" && computerSelection === "Paper") {
      winCounter = winCounter+1;
      return "You win! Scissors beat Paper";
    } else {
      return "Check your spelling!";
    } 
   }
    
//Main game
/* function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What do you choose? Rock, paper or scissors?", "");
        if (playerSelection === null || playerSelection === "") {
        alert("You clicked Cancel!");
        }
        alert(singleRound(playerSelection, computerPlay()));
        //outputs the winner of 5 games
        if (i === 4) {
        alert("You've played 5 games");}
    }
        alertWinner();
    }
   */
  console.log(game());