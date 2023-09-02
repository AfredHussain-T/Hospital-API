const express = require('express');
const router = express.Router();
const passport = require('passport');
// Importing passport local
const passLocal = require('../config/passportLocal');
const DocController = require('../controllers/doctorController');

router.post('/register' , DocController.registerDoctor);

// Implementing passport local to authenticate an user
router.post('/login',passport.authenticate('local' , {session:false}), DocController.doctorLogin);

module.exports = router;