const express = require("express");
const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ msg: "Get all workouts" });
});

// GET a single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "Get a specific workout" });
});

// POST a new workout
router.post("/", (req, res) => {
  req;
  res.json({ msg: "POST a new workout" });
});
// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a new workout" });
});

// UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a new workout" });
});

module.exports = router;
