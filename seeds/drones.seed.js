// Iteration #1
const mongoose = require("mongoose");

require("../db");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

const Drone = require("../models/Drone.model.js");
Drone.create(drones)
  .then(() => {
    console.log(`yay! ${drones.length} drones created`);
    mongoose.connection.close();
  })

  .catch((err) => {
    console.log("Error occured:", err);
  });
