const express = require('express');

const app = express();
const port = 1005;



app.listen(port , function(err){
    if(err){
        console.log('Error' , err);
        return;
    }

    console.log(`Application is running on ${port}`);
})