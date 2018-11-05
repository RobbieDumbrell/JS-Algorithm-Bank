const assert = require('assert')
const StairCaseWriter = require('../models/staircase_writer.js')

describe('StairCaseWriter', function() {

    let staircaseWriter;

    this.beforeEach(function(){
        staircaseWriter = new StairCaseWriter();
    })

    it('should print out a staircase of #s based when given a small positive integer', function(){
        expected = '   #\n  ##\n ###\n####'
        actual = staircaseWriter.formStaircase(4);
        assert.strictEqual(actual, expected);
    })

    it('should print out a staircase of #s based when given a bigger positive integer', function(){
        expected = '        #\n       ##\n      ###\n     ####\n    #####\n   ######\n  #######\n ########\n#########'
        actual = staircaseWriter.formStaircase(9);
        assert.strictEqual(actual, expected);
    })

    it('should not print out a staircase of #s based when given a negative integer', function(){
        expected = null
        actual = staircaseWriter.formStaircase(-3);
        assert.strictEqual(actual, expected);
    })

})