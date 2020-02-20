const jsonPropsFilter = require('../index.js');

const data1 = { foo: "bar", bar: "baz" };
const data2 = { foo: "bar", bar: "baz", baz: "bug" };
const strData1 = '{"foo": "bar", "bar":"baz"}';

// remove foo property data
const result = jsonPropsFilter(data1, "foo");
// confirm the result is filtered
console.log(`result should only has bar ${JSON.stringify(result)} original data is ${JSON.stringify(data1)}`);

// remove foo property string format data
const result2 = jsonPropsFilter(strData1, "foo");
// confirm the result is filtered
console.log(`result should only has bar ${JSON.stringify(result2)} original data is ${strData1}`);

// remove foo and bar properties from data
const result3 = jsonPropsFilter(data2, ["foo", "bar"]);
// confirm the result is filtered
console.log(`result should only has baz ${JSON.stringify(result3)} original data is ${JSON.stringify(data2)}`);
