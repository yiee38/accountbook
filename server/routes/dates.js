const express = require("express");
 
const dateRoutes = express.Router();
 
const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

dateRoutes.route("/dates").get(function (req, res) {
    let db_connect = dbo.getDb("countbook");
    db_connect
      .collection("dates")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

dateRoutes.route("/dates/:id").get(function (req, res) {
    let db_connect = dbo.getDb("countbook");
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
      .collection("dates")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

dateRoutes.route("/dates/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      date: req.body.date,
    };
    db_connect.collection("dates").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
});



module.exports = dateRoutes;
 
   