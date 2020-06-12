// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;


// UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


// Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.classList.contains('play-again')){
      window.location.reload();
    }
  });

// Listen forn guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    else{

    // Check if won
        if (guess === winningNum){
            // Game over - won
            gameOver(true, `Number ${winningNum} is correct! YOU WIN!`);
        }
        else
        {
            guessesLeft -= 1;
            if (guessesLeft === 0) {
                gameOver(false, `GAME OVER. YOU LOST! The correct number was ${winningNum}!`);
            }else{
                // Game continues - answer wrong
                // Change border color
                guessInput.style.borderColor = 'red';

                // Clear Input
                guessInput.value = '';

                setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
            }
        }
    }
});

// Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

// Game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    message.style.color = color;
    // Set message
    setMessage(msg);
    // Play again
    guessBtn.textContent = 'Play Again';
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1) + min)
}