// ----------------------------------------------------------- imports ---------------------------------------------------------------------------------------
const signupmodel = require("../models/signupmodel");
const jwt = require('jsonwebtoken') // jwt package for authentication and authorization purpose.
const bcrypt = require('bcrypt') // bcrypt for hashing a password to increase the security of week passwords.

const addUser = async (req,res)=>{
    try{
        
        const salt = await bcrypt.genSalt(10)  // this method takes a parameter to generate the salt.
        const securePass = await bcrypt.hash(req.body.password, salt); // now we can use another method to hash the password
        req.body.password=securePass // updating password field of request body
        const unique= await signupmodel.find({email:req.body.email}) // find method to perform query over database for searching the unique identity 
        if(unique.length!==0){    // because find returns a array
             return res.status(409).json({ success: false, message:"email already exist."})
        }

        await signupmodel.create(req.body).then(user => {
            const data = {
                user: {
                    id: user.id    // payload
                }
            }
            const authToken = jwt.sign(data, process.env.JWTSECRET); // generating a jwt token
             // storing this token into localStorage
            return res.status(200).json({success:true , authToken})
        })
            .catch(err => {
                console.log(err.message, err.name);
                return res.json({ success: false, message: "Please enter a unique value." }) //  error handling
            })
    }
            
    catch (error) {
        console.error(error.message, error.name)  // logging the errors
        res.status(500).json({success: false, message: "Server Error"})
    }
}


module.exports.addUser=addUser //export the function