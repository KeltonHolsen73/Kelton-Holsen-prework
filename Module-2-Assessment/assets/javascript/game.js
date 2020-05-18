const wordlist = ["cthulhu", "azathoth", "nyarthalotep", "byakhee", "shoggoth",  "cultist", "gla'aki",
"innsmouth", "leng", "ghoul", "dagon", "ghast", "mi-go", "nightgaunt", "hastur", "yog-sothoth", "yig"]
var wins = 0; 
document.querySelector("#wins").innerHTML = wins;
const gameLoop = function() {
    //Setup
    document.removeEventListener('keyup', gameLoop);
    //Generate a word from the list
    var word = wordlist[Math.floor(Math.random() * wordlist.length)];
    //Write out the number of blanks in the word
    var wordArray = [];
    for (let i = 0; i < word.length; i++) {
        wordArray.push("_ ");
    }
    var blanks = "<p>";
    for (let i = 0; i < word.length; i++) {
        blanks += "_ ";
    }
    blanks += "</p>";
    document.querySelector("#word").innerHTML = blanks;   
    var guessed = [];
    let guesses = 13;
    var done = false;
    document.querySelector("#guesses").innerHTML = guesses;

    //Functions

    //Wait for user input, and then check that key to see if it a) has been pressed and b) is 
    //in the word, then respond appropriately
    const keyPress = function(event) {
        if (!(guessed.includes(event.key))) { //Don't let them guess a letter they already guessed
                //Iterate through the word and replace any blanks with the correct letter
            for (let i = 0; i < word.length; i++) {
                if(word.charAt(i) === event.key) {
                    wordArray[i] = event.key;
                    blanks = "<p>";
                    for (let i = 0; i < word.length; i++) {
                         blanks += wordArray[i];
                    }
                    blanks += "</p>";
                    document.querySelector("#word").innerHTML = blanks;
                }
            }
            //If the word has been finished, start the loop over
            if(!wordArray.includes("_ ")) {
                wins++;
                document.querySelector("#wins").innerHTML = wins;
                reset();
            }
            guessed.push(event.key); //put it on the list of used letters
            var guessedString = "";
            for(let i = 0; i < guessed.length; i++) {
                guessedString += "<li>";
                guessedString += guessed[i];
                guessedString += "</li>";
            }
            guesses--;
            document.querySelector("#guesses").innerHTML = guesses;
            document.querySelector("#letters").innerHTML = guessedString;
            if(guesses <= 0) {
                alert("You have run out of guesses! The word was " + word);
                reset();
            }
        }
            
    }
    const reset = function() { //Resets this instance of the game to prepare for the next game loop
        document.removeEventListener('keyup', keyPress);
        gameLoop();
    }

    //The event listener
    document.addEventListener('keyup', keyPress);

    
      
}

document.addEventListener('keyup', gameLoop); //This starts the game
