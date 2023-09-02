const Doctors = require('../models/doctor');
const Patients = require('../models/patient');
const Reports = require('../models/report');


// Registering a patient
module.exports.patientRegister = async function(req,res){

    try {
        // Checking if the patient is assigned to any doctor
        let currPatient = await Patients.findOne({cell:req.body.cell});
        
        console.log('This is Docotr requesting here', req.user);
        if(!currPatient){
            let newPatient = await Patients.create({
                name: req.body.name,
                cell: req.body.cell,
                doctor: req.user.id

            })
            await Doctors.findByIdAndUpdate(req.user.id , {$push: {patients : newPatient.id}});
            return res.status(200).json({
                message: "Successfully Registered the patient",
                newPatient
            })
        }
        else{
            return res.send(409).json({
                currPatient,
                message: "Patient Exists"
            })
        }
    } catch (error) {
        console.log('Error:' ,error);
    }
    console.log('...');
}

// Creating a report for the patient
module.exports.createReport = async function(req,res){
    try {
        let currPatient = await Patients.findById(req.params.patientId);
        if(currPatient){
            let newReport = await Reports.create({
                doctor: req.user.id,
                patient: req.params.patientId,
                status: req.body.status,
             });
             await Patients.findByIdAndUpdate(req.params.patientId, {$push : {report: newReport.id}})
    
             return res.json(200 , {
                message: 'Report generated successfully',
                data: {
                    newReport,
                    currPatient
                }
             });
        }
        else{
            return res.json(409 , {
                message: 'Patient Not Found'
            })
        }
    } catch (error) {
        console.log('Error:', error);
    }
}

// Function to get all the reports of a particular patient
module.exports.getAllReports = async function(req,res){
    try {
        let patientId = req.params.patientId ;
        // before that check if the patient exists
        let currPatient = await Patients.findById(patientId).populate('report').populate({
            path: 'report',
            populate: {
                path: 'doctor'
            },
        }).populate({
            path: 'report',
            populate: {
                path: 'patient'
            },
        });
        if(currPatient){
            let Allreports = currPatient.report;
            console.log('00000000000' ,currPatient , '000000000000000');
            return res.json(200 , {
                data: {
                    message: "Fetched All the reports of the patient",
                    Allreports,
                }
            });
        }else{
            return res.json(409 , {
                message: "Patient Not Found, please register the patient unde the records"
            })
        }
    } catch (error) {
        console.log('Error: ', error);
    }
}