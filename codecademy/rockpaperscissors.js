
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput;
    } else {
        console.log('Error!')
    }
}

const getComputerChoice = () => {
    switch(Math.floor(Math.random()*3)){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function determineWinner(UserChoice, ComputerChoice){
    if (UserChoice === ComputerChoice){
        return 'The game is a tie';
    }
    if (UserChoice === 'rock'){
        if (ComputerChoice === 'paper'){
            return 'Computer won';
        } else {
            return 'You won';
        }
    } else if (UserChoice === 'paper'){
        if (UserChoice === 'rock' || UserChoice === 'paper'){
            return 'Computer won';
        } else {
            return 'You won';
        }
    } else if (UserChoice === 'scissors'){
        if(UserChoice === 'rock' || UserChoice === 'paper'){
            return 'Computer won';
        } else {
            return 'You won';
        }
    }
}
const playGame = () => {
    let user = prompt("What is your choice?")
    const userChoice = getUserChoice(user);
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
