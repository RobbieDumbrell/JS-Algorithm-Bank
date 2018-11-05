const StringNumberSummer = function() {

}

StringNumberSummer.prototype.sum = function(a, b) {

    let resultArray = [];

    let highestDigits = Math.max(a.length, b.length)
    let toCarryOver = 0;

    workingAArray = a.split('');
    workingBArray = b.split('');

    // add 0s onto the front of the shorter number so they are the same length
    if (a.length < highestDigits){
        for (i = 0; i < highestDigits - a.length; i++){
            workingAArray.unshift('0')
        }
    } else if (b.length < highestDigits){
        for (i = 0; i < highestDigits - b.length; i++){
            workingBArray.unshift('0')
        }
    }

    // then loop backwards through the numbers adding the corresponding values + any carried over amount, replacing the carried over amount each time.

    for (i = (highestDigits - 1); i > -1; i--){
        let digitResult = 0;
        if (parseInt(workingAArray[i]) + parseInt(workingBArray[i]) + toCarryOver > 9){
            digitResult = ((parseInt(workingAArray[i]) + parseInt(workingBArray[i]) + toCarryOver)) - 10;
            toCarryOver = 1;
        } else {
            digitResult = parseInt(workingAArray[i]) + parseInt(workingBArray[i]) + toCarryOver;
            toCarryOver = 0;
        }
        
        resultArray.push(digitResult);
    }
    if (toCarryOver > 0){
        resultArray.push(1);
    }

    resultArray.reverse();

    // remove 0s at the beginning of the number
    let x = 0;
    while (resultArray[x] === 0){
        resultArray.shift();
        x += 1
    }

    // return full number as a string
    return resultArray.join('').toString();

}

module.exports = StringNumberSummer;