const express = require('express');
// importing the database connections
const dbConnection = require('./config/mongoose');
// importing the router
const router = require('./routes/indexRoutes');
// importing the passport js
const passport = require('passport');
// importing the passport local
const localPassport = require('./config/passportLocal');
const app = express();
const port = 1005;

// implementint the body parser in order to pass the inputs into request.body
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Implementing the passport local
app.use(passport.initialize());
app.use(passport.setAuthenticatedUser); 
app.use('/' , router);
app.listen(port , function(err){
    if(err){
        console.log('Error' , err);
        return;
    }

    console.log(`Application is running on ${port}`);
})