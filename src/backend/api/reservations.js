const express = require("express");
const router = express.Router();
const knex = require("../database");
//  Returns all reservations
router.get("/", async (req, res) => {
  try {
    console.log("working");
    // knex syntax for selecting things.
    const reservations = await knex("reservation");
    res.json(reservations);
  } catch (error) {
    throw error;
  }
});
//  Adds a new reservation
router.post("/", async (req, res) => {
  try {
    const addReservation = await knex("reservation").insert({
      number_of_guests: req.body.number_of_guests,
      meal_id: req.body.meal_id,
      created_date: req.body.created_date,
      contact_phonenumber: req.body.contact_phonenumber,
      contact_name: req.body.contact_name,
      contact_email: req.body.contact_email,
    });
    res.send(addReservation);
  } catch (error) {
    throw error;
  }
});
// Returns reservation by id
router.get("/:id", async (req, res) => {
  try {
    if (req.params.id) {
      const reservation = await knex("reservation").where({
        id: req.params.id,
      });
      res.send(reservation);
    }
  } catch (error) {
    throw error;
  }
});
// Updates the reservations by id
router.put("/:id", async (req, res) => {
  try {
    const updateReservation = await knex("reservation")
      .where({ id: req.params.id })
      .update(req.body);
    res.send(updateReservation);
  } catch (error) {
    throw error;
  }
});
// Deletes the reservation by id
router.delete("/:id", async (req, res) => {
  try {
    const deleteReservation = await knex("reservation")
      .where({ id: req.params.id })
      .del();
    res.send(deleteReservation);
  } catch (error) {
    throw error;
  }
});
module.exports = router;
