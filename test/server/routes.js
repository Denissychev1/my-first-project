const express = require('express');
const router = express.Router();

const patients = require('./controller/userController');
const imitations = require('./controller/imitationController');
const questions = require('./controller/questionsController');
const answers = require('./controller/answersController');
// Create a new Customer
router.post('/patients', patients.create);

//Showing all patients
router.get('/patients', patients.getPatients);

// Patient by name
router.get('/patients/:id', patients.findById);

//auth
router.post('/auth', patients.auth);
router.get('/auth', patients.findById);

// Delete a Customer with Id
router.delete('/patients', patients.delete);

//Create new IMITATION
router.post('/imitations', imitations.create);

//Showing all IMITATIONS
router.get('/imitations', imitations.getImitations);

//Showing all questions
router.get('/questions', questions.findQuestions);
router.post('/questions', questions.findQuestions);
//Showing all answers
router.get('/answers',answers.findAnswer);
router.post('/answers',answers.findAnswer);


// Delete a Customer with Id
router.delete('/im', imitations.delete);

module.exports = router;
