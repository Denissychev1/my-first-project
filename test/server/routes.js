const express = require('express');
const router = express.Router();

const patients = require('../server/controller/userController');
const imitations = require('../server/controller/imitationController');
// Create a new Customer
router.post('/patients', patients.create);

//Showing all patients
router.get('/patients', patients.getPatients);

// Patient by name
router.get('/patients/:id', patients.findById);

// Delete a Customer with Id
router.delete('/patients', patients.delete);

//Create new IMITATION
router.post('/im', imitations.create);

//Showing all IMITATIONS
router.get('/im', imitations.getImitations);

// Delete a Customer with Id
router.delete('/im', imitations.delete);

module.exports = router;
