const express = require("express");
require("dotenv").config();
const workoutRoutes = require("./routes/workouts");
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

app.listen(process.env.PORT, () => {
  console.log("Listening on port ", process.env.PORT);
});
