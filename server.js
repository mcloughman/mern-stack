const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

// express app
const app = express();

// middleware
app.use(express.json()); // any request that comes in with data will be parsed and attached to request obj
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to db! Listening on port", process.env.PORT);
    });
  })
  .catch((e) => {
    console.log(e);
  });
