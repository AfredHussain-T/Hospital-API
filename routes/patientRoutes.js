const express = require('express');
const router = express.Router();
const passport = require('passport');
// importing jwt
const jwt = require('jsonwebtoken');
const patient_controller = require('../controllers/patientController');

// Implementing the jwt strategy to generate the auth token which can be used to verify the logged in user in order to perform the tasks implemented in the functions
router.post('/register', passport.authenticate('jwt', { session: false }), patient_controller.patientRegister);
router.post('/:patientId/generateReport', passport.authenticate('jwt', { session: false }), patient_controller.createReport);
router.get('/:patientId/all_reports' , passport.authenticate('jwt' , {session: false}) , patient_controller.getAllReports);

module.exports = router;