'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number !';

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/

//computing the secret number
let secretNumber = Math.trunc(Math.random()*20)+1;

//defining the score and high score
let score = 20;
let highScore = 0;

// initialising the check button
document.querySelector('.check').addEventListener('click',function() { 
    const guess = Number(document.querySelector('.guess').value);

    //when there is no input
    if(!guess){
        document.querySelector('.message').textContent='No Number!';

        //when thre is correct input
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent='Correct Number!';
        document.querySelector('.number').textContent= secretNumber;

        // setting the highscore
        if (highScore < score){
            highScore= score;
        }
        document.querySelector('.highScore').textContent= highScore;

        //changing the color for the background when the answer is correct
        document.querySelector('body').style.backgroundColor = '#60b347';

        //changing the size of the number when the correct answer
        document.querySelector('body').style.width = '30rem';
        
        //when the guess is too high
    } else if(guess>secretNumber){
        if(score>1){
           document.querySelector('.message').textContent='Too High!';
           score--;
            document.querySelector('.score').textContent=score;
        } else {
            document.querySelector('.message').textContent= 'You lost the game';
            document.querySelector('.message').textContent= 0;
        }

        //when the guess is low
    } else if (guess< secretNumber){
        if(score>1){
            document.querySelector('.message').textContent='Too Low!';
           score--;
            document.querySelector('.score').textContent=score;
        } else {
            document.querySelector('.message').textContent= 'You lost the game';
            document.querySelector('.score').textContent= 0;
        }
    }
});

//setting up the again button
document.querySelector('.again').addEventListener('click', function (){
    score = 20;
     document.querySelector('.score').textContent=score;
     secretNumber= Math.trunc(Math.random()*20)+1;
     document.querySelector('.number').textContent='?';
     document.querySelector('.message').textContent= 'Start guessing....';
     document.querySelector('.body').style.backgroundColor= '#222';
     document.querySelector('.number').style.width= '15rem';
  document.querySelector('.guess').value='';
});