const Patients = require('../models/patient');
const Doctors = require('../models/doctor');
const Reports = require('../models/report');

// Get all the reports with the provided status
module.exports.getStatusReport = async function(req,res){
    try {
        // Check if there are reports for given status
        let currReport = await Reports.find({status:req.params.status}).populate('doctor').populate('patient');
        if(currReport){
            return res.json(200 , {
                message: `We have the below reports for this status:( ${req.params.status})`,
                currReport
            })
        }
        else{
            return res.json(500, {
                message: `We don't have any reports with this status(${req.params.status})`
            })
        }
    } catch (error) {
        console.log('Error:',error);
    }
}