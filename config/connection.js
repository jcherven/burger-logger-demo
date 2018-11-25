var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "burgers_db"
});

connection.connect((err)=>{
    if (err) {
        console.error("There was a problem connecting to the DB: \n" + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;