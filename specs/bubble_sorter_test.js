const assert = require('assert')
const BubbleSorter = require('../models/bubble_sorter.js')

describe('BubbleSorter', function () {
    let bubbleSorter;

    this.beforeEach(function () {
        bubbleSorter = new BubbleSorter();
    })

    it('should sort an unsorted list of integers', function () {
        let list = [1, 4, 2, 5, 800, 1, 0, 3];
        expected = list.sort();
        actual = bubbleSorter.sort(list);
        assert.strictEqual(actual, expected);
    });

    it('should sort an unsorted list of floats', function () {
        let list = [1.2, 2.0432, 1.32, 9902.43, 8.2, 9028.2];
        expected = list.sort();
        actual = bubbleSorter.sort(list);
        assert.strictEqual(actual, expected);
    });

    it('should sort words by alphabetical order', function () {
        let list = ['zzz', 'advds', 'dsgrs', 'aflksg', 'ABDOS'];
        expected = list.sort();
        actual = bubbleSorter.sort(list);
        assert.strictEqual(actual, expected);
    })
})