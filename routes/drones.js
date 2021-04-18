const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((allDrones) => {
      console.log(allDrones);
      res.render("drones/list.hbs", { allDrones });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propeller, maxSpeed } = req.body;
  Drone.create({ name, propeller, maxSpeed })
    .then((drones) => {
      res.redirect("/drones");
    })
    .catch((err) => console.log(err));
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  Drone.findById(id)
    .then((drones) => {
      res.render("drones/update-form.hbs", { drones });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then((drones) => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
