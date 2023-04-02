//----------------------------------------------------------- MAIN MODULE ----------------------------------------------------------------------------------
// ------------------------------------------------------------- IMPORTS ----------------------------------------------------
require('dotenv').config();
const express = require('express')
const app= express()  // initializing an empty express application
const route = require('./src/route/route')
const mongoose = require('mongoose')  // ODM library 
const cors= require('cors')  

app.use(cors()) // using cors middleware globally


app.use(express.json()) //express.json() middleware for parsing the incoming data 
mongoose.set('strictQuery', true);
mongoose.connect(process.env.STRING)   
.then(() => console.log("MongoDB is connected to this application successfully"))
.catch((error) => console.log(error))



app.use('/', route) // global middleware

app.listen(process.env.PORT, function(){
    console.log(`Express application is running on port ${process.env.PORT}`)
})  // application listening on this port