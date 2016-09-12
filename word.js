var gameJS = require('./game.js');
var letterJS = require('./letter.js');
var inquirer = require('inquirer');
var blankArray = letterJS.blankArray;
var wordToGuess = gameJS.wordToGuess;
var wordToCheck = wordToGuess.split('');
var userGuess;
var guess;
var count = 0;
var lives = 5;

// INSTEAD OF COUNT, THINK ABOUT IF LIVE IS GREATER THAN 0 THEN KEEP RUNNING OTHERWISE DONT
// FIND A WAY TO MAKE PICKING A RANDOM WORD A FUNCTION 
// ASK IF YOU HAVE TO USE CONSTRUCTORS BECASUE YOU DIDN'T
var checker = function(){
 if(wordToGuess.indexOf(userGuess) === -1){
    		console.log('wrong');
    		lives --;
    	}else{
    		console.log('right');
    		var i = wordToGuess.indexOf(userGuess);
    	    blankArray[i] = userGuess;
    	}
}

  
var askQuestion = function() {
 if (lives > 0) {
        inquirer.prompt([{
            name: "userGuess",
            message: "Guess the word"
        }]).then(function(answers) {
            // count++;
            guess = answers.userGuess;
            userGuess = guess.toLowerCase();
            checker();
            console.log(wordToGuess);
            console.log(blankArray);
            console.log(lives);
            askQuestion();
        })
    
}else{
	console.log('You died');
}
}

 askQuestion();



