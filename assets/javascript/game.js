//document.getElementById('h1').innerHTML = 'Hello ' + 548;

//Variables

var randomLetter = "";
var yourGuess = "";
var winCount= 0;
var lossCount = 0;
var guessSoFar = [abcdefghijklmnopqrstuvwxyz];
var guessLeft = 9;


/*
rps.initializeElements(
      document.getElementById('your-pick'),
      document.getElementById('my-pick'),
      document.getElementById('overlay'),
      document.getElementById('score'));

    // Start listening for Letters.
    window.onkeyup = function(event) {
      if (rps.state) {
        // Validate Letter.
        var letter = rps.validateLetter(event.key);
        if (letter) {
          // Handle Letter.
          rps.userPick(event.key);
        }
      } else {
        // Reset Game.
        rps.resetGame();
      }
    };
*/

//For printing Guesses So Far

function lowercase() {
	var data = document.getElementById("guesses-so-far").value;
	document.getElementById("guesses-so-far").value = data.toLowerCase();
}

window.onkeyup = function(lowercase);

//For Loop for Guesses Left

for (var i = guessLeft.length - 1; i>=0, i--) {
	var newDiv = $("guess-left");
	newDiv.html(drinkList[i]);
	$("#guess-left").append(newDiv);
}

//Random Letter Function

var randomString = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
function getRandomLetter() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}
var randomLetter;

while (randomString.length < 1) {
  randomLetter = getRandomLetter();
  emptyString += randomLetter;
} 
console.log(randomString);

//Your Guess if else statement

if (yourGuess === randomLetter) {
	console.log(winCount++);

} else if (yourGuess != randomLetter) {
	console.log(guessLeft--);
	console.log(guessSoFar);

} else {
	console.log()
}

//var guessSoFar = "";

/*document.onkeyup = function(event) {
  var Guess = event.key

}


/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!'; */

</script>