var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        var burgersObject = {
            burgers: data
        };
        console.log(burgersObject.burgers);

        res.render("index", burgersObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log('erergarsdgasgd');
    console.log(req.body);
    burger.insert(req.body.name, req.body.planet, function (Result) {
        res.json({ id: Result.insertId });
        console.log("Controller sats: " + req.body.name);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    var devouredStatus = `Devoured = ${req.body.devoured}`
    console.log("Condition", condition);

    burger.update(devouredStatus, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    console.log("DELETING....");
    var condition = "id = " + req.params.id;
    console.log(`Condition: ${condition}`);

    burger.delete(condition, function (result) {
        if (result.deletedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router;