const mongoose = require('mongoose');

//Setting up the mongoose connection using mongo URL
// mongoose.connect('mongodb://127.0.0.1:27017/hospital_API');
mongoose.connect('mongodb+srv://afredhussain69:waEOPiUIJ6ZyrAEX@hospital-api.gxfzy7g.mongodb.net/');

const connection = mongoose.connection;

connection.on('error' , console.error.bind('error while connecting to the db' , console));

connection.once('open' , function(){
    console.log('DB connection is done');
});

