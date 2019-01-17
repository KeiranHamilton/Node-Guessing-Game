// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.
var Letter = function(character) {
  // console.log('making a new Letter:', character);

  this.character = character;
  this.guessed = false;

  this.toString = function() {
    return this.guessed ? this.character : "_";
  };

  this.makeGuess = function(newGuess) {
    if (this.character.toLowerCase() === newGuess.toLowerCase()) {
      this.guessed = true;
    }
  };
};

module.exports = Letter;
