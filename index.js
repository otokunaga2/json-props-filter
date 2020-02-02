#!/usr/bin/env node
'use strict';

function jsonPropsFilter(targetData, deletedKeys){
    if(!targetData){
        throw new Error('undefined has specified as 1st parameter');
    }
    //shallow copy the data in order to keep original data
    //NOTE: following semantics introduced from ES2016
    //See; https://stackoverflow.com/questions/34504682/js-does-object-assign-create-deep-copy-or-shallow-copy
    let convertJsonData = Object.assign({},targetData);
    //console.log(`type of targetData ${typeof convertJsonData}`);
    if(typeof targetData == 'string'){
        try{
           convertJsonData = JSON.parse(targetData);
        }catch(e){
            throw e;
        }

    }
    if(Array.isArray(deletedKeys)){
        deletedKeys.forEach(element =>{
            try{
                delete convertJsonData[element];
            }catch(e){
                throw e;
            }
        });
    }else{
        try{
            delete convertJsonData[deletedKeys] 
        }catch(e){
            throw e;
        }
    }

    return convertJsonData;
}

module.exports = jsonPropsFilter;
module.exports.default = jsonPropsFilter;

