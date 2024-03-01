let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
    // If score is null (not found in localStorage), initialize it
    score = {
        wins: 0,
        loses: 0,
        ties: 0
    };
}


function pickComputerMove() {
    let computerMove = '';
    num = Math.random();
    if (num < 1/3) {
        computerMove = 'rock';
    }
    else if (num < 2/3) {
        computerMove = 'paper';
    }
    else {
        computerMove = 'scissor';
    }
    return computerMove;
}
function playGame(playerMove) {
    let result = '';
    computerMove = pickComputerMove();
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        }
        else if (computerMove === 'paper') {
            result = 'You Lose';
        }
        else {
            result = 'You Win';
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'paper') {
            result = 'Tie';
        }
        else if (computerMove === 'scissor') {
            result = 'You Lose';
        }
        else {
            result = 'You Win';
        }
    }
    else {
        if (computerMove === 'scissor') {
            result = 'Tie';
    }
    else if (computerMove === 'rock') {
        result = 'You Lose';
    }
    else {
        result = 'You Win';
    }
    }

    if (result === 'You Win') {
        score.wins++;
    }
    else if (result === "You Lose") {
        score.loses++;
    }
    else {
        score.ties++;
    }

    localStorage.setItem('score',JSON.stringify(score));

    alert(`Computer Chose ${computerMove}. You Chose ${playerMove}. ${result}
Wins: ${score.wins}. Losses: ${score.loses}. Ties: ${score.ties}`);
}
function reset() {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    alert(`RESET DONE.`)
}
