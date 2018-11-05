const StairCaseWriter = function () {

}

StairCaseWriter.prototype.formStaircase = function (numberOfSteps) {

    if (numberOfSteps <= 0){
        return null
    }

    let currentSpacesToAdd = numberOfSteps - 1;
    let stairCaseString = ''

    for (i = 1; i <= numberOfSteps; i++) {
        let stepString = `${(' '.repeat(currentSpacesToAdd)) + ('#'.repeat(i))}`
        if (i !== numberOfSteps) {
            stepString += '\n'
        }
        stairCaseString += stepString;
        currentSpacesToAdd -= 1
    }

    return stairCaseString;
}

module.exports = StairCaseWriter;