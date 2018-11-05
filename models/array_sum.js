const ArraySummer = function() {

}

ArraySummer.prototype.sum = function(array){
    return array.reduce((sumTotal, element) => {
        return sumTotal += element;
    }, 0)
}

module.exports = ArraySummer;