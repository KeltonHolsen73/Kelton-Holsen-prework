const wordlist = ["Cthulhu", "Azathoth", "Nyarthalotep", "Byakhee", "Shoggoth",  "Cultist", "Gla'aki",
"Innsmouth", "Leng", "Ghoul", "Dagon", "Ghast", "Mi-go", "Nightgaunt", "Hastur", "Yog-sothoth", "Yig"]
const wins = 0; //TODO: track wins

const gameLoop = function() {
    document.removeEventListener('keyup', gameLoop);
    //Generate a word from the list
    var word = wordlist[Math.floor(Math.random() * wordlist.length)];
    //Write out the number of blanks in the word
    var blanks = "";
    for (let i = 0; i < word.length; i++) {
        blanks += "<p> _ </p>";
    }
    document.querySelector("#word").innerHTML = blanks;
    //Wait for user input, and then check that key to see if it a) has been pressed and b) is 
    //in the word, then respond appropriately
    var guessed = [];
    var guesses = 13;
    document.querySelector("#guesses").innerHTML = guesses;
    const keyPress = function(event) {
        if (!(guessed.includes(event.key))) { //Don't let them guess a letter they already guessed
            if(word.includes(event.key)) {
                
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
        }
            
    }
    document.addEventListener('keyup', keyPress);
    //If the word has been finished, start the loop over
     
}

document.addEventListener('keyup', gameLoop);
