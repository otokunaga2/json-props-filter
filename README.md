# json-props-filter
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/35bc7e2989224fef9ca7661c1d0f86a2)](https://app.codacy.com/manual/otokunaga2/json-props-filter?utm_source=github.com&utm_medium=referral&utm_content=otokunaga2/json-props-filter&utm_campaign=Badge_Grade_Dashboard)

## Description
JSON property sometimes have too many properties.
So this module provides filtering unnecessary data.

## Requirement

You do not have to install when you would like to use this library.
This module is written in pure JavaScript :).

## Usage
```javascript
const data = { foo: "bar", bar: "baz" };
// remove foo property data
const result = jsonPropsFilter(data1, "foo");
// then you can get filtered data => {bar: "baz" }; 

// also you can remove the data from array at once
const data2 = { foo: "bar", bar: "baz", baz: "bug" };
const result3 = jsonPropsFilter(data2, ["foo", "bar"]);
// you can get filtered data => {baz: "bug" }; 


```

Please check the example codes in the repository.
- example/basic_usage.js

## Install
npm i json-props-filter

## Licence
MIT
