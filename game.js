var wordList = ['cow','cat','dog','elephant'];
var index = Math.floor(Math.random()*wordList.length);
var wordToGuess = wordList[index];
exports.wordToGuess = wordToGuess;

// YOU NEED TO MAKE THIS A FUNCTION
// Also maybe make it an object so you can export wordToGuess and the function to make it?