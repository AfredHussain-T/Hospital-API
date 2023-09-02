const Doctors = require('../models/doctor');
const jwt = require('jsonwebtoken');


// Function to register a doctor
module.exports.registerDoctor = async function (req, res) {

    try {
        // Checking if the mail id is used
        let doctor = await Doctors.findOne({ email: req.body.email });
        if (doctor) {
            return res.status(409).json({
                message: 'Doctor Exists'
            })
        }
        // Confirming the password before creating the doctor
        if (req.body.password != req.body.cPassword) {
            return res.status(422).json({
                message: "Password do not match"
            })
        }
        let currDoctor = await Doctors.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            cPassword: req.body.cPassword,
            cell: req.body.cell
        });
        return res.status(200).json({
            message: 'Doctor Registered Successfully',
            currDoctor
        });

    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }

}

// Function for doctor login
module.exports.doctorLogin = async function (req, res) {
    try {
        // Implementing jwt sign method which passes the payload as first arguement, along with secret key
        jwt.sign(
            req.user.toJSON(),
            'ThisisAHospitalApiBackendApp',
            { expiresIn: "1h" },
            (err, asyncToken) => {
                if (err) {
                    return res.status(500).json({
                        message: 'Internal Server Error',
                    })
                }
                else {
                    console.log('Success')
                    return res.status(200).json({
                        message: 'Logged in using JWT',
                        JWT_Token: asyncToken,
                        doctor: req.user
                    })
                };
            });
    } catch (error) {
        console.log('Error:', error);
    }

}
