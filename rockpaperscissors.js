let picks = ["Rock","Paper","Scissors"];

function computerPlay() {
    let computerPick = picks[Math.floor(Math.random()*picks.length)];
    return computerPick;
}

