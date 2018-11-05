const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
    const splitWord = this.word.split('');
    let uniqueLetters = [];

    const result = splitWord.every((letter) => {
        if (uniqueLetters.includes(letter)) {
            return false
        } else {
            uniqueLetters.push(letter);
            return true;
        }
    })
    return result;
}

module.exports = IsogramFinder;
