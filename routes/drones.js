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
  res.render("drones/new");
});

router.post('/drones', (req, res, next) => {
  const newDrone = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };

  Drone.create(newDrone, (err, docs) => {
    if (err) { throw err };

    console.log(`Created ${newDrone.droneName}`);


  });

  res.redirect("/drones")

});


router.get('/drones/:id', (req, res, next) => {
  const droneId = req.params.id;
  Drone.findOne({_id: droneId}, (err, droneObj) => {
    if (err) return next(err);

    res.render("drones/show", {
      drone: droneObj
    });

  });
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #6 (Bonus)
});

router.post('/drones/:id', (req, res, next) => {
  // Iteration #6 (Bonus)
});


router.post('/drones/:id/delete', (req, res, next) => {
  const droneId = req.params.id;

  Drone.findByIdAndRemove(droneId, (err, idk) => {
    if (err) return next(err);
    console.log("I guess something got deleted");

    res.redirect("/drones");
  });

});


module.exports = router;

















