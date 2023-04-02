// ------------------------------------------ imports --------------------------------------------------
const express = require('express');
const router = express.Router();  // creating a new router object
const testController=require("../controller/textcontroller")
const signupController = require('../controller/singnupcontroller')
const loginController = require('../controller/logincontroller')
const validationMware = require('../validationmware/validationmware')

// ---------------------------------- routing and router middleware -----------------------------------------------------=====
router.post('/text', validationMware.textvalidation, testController.textToImage)
router.post('/signup', validationMware.uservalidation,  signupController.addUser)
router.post('/login', validationMware.loginvalidation, loginController.userLogin)



// --------------------------------------- exporting router ---------------------------------------------------------
module.exports = router;


