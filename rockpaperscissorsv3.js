//Some starting stuff
const picks = ["Rock","Paper","Scissors"];
const computerSelection = computerPlay();
console.log(computerSelection);
let winCounter = 0;

//Alerting winner func
let alertWinner = function(){
    if (winCounter >= 3) {
    alert(`You've won ${winCounter} out of 5 games. You win!`);
 } else if (winCounter === 2.5) {
    alert(`You've won 2.5 out of 5 games. It's a tie!`);
 } else if (winCounter < 2.5) {
    alert(`You've won ${winCounter} out of 5 games. You lost!`);
 }
}

//Works fine
function computerPlay() {
    return picks[Math.floor(Math.random()*picks.length)];
}

//This one works fine
// function singleRound(playerSelection, computerSelection) {
//     let input = playerSelection.toLowerCase();
//     let pcinput = computerSelection.toLowerCase();
//     let score = winCounter;
//     if (input === "rock" && pcinput === "paper") {
//         score = score--;
//         return result = console.log("You lose! Paper beats Rock.")
//     }
//     else if (input === "paper" && pcinput === "scissors") {
//         score = score--;
//         return result = console.log("You lose! Scissors beats Paper.")
//     }
//     else if (input === "scissors" && pcinput === "rock") {
//         score = score--;
//         return result = console.log("You lose! Rock beats Scissors.")
//     }
//     else if (input === pcinput) {
//         score = score;
//         return result = console.log("It's a draw!")
//     }
//     else {
//         score = score++;
//         return result = console.log("You win!")
//     }
//     }

function singleRound(playerSelection, computerSelection) {
    let getPlayerInsensitive = playerSelection.toLowerCase();
    if (getPlayerInsensitive === "rock" && computerSelection === "Rock") {
      winCounter = winCounter;
      return "It's a tie, both are Rock";
    } else if (getPlayerInsensitive === "rock" && computerSelection === "Paper") {
      winCounter = winCounter--;
      return "You Lose! Paper beats Rock";
    } else if (getPlayerInsensitive === "rock" && computerSelection === "Scissors") {
      winCounter = winCounter++;
      return "You win! Rock beats Scissors";
    } else if (getPlayerInsensitive === "paper" && computerSelection === "Rock") {
      winCounter = winCounter++;
      return "You win! Paper beats Rock";
    } else if (getPlayerInsensitive === "paper" && computerSelection === "Paper") {
      winCounter = winCounter;
      return "It's a tie! Both are Paper";
    } else if (getPlayerInsensitive === "paper" && computerSelection === "Scissors") {
      winCounter = winCounter--;
      return "You lose! Scissors beats Paper";
    } else if (getPlayerInsensitive === "scissors" && computerSelection === "Rock") {
      winCounter = winCounter--;
      return "You lose! Rock beats Scissors";
    } else if (getPlayerInsensitive === "scissors" && computerSelection === "Scissors") {
      winCounter = winCounter;
      return "It's a tie! Both are Scissors";
    } else if (getPlayerInsensitive === "scissors" && computerSelection === "Paper") {
      winCounter = winCounter++;
      return "You win! Scissors beat Paper";
    } else {
      return "Check your spelling!";
    } 
   }
    

// function game() {
//     let text = playerSelection.toLowerCase();
//     for (let i = 0; i<5; i++) {
//         while (text !== "rock" && text !== "paper" && text !== "scissors" ) {
//             alert("Input is invalid!");
//             text = prompt("What do you choose? Rock, paper or scissors?", "Rock").toLowerCase();
//             }
//         alert(singleRound(text, computerSelection));
//         //Outputs the winner after 5 games
//         if (i === 4) {
//         alert("You've played 5 games");
//         return alertWinner();
//           }
//         }
//     }
    
//     console.log(game());

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What do you choose? Rock, paper or scissors?", "");
        if (playerSelection === null || playerSelection === "") {
        alert("You clicked Cancel!");
        }
        alert(singleRound(playerSelection, computerPlay()));

      //outputs the winner of 5 games
      if (i === 4) {
        alert("You've played 5 games");
        return alertWinner();
      }
    }
  }
  
  console.log(game());