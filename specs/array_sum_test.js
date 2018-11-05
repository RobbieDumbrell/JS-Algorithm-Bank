const assert = require('assert')
const ArraySummer = require('../models/array_sum')

describe('ArraySummer', function(){

    let arraySummer;

    this.beforeEach(function(){
        arraySummer = new ArraySummer();
    })

    it('should sum an array of integers', function(){
        actual = arraySummer.sum([1, 2, 5, 6, 6])
        expected = 20
        assert.strictEqual(actual, expected)
    })

    it('should sum an array of floats', function(){
        actual = arraySummer.sum([1.0, 2.55, 4.65, 96.42, 6.3])
        expected = 110.92
        assert.strictEqual(actual, expected)
    })

})