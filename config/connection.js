var mysql = require("mysql");
var connection;
//connection = mysql.createConnection(process.env.JAWSDB_URL);
console.log(process.env.DB)
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({host:process.env.HOST, port:process.env.DB_PORT, user:process.env.USER, password:process.env.PASS, database: process.env.DB });
}

connection.connect(function (error) {
    if (error) {
        console.error("Error connecting: " + error.message + error.stack);
        return;
    }

    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;