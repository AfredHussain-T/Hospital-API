const express = require('express');
const router = express.Router();

// Router which includes all API call related to doctor
router.use('/doctor' , require('./doctorRoutes'));

// Router which includes all API call related to Patient
router.use('/patient' , require('./patientRoutes'));

// Router which includes all API call related to reports
router.use('/report' , require('./reportRoutes'));

module.exports = router;