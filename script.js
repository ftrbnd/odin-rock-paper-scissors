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
    const resultCounter = document.querySelector(`#${result}`);
    resultCounter.textContent = parseInt(resultCounter.textContent) + 1;
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