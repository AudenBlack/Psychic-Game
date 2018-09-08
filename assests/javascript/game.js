//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 10
var guesedLetters = []
var winsText = document.getElementById("wins")
var lossesText = document.getElementById("losses")
var allowedText = document.getElementById("allowed")
var madeText = document.getElementById("made")

winsText.innerHTML = wins
lossesText.innerHTML = losses
allowedText.innerHTML = guesses

var comChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]

function newGame(){
    guesses = 10;
    guessedLetters = [];
}

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase()
    if(computerChoices.indexOf(userGuess) === -1) {
        alert("onlyLetters")
    }else if(userGuess === comChoice) {
        wins++ 
        winsText.innerHTML = wins
        newGame()
    }else if (userGuess !== comChoice && guessedLetters.indexOf(userGuess) === -1 ){
            
    }
}






//create array of words to guess
//start game when you press key
//choose random word from list
//record keystroke and check if its in word
//if its in word, reveal letters
//if not, record letter and lose one point from chances
//if chances at 0, game over
//if word is complete add  one point to score