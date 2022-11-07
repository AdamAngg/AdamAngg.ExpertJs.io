'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Kurwy hehe';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 20;
let number;
function makeRandom() {
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').value = number;
}
makeRandom();
let score = Number(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  if (!guess) {
    document.querySelector('.message').textContent = 'No number 🐱‍🐉';
  } else if (guess == number && score > 1) {
    document.querySelector('.message').textContent = 'Yay u did Great ❤';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    const highScores = Number(document.querySelector('.highscore').textContent);
    const lastScore = Number(document.querySelector('.score').textContent);
    if (lastScore > highScores) {
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    }
  } else if (guess > number && score > 1) {
    document.querySelector('.message').textContent = 'Go lover Brother 💥';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < number && score > 1) {
    document.querySelector('.message').textContent = 'Go higher Brother 💤';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (score == 1) {
    document.querySelector('.message').textContent = 'Przegrałeś!! 💔';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.number').textContent = `?`;
  makeRandom();
  document.querySelector('.guess').value = null;
});
