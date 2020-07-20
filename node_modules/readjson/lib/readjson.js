'use strict';

const fs = require('fs');
const {readFile} = fs.promises;
const tryCatch = require('try-catch');

module.exports = async (name) => {
    check(name);
    
    const data = await readFile(name, 'utf8');
    return JSON.parse(data);
};

module.exports.sync = sync;

function sync(name) {
    check(name);
    
    const data = fs.readFileSync(name, 'utf8');
    const json = JSON.parse(data);
    
    return json;
}

module.exports.sync.try = (name) => {
    check(name);
    
    const result = tryCatch(sync, name);
    const data = result[1];
    
    return data;
};

function check(name) {
    if (typeof name !== 'string')
        throw Error('name should be string!');
}

