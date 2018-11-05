const AnagramFinder = function (word) {
    this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const lowerCaseWord = this.word.toLowerCase()
    const sortedWord = lowerCaseWord.split('').sort().toString();

    const results = otherWords.filter((otherWord) => {

        const lowerCaseOtherWord = otherWord.toLowerCase();
        const sortedOtherWordAsString = lowerCaseOtherWord.split('').sort().toString();

        if (lowerCaseWord === lowerCaseOtherWord) {
            return false
        } else {
            return (sortedOtherWordAsString === sortedWord);
        }
    })
    return results;
}

module.exports = AnagramFinder;
