const HashTagGenerator = function () {

}

HashTagGenerator.prototype.convert = function (inputString) {

    let wordsArray = inputString.split(' ');
    let filteredWordsArray = this.filterOutSpaces(wordsArray)

    let capitalizedArray = filteredWordsArray.map((word) => {
        return this.capitalize(word);
    })

    capitalizedArray.unshift('#');
    let hashTagString = capitalizedArray.join('');

    return this.validateLength(hashTagString, 140)
}

HashTagGenerator.prototype.capitalize = function (stringToCapitalize) {
    let firstLetter = stringToCapitalize.charAt(0).toUpperCase();
    return `${firstLetter}${stringToCapitalize.slice(1, (stringToCapitalize.length))}`;
}

HashTagGenerator.prototype.filterOutSpaces = function (array) {
    return array.filter((word) => {
        if (word !== '') {
            return true
        }
    })
}

HashTagGenerator.prototype.validateLength = function (string, maxLength) {
    if (string.length > maxLength || string === '#') {
        return false;
    } else {
        return string;
    }
}

module.exports = HashTagGenerator;