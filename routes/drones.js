const express = require('express');

const Drone = require('../models/drone');

const router = express.Router();


router.get('/drones', (req, res, next) => {

  Drone.find((err, droneArray) => {
    if (err) return next(err);

    res.render("drones/index", {
      drones: droneArray
    });

  });

});


router.get('/drones/new', (req, res, next) => {
  // Iteration #4
});

router.post('/drones', (req, res, next) => {
  // Iteration #4
});


router.get('/drones/:id', (req, res, next) => {
  // Iteration #3
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #6 (Bonus)
});

router.post('/drones/:id', (req, res, next) => {
  // Iteration #6 (Bonus)
});


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5 (Bonus)
});


module.exports = router;
