const assert = require('assert');
const jsonPropsFilter = require('../index.js');
const expect = require('chai').expect
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] }
  , compareBeverages = { tea: [ 'chai', 'matcha', 'oolong' ] }
  , strArgument = '{"foo":"bar","bar":"baz"}';

describe('Normal behavior test', ()=>{
    it('object should remove key', ()=>{
        const targetProps = {"hoge":"fuga"};
        const deletedKey = 'hoge';
        const result = jsonPropsFilter(targetProps, deletedKey);
        //console.log(`result ${JSON.stringify(result)}`);
        assert.deepEqual({}, result, 'check the element is deleted');
    });
    it('object should remove with array keys', ()=>{
        const targetProps = {"hoge":"fuga", "abc": "def", "def":"ghk"};
        const deletedKey = ["abc", "def"];
        const expectedResult = {"hoge":"fuga"}
        const result = jsonPropsFilter(targetProps, deletedKey);
        assert.deepEqual(result, expectedResult, 'check the elements are deleted at once');

    })
    it('undefined params testing with no error', ()=>{
		let secondArgUndef = function () { 
                let result = jsonPropsFilter(beverages, undefined);
                return result;
         };
        expect(beverages).to.have.property('tea').with.lengthOf(3);
    });
    it('first arg is set as string data testing', ()=>{
        const expectedResult = {"bar":"baz"};
        const deletedKey = ["foo"];
        console.log(`strArgument ${strArgument}`);
        const result = jsonPropsFilter(strArgument, deletedKey);
        assert.deepEqual(result, expectedResult, 'check the parameter is specified as string');
    });

});

describe('Exception behavior test', ()=>{
    it('undefined args error', ()=>{
		let badFirstArgFn = function () { 
                jsonPropsFilter(undefined, foo);
         };
		expect(badFirstArgFn).to.throws(Error);
    });
});
