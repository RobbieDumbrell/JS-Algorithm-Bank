const assert = require('assert')
const CamelCaseConverter = require('../models/camel_case_converter.js')

describe('CamelCaseConverter', function() {

    let camelCaseConverter;

    this.beforeEach(function(){
        camelCaseConverter = new CamelCaseConverter();
    })

    it('should convert a string with spaces to camel case', function(){
        expected = 'helloThereIAmRobbie';
        actual = camelCaseConverter.convert('Hello there I am Robbie');
        assert.strictEqual(actual, expected);
    })

    it('should convert a string with underscores to camel case', function(){
        expected = 'helloThereIAmRobbie';
        actual = camelCaseConverter.convert('Hello_there_I_am_Robbie');
        assert.strictEqual(actual, expected);
    })

})