var express = require("express");

var router = express.Router();

var recipe = require("../models/recipes.js");

router.get("/", function(req, res) {
  recipe.all(function(data) {
    var hbsObject = {
      recipes: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/recipes", function(req, res) {
  recipe.create([
    "recipe_name", "tried"
  ], [
    req.body.recipe_name, req.body.tried
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/recipes/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  recipe.update({
    tried: req.body.tried
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/recipes/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  recipe.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;