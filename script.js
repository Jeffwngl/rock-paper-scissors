let c_score = 0;
let h_score = 0;

// get HTML elements
const cpuPoints = document.querySelector("cpuPoints");
const humPoints = document.querySelector("humPoints");
const result = document.getElementById('result');
const playerScore = document.getElementById("h_points");
const computerScore = document.getElementById("c_points");

const choices = ['Rock', 'Paper', 'Scissors'];

document.getElementById("rock").addEventListener('click', () => playRound(0));
document.getElementById("paper").addEventListener('click', () => playRound(1));
document.getElementById("scissors").addEventListener('click', () => playRound(2));

function playConfetti() {
    confetti();
}

function getComputerchoice() {
    let c_choice = Math.floor(Math.random() * 3);
    return c_choice;
}

function resetGame() {
    result.textContent = '';
    computerScore.textContent = '0';
    playerScore.textContent = '0';
}

function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

function enableButtons() {
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
}

function playRound(h_choice) {
    let c_choice = getComputerchoice();

    result.classList.add("fadeIn");

    setTimeout(function () {
        result.classList.remove("fadeIn");
    }, 2000);

    // see who wins
    if (c_choice == h_choice) {
        result.textContent = `Tie! Both sides win!`
    }
    else if ((h_choice == 0 && c_choice == 2) || (h_choice == 1 && c_choice == 0) || (h_choice == 2 && c_choice == 1)) {
        h_score++;
        result.textContent = `You win! ${choices[h_choice]} beats ${choices[c_choice]}.`;
    }
    else {
        c_score++;
        result.textContent = `You lose! ${choices[c_choice]} beats ${choices[h_choice]}.`;
    }

    // update scores
    computerScore.textContent = c_score;
    playerScore.textContent = h_score;

    // check if game has been won
    if (c_score == 5) {
        result.textContent = "You lose! Better luck next time!";
        disableButtons();
    }
    if (h_score == 5) {
        result.textContent = "You win! lucky!";
        playConfetti();
        disableButtons();
    }

}