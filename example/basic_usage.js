const jsonPropsFilter = require('../index.js');

const data1 = { foo: "bar", bar: "baz" };
const data2 = { foo: "bar", bar: "baz", baz: "bug" };
const strData1 = '{"foo": "bar", "bar":"baz"}';

// remove foo property data
const result = jsonPropsFilter(data1, "foo");

// remove foo property string format data
const result2 = jsonPropsFilter(strData1, "foo");

// remove foo and bar properties from data
const result3 = jsonPropsFilter(data2, ["foo", "bar"]);
