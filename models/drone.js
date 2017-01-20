const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DroneSchema = new Schema({
  droneName: String,
  propellers: Number,
  maxSpeed: Number
});

//actual model
const Drone = mongoose.model('Drone', DroneSchema);


module.exports = Drone;