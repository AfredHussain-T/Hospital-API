const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
// Setting up mongo URL to connect to data base
// mongoose.connect('mongodb://localhost:27017/hospital_API');
mongoose.connect('mongodb+srv://afredhussain69:waEOPiUIJ6ZyrAEX@hospital-api.gxfzy7g.mongodb.net/');

const connection = mongoose.connection;

// Checking if there is any error while connecting
connection.on('error' , console.error.bind(console, 'Error while establishing connection'));

// We will be notified if successful connection is established
connection.once('open' , function(){
    console.log('DB Connection successfully established' );
})

