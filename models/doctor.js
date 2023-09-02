const mongoose = require('mongoose');

// Doctor Schema with the required details of a doctor

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cPassword: {
        type:String,
        required:true
    },
    cell: {
        type: String,
        unique: true,
        required: true
    },   
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }]
}, {timestamps: true});



const Doctor = mongoose.model('doctor' , doctorSchema);
module.exports = Doctor;