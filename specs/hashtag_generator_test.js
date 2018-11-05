const assert = require('assert')
const HashTagGenerator = require('../models/hashtag_generator.js')

describe('HashTagGenerator', function() {

    let hashTagGenerator;

    this.beforeEach(function(){
        hashTagGenerator = new HashTagGenerator();
    })

    it('should convert a string with spaces', function(){
        expected = '#HelloThereIAmRobbie';
        actual = hashTagGenerator.convert('Hello there I am Robbie');
        assert.strictEqual(actual, expected);
    })

    it('should convert a string with multiple spaces', function(){
        expected = '#HelloThereIAmRobbie';
        actual = hashTagGenerator.convert('          Hello   there       I  am        Robbie               ');
        assert.strictEqual(actual, expected);
    })

    it('should return false when converting an empty string', function(){
        expected = false;
        actual = hashTagGenerator.convert('');
        assert.strictEqual(actual, expected);
    })

    it('should return false if more than 140 characters', function(){
        expected = false;
        actual = hashTagGenerator.convert('asdhahsdaskjdhjhhajskdhhfjkdadskf jakhd kjafh kjasdkf kjh afsjhk jkhas fhjk sd jkhsaf jkh sdfjhks adk  ksdajhf jkh sdkfajh  kjsdhf  sadkfj sdjhf  kjsdf  kjhsf  jkhahfjd');
        assert.strictEqual(actual, expected);
    })

})