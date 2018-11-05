const CamelCaseConverter = function() {

}

CamelCaseConverter.prototype.convert = function(inputString){
    
    let spacedString = inputString.split('_').join(' ')
    let inputAsArray = spacedString.split(' ')
    // capitalize each word, unless it is the first word
    let capitalizedWordsArray = inputAsArray.map((word) => {
        return this.capitalize(word);
    })
    capitalizedWordsArray[0] = capitalizedWordsArray[0].toLowerCase();
    // join the array together as a string 
    let camelCaseString = capitalizedWordsArray.join('');
    // return new string
    return camelCaseString;
}

CamelCaseConverter.prototype.capitalize = function(stringToCapitalize){
    let firstLetter = stringToCapitalize.charAt(0).toUpperCase();
    return `${firstLetter}${stringToCapitalize.slice(1, (stringToCapitalize.length))}`;
}

module.exports = CamelCaseConverter;