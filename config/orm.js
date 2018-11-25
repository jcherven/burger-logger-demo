var connection = require('./connection.js');

var orm = {
    selectAll: function(tableInput, callBack) {
        var queryString =  'SELECT * FROM ??';
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            callBack(result);
        });
    },
    
    insertNew: function(tableInput, colInput, valInput, callBack) {
        var queryString = 'INSERT INTO ?? ( ?? ) VALUE ( ? )';
        connection.query(queryString, [tableInput, colInput, valInput], function(err, result) {
            if (err) throw err;
            callBack(result);
        });
    },

    updateOne: function(tableInput, colInput, valInput, recordId, callBack) {
        var queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(queryString, [tableInput, colInput, valInput, colInput, recordId], function(err, result) {
            if (err) throw err;
            callBack(result);
        });
    }
};

module.exports = orm;