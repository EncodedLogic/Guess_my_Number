'use strict';

let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
let scoreNum = Number(document.querySelector('.score').textContent);
const appInitialState = scoreNum;

console.log(`The Secret Number is ${secretNumber}`);

let prevHighScore = 0;
let newHighScore = function (scoreNum) {
    if (scoreNum > prevHighScore) {
        prevHighScore = scoreNum;
        document.querySelector('.highscore').textContent = scoreNum;
    }
};

const displayMessage = function (message) {
    document.querySelector('.message').textContent = `${message}`;
}


document.querySelector('.check').addEventListener('click', function () {
    if (scoreNum > 0) {
        const guess = Number(document.querySelector('.guess').value);
        if (!guess) {
            alert("Please enter a number !!!");
        }
        else if (guess === secretNumber) {
            displayMessage(`Correct Number ✅`);
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem'
            document.querySelector('.number').textContent = secretNumber;
            newHighScore(scoreNum);
        }
        else if (guess !== secretNumber) {
            displayMessage((guess < secretNumber) ? `Too Low !!! 📉` : `Too High !!! 📈`);
            scoreNum--;
            document.querySelector('.score').textContent = scoreNum;
            if (scoreNum === 0) {
                document.querySelector('body').style.backgroundColor = '#b00606';
                displayMessage(`You lose the game !!!`);
                //console.log(typeof scoreNum);
            }
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    //window.location.reload();  <-- IMP
    document.querySelector('.score').textContent = appInitialState;
    scoreNum = appInitialState;
    secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage(`Start guessing...`);
    document.querySelector('.number').textContent = `?`;
    console.log(`The Secret Number is ${secretNumber}`);
    document.querySelector('.guess').value = ``;
})
