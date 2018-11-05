const PangramFinder = function (phrase) {
    this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
    this.phrase = phrase;
  }
  
  PangramFinder.prototype.isPangram = function () {
    const phraseToCheck = this.phrase.toLowerCase();
  
    const result = this.alphabet.every((letter) => {
      return phraseToCheck.includes(letter);
    })
    return result;
  
  }
  
  module.exports = PangramFinder;
  
  