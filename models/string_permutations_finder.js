const StringPermutationsFinder = function() {

}

StringPermutationsFinder.prototype.find = function(inputString) {

    if (inputString.length < 2){
        return inputString;
    }

    let permutationsResult = []
    for (i = 0; i < inputString.length; i++){
        let character = inputString[i];

        let remainingString = inputString.slice(0, i) + inputString.slice(i+1, inputString.length) 

        for (let subPermutation of this.find(remainingString)){
            permutationsResult.push(character + subPermutation)
        }
        return permutationsResult;

    }

}

module.exports = StringPermutationsFinder;