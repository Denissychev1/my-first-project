const express = require('express');
const router = express.Router();

const imitationController = require('./controller/imitationController');
const userController = require('./controller/userController');

router.get('/users', userController.getUsers);
router.get('/imitations', imitationController.getImitations);

module.exports = router;
