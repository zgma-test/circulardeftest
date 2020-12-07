const util = require('./util');
const dep1 = require('./dep1');
const dep2 = require('./dep2');

exports.handler = async (event) => {
    
    return {"message": "Successfully executed"};
};