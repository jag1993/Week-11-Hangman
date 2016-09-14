var gameJS = require('./game.js');
var letterJS = require('./letter.js');
var inquirer = require('inquirer');
var blankArray = letterJS.blankArray;
var wordToGuess = gameJS.wordToGuess;
var wordToCheck = wordToGuess.split('');
var wordList = gameJS.wordList;
var correct;
var userGuess;
var guess;
var lives = 5;


var checker = function(){
 if(wordToGuess.indexOf(userGuess) === -1){
    		console.log('wrong');
    		lives --;
    	}else{
    		console.log('right');
            correct = true;	
        }
    if(correct){

        for(i=0;i<wordToGuess.length;i++){
        if(wordToGuess[i] === userGuess){
            blankArray[i] = userGuess;  
            }
        }
    }
}



var nextGame = function(){
     if(blankArray.join('') === wordToGuess){
        var index = Math.floor(Math.random()*wordList.length);
        wordToGuess = wordList[index];
        blankArray = [];
         for(var i=0; i <wordToGuess.length; i++){
          blankArray.push('_');
        };
    }
        console.log(blankArray);
  };

var askQuestion = function() {
 if (lives > 0) {
        inquirer.prompt([{
            name: "userGuess",
            message: "Guess the word"
        }]).then(function(answers) {
            guess = answers.userGuess;
            userGuess = guess.toLowerCase();
            checker();
            console.log("You have " + lives + " left");
            askQuestion();
            nextGame();
        });
    
    }else{
	console.log('You lost');
    console.log(wordToGuess);
    }
}

 askQuestion();



