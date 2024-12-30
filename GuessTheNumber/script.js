const randomNo = Math.floor(Math.random() * 100) + 1; 

const guessField = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guesses = document.querySelector(".guesses");
const guessRemain = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

let previous = []; 
let chances = 0; 
let playGame = true; 

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault(); 
    const guess = parseInt(guessField.value); 
    validateGuess(guess); 
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100.");
  } else {
    if (previous.includes(guess)) {
      alert("You already guessed this number. Try a different one!");
    } else {
      previous.push(guess); 
      chances++; 
      if (chances > 10) {
        displayGuess(guess);
        displayMessage(`Oops! You're out of chances. The correct number was ${randomNo}.`);
        endGame();
      } else {
        displayGuess(guess);
        checkGuess(guess);
      }
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNo) {
    displayMessage(`Congratulations! You guessed the correct number! 🎉`);
    endGame();
  } else if (guess < randomNo) {
    displayMessage(`Too low! Try again.`);
  } else {
    displayMessage(`Too high! Try again.`);
  }
}

function displayGuess(guess) {
  guessField.value = ""; 
  guesses.innerHTML += `${guess}, `; 
  guessRemain.innerHTML = `${10 - chances}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `${message}`; 
}

function endGame() {
  playGame = false; 
  guessField.disabled = true; 
  submit.disabled = true; 
  lowOrHi.innerHTML += " Game over!"; 
}

function startGame(){

}



