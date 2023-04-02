// --------------------------------------- imports ----------------------------------------------
const mongoose = require('mongoose')

const SignupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }

}, {timestamps: true})


// ------------------------------------------- exports ---------------------------------------------------------
module.exports = mongoose.model('signup', SignupSchema)


