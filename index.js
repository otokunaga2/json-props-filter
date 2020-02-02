#!/usr/bin/env node
'use strict';

function jsonPropsFilter(targetData, deletedKeys){
    let convertJsonData;
    if(targetData instanceof String){
        try{
           convertJsonData = JSON.parse(targetData);
        }catch(e){
            throw e;
        }

    }
    if(convertJsonData){
        targetData = convertJsonData;
    }
    if(Array.isArray(deletedKeys)){
        deletedKeys.forEach(element =>{
            //console.log(`element is ${element}`)
            try{
                delete targetData[element];
            }catch(e){
                //console.log(`error caused reason ${e}`)
                throw e;
            }
        });
    }else{
        try{
            delete targetData[deletedKeys] 
        }catch(e){
            //console.log(`error caused reason ${e}`)
            throw e;
        }
    }

    return targetData;
}


module.exports = jsonPropsFilter;
module.exports.default = jsonPropsFilter;

