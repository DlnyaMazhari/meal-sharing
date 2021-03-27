const express = require("express");
const router = express.Router();
const knex = require("../database");
//  Returns all reviews
router.get("/", async (req, res) => {
  try {
    console.log("working");
    // knex syntax for selecting things.
    const reviews = await knex("review");
    res.json(reviews);
  } catch (error) {
    throw error;
  }
});
//  Adds a new review
router.post("/", async (req, res) => {
  try {
    const addreview = await knex("review").insert({
      title: req.body.title,
      description: req.body.description,
      meal_id: req.body.meal_id,
      stars: req.body.stars,
      created_date: req.body.created_date,
    });
    res.send(addreview);
  } catch (error) {
    throw error;
  }
});
// Returns review by id
router.get("/:id", async (req, res) => {
  try {
    if (req.params.id) {
      const review = await knex("review").where({
        id: req.params.id,
      });
      res.send(review);
    }
  } catch (error) {
    throw error;
  }
});
// Updates the reviews by id
router.put("/:id", async (req, res) => {
  try {
    const updatereview = await knex("review")
      .where({ id: req.params.id })
      .update(req.body);
    res.send(updatereview);
  } catch (error) {
    throw error;
  }
});
// Deletes the review by id
router.delete("/:id", async (req, res) => {
  try {
    const deletereview = await knex("review")
      .where({ id: req.params.id })
      .del();
    res.send(deletereview);
  } catch (error) {
    throw error;
  }
});
module.exports = router;
