const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const passport = require('passport');


// Implementing the jwt strategy to generate the auth token which can be used to verify the logged in user in order to perform the tasks implemented in the functions
router.get('/:status' ,  passport.authenticate('jwt' , {session: false} ) , reportController.getStatusReport);

module.exports = router;