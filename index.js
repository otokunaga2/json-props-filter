#!/usr/bin/env node

/**
 * @param {targetData} target data (should be JSON format string or JSON object)
 * @param {deletedKeys} string or string of lists to delete keys
 * @return filtered JSON object
 */
function jsonPropsFilter(targetData, deletedKeys) {
  if (!targetData) {
    throw new Error('undefined has specified as 1st parameter. It should be string or JSON Object');
  }
  // shallow copy the data in order to keep original data
  // NOTE: following semantics introduced from ES2016
  // See; https://stackoverflow.com/questions/34504682/js-does-object-assign-create-deep-copy-or-shallow-copy
  let convertJsonData = { ...targetData };
  // console.log(`type of targetData ${typeof convertJsonData}`);
  if (typeof targetData === 'string') {
    convertJsonData = JSON.parse(targetData);
  }
  if (Array.isArray(deletedKeys)) {
    deletedKeys.forEach((element) => {
      delete convertJsonData[element];
    });
  } else {
    delete convertJsonData[deletedKeys];
  }

  return convertJsonData;
}

module.exports = jsonPropsFilter;
module.exports.default = jsonPropsFilter;
