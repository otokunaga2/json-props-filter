const assert = require('assert');
const { expect } = require('chai');
const jsonPropsFilter = require('../index.js');

const foo = 'bar';
const beverages = { tea: ['chai', 'matcha', 'oolong'] };
const strArgument = '{"foo":"bar","bar":"baz"}';

describe('Normal behavior test', () => {
  it('object should remove key', () => {
    const targetProps = { hoge: 'fuga' };
    const deletedKey = 'hoge';
    const result = jsonPropsFilter(targetProps, deletedKey);
    // console.log(`result ${JSON.stringify(result)}`);
    assert.deepEqual({}, result, 'check the element is deleted');
  });
  it('object should remove with array keys', () => {
    const targetProps = { hoge: 'fuga', abc: 'def', def: 'ghk' };
    const deletedKey = ['abc', 'def'];
    const expectedResult = { hoge: 'fuga' };
    const result = jsonPropsFilter(targetProps, deletedKey);
    assert.deepEqual(result, expectedResult, 'check the elements are deleted at once');
  });
  it('undefined params testing with no error', () => {
    const result = jsonPropsFilter(beverages, undefined);
    expect(result).to.have.property('tea').with.lengthOf(3);
  });
  it('first arg is set as string data testing', () => {
    const expectedResult = { bar: 'baz' };
    const deletedKey = ['foo'];
    // console.log(`strArgument ${strArgument}`);
    const result = jsonPropsFilter(strArgument, deletedKey);
    assert.deepEqual(result, expectedResult, 'check the parameter is specified as string');
  });
});

describe('Exception behavior test', () => {
  it('undefined args error', () => {
    const badFirstArgFn = function () {
      jsonPropsFilter(undefined, "foo");
    };
    expect(badFirstArgFn).to.throws(Error);
  });

  it('number arg is set as 1st parameter error', () => {
    const badUnexpectedFirstArgTypeFn = function () {
      jsonPropsFilter(1, "foo");
    };
    expect(badUnexpectedFirstArgTypeFn).to.throws(Error);
  });
});

