const express = require('express');
const router = express.Router();

const patients = require('../server/controller/userController');

// Create a new Customer
router.post('/patients', patients.create);

// Delete a Customer with Id
router.delete('/patients', patients.delete);

module.exports = router;
