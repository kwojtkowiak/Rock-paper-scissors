//Some starting stuff
const picks = ["Rock","Paper","Scissors"];
const computerSelection = computerPlay();
console.log(computerSelection);
let playerSelection = prompt("What do you choose? Rock, paper or scissors?", "Rock");
let winCounter = 0;

//Alerting winner func
let alertWinner = function(){if (winCounter >= 3) {
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
function singleRound(playerSelection, computerSelection) {
    let input = playerSelection.toLowerCase();
    let pcinput = computerSelection.toLowerCase();
    let score = winCounter;
    if (input === "rock" && pcinput === "paper") {
        score = score--;
        return result = console.log("You lose! Paper beats Rock.")
    }
    else if (input === "paper" && pcinput === "scissors") {
        score = score--;
        return result = console.log("You lose! Scissors beats Paper.")
    }
    else if (input === "scissors" && pcinput === "rock") {
        score = score--;
        return result = console.log("You lose! Rock beats Scissors.")
    }
    else if (input === pcinput) {
        score = score;
        return result = console.log("It's a draw!")
    }
    else {
        score = score++;
        return result = console.log("You win!")
    }
    }
    
    //WIP
function game() {
    for (let i = 0; i<5; i++) {
        inputCheck(playerSelection);
        alert(singleRound(playerSelection, computerSelection));
        //Outputs the winner after 5 games
        if (i === 4) {
        alert("You've played 5 games");
        return alertWinner();
          }
        }
    }
    
    console.log(game());