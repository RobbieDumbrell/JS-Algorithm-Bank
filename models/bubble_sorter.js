const BubbleSorter = function () {

}

BubbleSorter.prototype.sort = function (array) {
    let somethingSwapped = false
    let maxToLoop = array.length - 1
    for (i = 0; i < maxToLoop; i++) {
        if (array[i] > array[i + 1]) {
            let temp = array[i]
            a = array[i + 1]
            b = temp
            somethingSwapped = true
        }
    }
    if (somethingSwapped) {
        this.sort()
    } else {
        return array
    }
}

module.exports = BubbleSorter;
