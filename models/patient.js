const mongoose = require('mongoose');

//Patient Schema with the required details of a patient.
const patient = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cell: {
        type: String,
        unique: true,
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctor'
    }
    ,
    report: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patient-report'
    }]
}, {timestamps: true});

const Patient = mongoose.model('Patient' , patient);
module.exports = Patient;