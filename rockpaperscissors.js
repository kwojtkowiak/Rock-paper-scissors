const picks = ["Rock","Paper","Scissors"];
const computerSelection = computerPlay();
const playerSelection = prompt("What do you choose? Rock, paper or scissors?")

function computerPlay() {
    return picks[Math.floor(Math.random()*picks.length)];
}

function singleRound(playerSelection, computerSelection) {
    if 
}