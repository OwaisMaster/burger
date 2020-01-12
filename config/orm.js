var connection = require('./connection');

var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (table, valName, cb) {
        var queryString = `INSERT INTO ${table} (burger_name) VALUES (?)`;

        console.log(queryString);
        console.log("After queryString: " + valName);

        connection.query(queryString, [valName], function (error, result) {
            if (error) {
                throw error;
            }
            cb(result);
        });
    },

    updateOne: function (table, columnSet, condition, cb) {
        var queryString = `UPDATE ${table} SET ${columnSet} WHERE ${condition}`;

        console.log(queryString);

        connection.query(queryString, function(error, result) {
            if (error) {
                throw error;
                
            }
            cb(result);
        });
    },
    deleteOne: function (table, condition, cb) {
        var queryString = `DELETE FROM ${table} WHERE ${condition}`;
        console.log(queryString);
        connection.query(queryString, function(error, result) {
            if (error) {
                throw error;
            }
            cb(result);
        })
    }
}

module.exports = orm;