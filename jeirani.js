function getComputerChoice () {
    const rps = ['rock', 'paper', 'scissors']
    const ComputerChoice = Math.floor(Math.random() * rps.length);
    return rps[ComputerChoice];
}

function playRound(playerSelection, computerSelection){
    let lower = playerSelection.toLowerCase();
    if(lower == 'paper' && computerSelection == 'rock'){
        return 'you won! paper beats rock';
    }
    else if(lower == 'rock' && computerSelection == 'scissors'){
        return 'you won! rock beats scissors';
    }
    else if(lower == 'scissors' && computerSelection == 'paper'){
        return 'you won! scissors beats paper';
    }
    else if(lower == 'paper' && computerSelection == 'scissors'){
        return 'you lose! scissors beats paper';
    }
    else if(lower == 'scissors' && computerSelection == 'rock'){
        return 'you lose! rock beats scissors';
    }
    else if(lower == 'rock' && computerSelection == 'paper'){
        return 'you lose! paper beats rock';
    }
    else {
        return "it's a tie! you and computer selected the same option."
    }
}

const show = document.getElementById('result');
const score = document.getElementById('dv');
const scorePlayer = document.createElement('p');
const scoreAi = document.createElement('p');
score.append(scorePlayer, scoreAi);

let round = 1;
let playerScore = 0;
let computerScore = 0;

// *game function* \\
function game(player1) {
    show.innerHTML='';
    score.innerHTML='';
    show.innerHTML += `round ${round} - `
    let computer = getComputerChoice();
    const result = playRound(player1, computer)
    show.innerHTML += `${result} <br>`

    if(result.includes('won')){
        playerScore++;
    }
    else if(result.includes('lose')){
        computerScore++;
    }

    score.innerHTML += scorePlayer.textContent = `Your score: ${playerScore} <br>`;
    score.innerHTML += scoreAi.textContent = `Computer score: ${computerScore} <br>`;

    if(playerScore === 5){
        restart();
    }
    else if(computerScore === 5){
        restart();
    }
    else if(playerScore === 3 && computerScore === 0){
        restart();
    }
    round++;
}

// *restart function* \\
function restart(){
    if(playerScore === 3 && computerScore === 0){
        show.innerHTML += "flawless victory <br>";
    }
    else if(computerScore>playerScore){
        show.innerHTML += "it's so over! you lost the game! <br>";
    }
    else if(playerScore>computerScore){
        show.innerHTML += "we're so back! you won the game! <br>"
    }
    else{
        show.innerHTML += "it hasn't even started yet!"
    }


    setTimeout(() => {
        alert('restart')
        round = 1;
        playerScore = 0;
        computerScore = 0;
        show.innerHTML = 'Do you want to play again?';
        score.innerHTML = 'Just click any icon to start again';
    }, 10);
}


//* * getElementById
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', () => game('rock'))
paper.addEventListener('click', () => game('paper'))
scissors.addEventListener('click', () => game('scissors'))