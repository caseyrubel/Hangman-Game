var numWins = 0;
var numLosses = 0;
var guesses = 0;

var wordList = ["anikan", "maul", "obiwan", "jarjar", "macewindu", "padme", "palpatine", "grevious"];
var selectedPicture = ["images/Anakin.jpeg", "images/Darth-Maul_632eb5af.jpeg", "images/obi.png", "images/Jar_Jar.png", "images/mace.jpeg", "images/padme.png", "images/Palp_trustme.jpeg", "images/General-Grievous.jpeg"]
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var selectedWord = "";
var lettersInWord = "";
var numBlanks = 0;
var lettersMissed = [];

var wins = document.getElementById("wins");
var curWord = document.getElementById('word');
var numberG = document.getElementById("numberG");
var letters = document.getElementById("letters");
var picture = document.getElementById("image");
var letter = "";


	function startGame() { 
		selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
		curNum = wordList.indexOf(selectedWord);
		picture.src = selectedPicture[curNum]; 
		lettersInWord = selectedWord.split("");
		numBlanks = lettersInWord.length;

		guesses = 9;
		lettersMissed = [];
		blanksAndSuccesses = [];

		for (var i=0; i<numBlanks; i++) {
			blanksAndSuccesses.push("_");
		}

		curWord.innerHTML = blanksAndSuccesses.join(" ");
		numberG.innerHTML = guesses;
		letters.innerHTML = lettersMissed;


		console.log(selectedWord);
		console.log(lettersInWord);
		console.log(numBlanks);
		console.log(blanksAndSuccesses);
	};

startGame();

function checkLetters(letter) {
	var isLetterInWord = false;
	var isLetterRepeat = false;

	for (var i=0; i < numBlanks; i++) {
		if (selectedWord[i] === letter) {
			isLetterInWord = true;
		}
	}
	if (isLetterInWord === true) {
		for (i=0; i < numBlanks; i++) {
			if (selectedWord[i] === letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	}
	else {
		lettersMissed.push(letter);
		guesses--;
	}
}


function roundComplete(){
	if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
		numWins++;
		alert("A fine addition to my collection");
		wins.innerHTML = numWins;
		startGame();
	}
	else if (guesses === 0) {
		alert("you underestimate my power");
		startGame();
	}
}


document.onkeyup = function(event) {
	isLetter= false;
	letter = String.fromCharCode(event.keyCode).toLowerCase();
	for (var i=0; i < alphabet.length; i++) {
		if (letter === alphabet[i]) {
			isLetter = true;
		}
	}
	if (isLetter) {
		checkLetters(letter);
		letters.innerHTML = lettersMissed;
		curWord.innerHTML = blanksAndSuccesses.join(" ");
		roundComplete();
	}
}




