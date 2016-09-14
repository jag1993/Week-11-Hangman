var wordList = ['dog','cat','elephant','cow','mouse','snake'];
var index = Math.floor(Math.random()*wordList.length);
var wordToGuess = wordList[index];
exports.wordToGuess = wordToGuess;
exports.wordList = wordList;

