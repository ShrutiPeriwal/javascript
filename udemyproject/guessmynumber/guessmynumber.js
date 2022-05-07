
'use strict';

// Secreat Number
let secreatNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) 
    //When ever their is no input
    {
        //document.querySelector('.message').textContent = 'No Number';
        displayMessage('No number');
    } 
    //When Player Wins
    else if (guess === secreatNumber) {
       // document.querySelector('.message').textContent = 'Correct Number';
       displayMessage('Correct Number');
       document.querySelector('.number').textContent = secreatNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    //Implementing High-Score
        if ( score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    //When Guess is Wrong
    else if(guess !== secreatNumber) {
        if (score > 1 ) {
           // document.querySelector('.message').textContent = guess > secreatNumber ? 'To High' : 'To Low';
            displayMessage(guess > secreatNumber ? 'To High' : 'To Low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'You lost the game';
            displayMessage('You Lost the game');
            document.querySelector('.score').textContent = 0;
        } 
    }
    /* In above else if block We are Refactoring Our Code - The dry Prinicipal , Refactoring means same or almost same code ko short m likhna
    //Whenever the guess is too high
    else if (guess > secreatNumber) {
       if (score > 1 ) {
            document.querySelector('.message').textContent = 'To High';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    } 
    //Whenever the guess is too low
    else if (guess < secreatNumber) {
        if (score > 1 ) {
            document.querySelector('.message').textContent = 'To Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
    */
});

//Again Button

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secreatNumber = Math.trunc(Math.random() * 20 ) + 1;   
    
   // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start Guessing...'); 
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

