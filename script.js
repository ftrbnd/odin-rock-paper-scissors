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

    let winningSelection, losingSelection;
    if (result == 'win') {
        winningSelection = playerSelection;
        losingSelection = computerSelection;
    } else if (result == 'lose') {
        losingSelection = playerSelection;
        winningSelection = computerSelection;
    } else {
        return `Tie! You both selected ${playerSelection[0].toUpperCase() + playerSelection.substring(1)}`;
    }

    return `You ${result}! ${winningSelection[0].toUpperCase() + winningSelection.substring(1)} beats ${losingSelection[0].toUpperCase() + losingSelection.substring(1)}`;
}