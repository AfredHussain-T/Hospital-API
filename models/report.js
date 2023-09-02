const mongoose = require('mongoose');

// Report schema with doctor id and patient id along with the status of the report.
const report = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctor'
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    status: {
        type: String,
        enum:['Negative', 
            'Travelled-Quarantine', 
            'Symptoms-Quarantine',
            'Positive-Admit']
    }
}, {timestamps:true});

const PatientReport = mongoose.model('patient-report' , report);
module.exports = PatientReport;