var express = require("express");
var router = express.Router();

//import task schema
var Task = require("../models/taskmodels");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/** Get Spesific Task */
router.get("/task/:id", function (req, res, next) {
  Task.findById({ _id: req.params.id }, function (err, data) {
    if (err) {
      res.json({ Status: "Error" });
    } else {
      res.json(data);
    }
  });
});

/* Give All Task */
router.get("/taskall", function (req, res) {
  Task.find({}, function (err, data) {
    if (err) {
      res.json({ Status: "Error" });
    } else {
      res.json(data);
    }
  });
});

/* Add Task */
router.post("/addtask", function (req, res) {
  var tmp = req.body;
  var tmpTask = new Task({
    taskName: tmp.taskName,
    taskContent: tmp.taskContent,
  });
  tmpTask.save(function (err, data) {
    if (err) {
      res.json({ Status: "Error" });
    } else {
      res.json({ Status: "Ok" });
    }
  });
  //  res.json({"Status":"False"})
});

/* Delete Task */
router.delete("/deltask/:id", function (req, res) {
  var tmpId = req.params.id;
  Task.deleteOne({ _id: tmpId }, function (err) {
    if (err) {
      res.json({ Status: "Error" });
    } else {
      res.json({ Status: "Ok" });
    }
  });
  //  res.json({"Status":"False"})
});

/* update Task */
router.put("/updatetask", function (req, res) {
  var tmp = req.body;
  console.log(tmp);
  Task.findOneAndUpdate(
    { _id: tmp._id },
    { $set: tmp },
    { new: true },
    function (err, doc) {
      if (err) {
        res.json({ Status: "Error" });
      } else {
        console.log(doc);
        res.json(doc);
      }
    }
  );

  //  res.json({"Status":"False"})
});

router.put("/isDone", function (req, res) {
  var tmp = req.body;
  console.log(tmp);
  Task.findOneAndUpdate(
    { _id: tmp._id },
    { $set: tmp },
    { new: true },
    function (err, doc) {
      if (err) {
        res.json({ Status: "Error" });
      } else {
        console.log(doc);
        res.json(doc);
      }
    }
  );
});

module.exports = router;
