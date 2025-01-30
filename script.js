'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'var(--bg-light)';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.high-score').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        (document.querySelector('.message').textContent =
          guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
      );
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('💥 You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = 'var(--bg-dark)';
  document.querySelector('.number').style.width = '15rem';
});
