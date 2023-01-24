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

function game() {
    let winCount = 0, lossCount = 0, tieCount = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter 'rock', 'paper', or 'scissors':");
        const result = playRound(playerSelection, getComputerChoice());

        if (result == 'win') {
            winCount++;
        } else if (result == 'lose') {
            lossCount++;
        } else {
            tieCount++;
        }
    }

    alert(`You won ${winCount} games, lost ${lossCount}, and tied in ${tieCount}`);
}