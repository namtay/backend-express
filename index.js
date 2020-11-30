const express = require('express');
const app =express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const noteRouter = require('./controllers/Note'); 
require('dotenv').config();


app.use(bodyParser.json());

const config={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoose.connect(process.env.MONGODB_URI,config)
.then(
    ()=>{
        console.log("Successfully connected to MongoDB")
    }
)
.catch(err=>{
    console.log("Some problem occured")
})


 
app.use('/note',noteRouter);


app.listen(process.env.PORT,()=>{
    console.log('Express app is working');
})
