var orm = require("../config/orm.js");

var burger = {

    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insert: function (burgerName, cb) {
        orm.insertOne("burgers", burgerName, function (res) {
            cb(res);
        });
    },

    update: function (columnSet, condition, cb) {
        orm.updateOne("burgers", columnSet, condition, function (res) {
            cb(res);
        });
    },

    delete: function (condition, cb) {
        orm.deleteOne("burgers", condition, function (res) {
            cb(res);
        })
    },
}

module.exports = burger;