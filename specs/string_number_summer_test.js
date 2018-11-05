const assert = require ('assert');
const StringNumberSummer = require('../models/string_number_summer.js');

describe('StringNumberSummer', function() {

    this.beforeEach(function(){
        stringNumberSummer = new StringNumberSummer();
    })

    it('should sum small integers as strings', function(){
        actual = stringNumberSummer.sum('123', '456');
        expected = '579';
        assert.strictEqual(actual, expected);
    })

    it('should sum small integers as strings with differing digit amounts', function(){
        actual = stringNumberSummer.sum('1234', '44');
        expected = '1278';
        assert.strictEqual(actual, expected);
    })

    it('should eliminate unnecessary 0s at start', function() {
        actual = stringNumberSummer.sum('00103', '08567');
        expected = '8670';
        assert.strictEqual(actual, expected);
    })

    it('should sum very large integers as strings', function(){
        actual = stringNumberSummer.sum('50095301248058391139327916261', '81055900096023504197206408605');
        expected = '131151201344081895336534324866';
        assert.strictEqual(actual, expected);
    })

})