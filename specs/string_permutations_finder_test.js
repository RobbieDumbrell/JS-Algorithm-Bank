const assert = require('assert')
const StringPermutationsFinder = require('../models/string_permutations_finder.js')

describe('StringPermutationsFinder', function() {

    let stringPermutationsFinder;

    this.beforeEach(function(){
        stringPermutationsFinder = new StringPermutationsFinder();
    })

    // it('should find perumations of a string', function(){
    //     expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    //     actual = stringPermutationsFinder.find('abc');
    //     assert.strictEqual(actual, expected);
    // })



})