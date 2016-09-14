var gameJS = require('./game.js');
var wordToGuess = gameJS.wordToGuess;
var blankArray = [];


for(var i=0; i <wordToGuess.length; i++){
		blankArray.push("_");
	};
	console.log(blankArray);

exports.blankArray = blankArray;
