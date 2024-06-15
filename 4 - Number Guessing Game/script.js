// script.js
document.addEventListener('DOMContentLoaded', function() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let guesses = [];
    let maxGuesses = 10;

    const guessField = document.getElementById('guessField');
    const guessSubmit = document.querySelector('.guessSubmit');
    const guessesSpan = document.querySelector('.guesses');
    const lastResultSpan = document.querySelector('.lastResult');
    const lowOrHi = document.querySelector('.lowOrHi');

    guessSubmit.addEventListener('click', function(event) {
        event.preventDefault();
        const userGuess = Number(guessField.value);
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert('Please enter a valid number between 1 and 100.');
            return;
        }
        
        guesses.push(userGuess);
        const remainingGuesses = maxGuesses - guesses.length;
        
        guessesSpan.textContent = guesses.join(', ');
        lastResultSpan.textContent = remainingGuesses;

        if (userGuess === randomNumber) {
            lowOrHi.textContent = 'Congratulations! You guessed the right number!';
            lowOrHi.style.color = 'green';
            endGame();
        } else if (remainingGuesses === 0) {
            lowOrHi.textContent = 'Sorry, you\'ve run out of guesses! The number was ' + randomNumber;
            lowOrHi.style.color = 'red';
            endGame();
        } else {
            lowOrHi.textContent = userGuess < randomNumber ? 'Too low!' : 'Too high!';
            lowOrHi.style.color = 'yellow';
        }

        guessField.value = '';
        guessField.focus();
    });

    function endGame() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        const resetButton = document.createElement('button');
        resetButton.textContent = 'Start New Game';
        resetButton.classList.add('resetButton');
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
    }

    function resetGame() {
        guesses = [];
        randomNumber = Math.floor(Math.random() * 100) + 1;
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessesSpan.textContent = '';
        lastResultSpan.textContent = maxGuesses;
        lowOrHi.textContent = '';
        guessField.value = '';
        guessField.focus();
        const resetButton = document.querySelector('.resetButton');
        document.body.removeChild(resetButton);
    }
});
