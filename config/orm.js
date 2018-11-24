var connection = require('./connection.js');

var orm = {
    selectAll: (tableInput)=>{
        var queryString =  'SELECT * FROM ??';
        connection.query(queryString, [tableInput], (err, result)=>{
            if (err) throw err;
            console.log(result);
        });
    },
    
    insertOne: (tableInput, colInput, valInput)=>{
        var queryString = 'INSERT INTO ?? ( ?? ) VALUE ( ? )';
        connection.query(queryString, [tableInput, colInput, valInput], (err, result)=>{
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: (tableInput, colInput, valInput, recordId, idInput)=>{
        var queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(queryString, [tableInput, colInput, valInput, recordId, idInput], (err, result)=>{
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;