
function main() {

function getComputerchoice() {
    let c_choice = Math.floor(Math.random() * 3);
    return c_choice;
}

function getHumanchoice() {
    let h_choice = prompt("Please enter your choice: ");

    h_choice = h_choice.toUpperCase().trim();
    let x;
    if (h_choice == "ROCK") {
        x = 0;
    } else if (h_choice == "SCISSORS") {
        x = 1;
    } else if (h_choice == "PAPER") {
        x = 2;
    } else {
        alert("Please enter a valid input.");
        x = 3
    }
    return x;
}

function playRound(humanChoice, ComputerChoice) {
    let outcome;

    if (humanChoice == ComputerChoice) {
        return -1;
    }

    if (humanChoice == 0) {
        if (ComputerChoice == 1) {
            alert("You win! Rock beats Scissors!");
            outcome = 1;
        } else {
            alert("You lose... Paper beats Rock");
            outcome = 0;
        }
    }

    if (humanChoice == 1) {
        if (ComputerChoice == 2) {
            alert("You win! Scissors beats Paper!");
            outcome = 1;
        } else {
            alert("You lose... Rock beats Scissors");
            outcome = 0;
        }
    }

    if (humanChoice == 2) {
        if (ComputerChoice == 0) {
            alert("You win! Paper beats Rock!");
            outcome = 1;
        } else {
            alert("You lose... Scissors beats Paper");
            outcome = 0;
        }
    }

    return outcome;
}

let humanscore = 0;
let computerscore = 0;

let counter = 0;

while (counter < 5) {
    let human = getHumanchoice();
    let computer = getComputerchoice();

    if (human == 3) {
        continue;
    }

    let result = playRound(human, computer);
    
    if (result == 1) {
        humanscore++;
    } else if (result == 0) {
        computerscore++;
    } else {
        alert("Tie!")
        continue;
    }

    console.log(`The new score is... Player: ${humanscore} Computer: ${computerscore}`);
    if (counter == 4) {
        if (humanscore > computerscore) {
            console.log("Player wins!");
        } else {
            console.log("Computer wins!");
        }
    }
    counter++;
}

}
