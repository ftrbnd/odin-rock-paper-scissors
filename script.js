function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    [playerSelection, computerSelection] = [playerSelection.toLowerCase(), computerSelection.toLowerCase()];

    let result;
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'paper') {
                result = 'lose';
            } else if (computerSelection == 'scissors') {
                result = 'win';
            } else {
                result = 'tie';
            }
            break;
        case 'paper':
            if (computerSelection == 'scissors') {
                result = 'lose';
            } else if (computerSelection == 'rock') {
                result = 'win';
            } else {
                result = 'tie';
            }
            break;
        case 'scissors':
            if (computerSelection == 'rock') {
                result = 'lose';
            } else if (computerSelection == 'paper') {
                result = 'win';
            } else {
                result = 'tie';
            }
            break;
        default:
            break;
    }

    return result;
}

function displayResult(result) {
    const h1 = document.querySelector('#game-result');
    if (h1) {
        h1.remove();
    }

    const resultCounter = document.querySelector(`#${result}`);
    resultCounter.textContent = parseInt(resultCounter.textContent) + 1;

    if (resultCounter.textContent == '5' && result != 'tie') {
        announceWinner(result);
    }
}

function announceWinner(result) {
    const scoresDiv = document.querySelector('.scores');
    const h1 = document.createElement('h1');
    h1.setAttribute('id', 'game-result');

    if (result == 'win') {
        h1.textContent = 'You win!';
    } else {
        h1.textContent = 'You lose :(';
    }

    const winsCounter = document.querySelector('#win');
    const lossCounter = document.querySelector('#lose');
    const tieCounter = document.querySelector('#tie');

    winsCounter.textContent = 0;
    lossCounter.textContent = 0;
    tieCounter.textContent = 0;

    scoresDiv.appendChild(h1);
}

function game() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            displayResult(playRound(button.textContent, getComputerChoice()));
        });
    });
}

game();