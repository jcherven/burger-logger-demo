var connection = require('./connection.js');

var orm = {
    selectAll: function(tableInput, callBackFn){
        var queryString =  'SELECT * FROM ??';
        connection.query(queryString, [tableInput], function(err, result){
            if (err) throw err;
            callBackFn(result);
        });
    },
    insertNew: function(tableInput, colInput, valInput, callBackFn){
        var queryString = 'INSERT INTO ?? ( ?? ) VALUE ( ? )';
        connection.query(queryString, [tableInput, colInput, valInput], function(err, result){
            if (err) throw err;
            callBackFn(result);
        });
    },
    updateOne: function(tableInput, valInput, recordId, callBackFn){
        var queryString = 'UPDATE ?? SET ? WHERE ?';
        connection.query(queryString, [tableInput, valInput, recordId], function(err, result){
            if (err) throw err;
            callBackFn(result);
        });
    }
};

module.exports = orm;