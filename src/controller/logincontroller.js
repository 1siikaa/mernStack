// --------------------------------------------- imports --------------------------------------------------------
const signupmodel = require("../models/signupmodel");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


// ---------------------------------------------- login api ------------------------------------------------------------------

const userLogin = async(req,res)=>{
    try{
        const { email, password } = req.body;
        
            const user = await signupmodel.findOne({ email });  
            if (!user) {
                return res.status(400).json({ success: false , message: "Try Logging in with correct email" });
            }
    
            const pwdCompare = await bcrypt.compare(password, user.password); // this return true false.
            if (!pwdCompare) {
                return res.status(400).json({ success: false, message: "Try Logging in with correct password" });
            }
            const data = {
                user: {
                    id: user.id  //payloads
                }
            }
            const authToken = jwt.sign(data, process.env.JWTSECRET);
           jwt.verify(authToken, process.env.JWTSECRET ,  (err, decodeToken)=>{
            if(err){
                return res.status(401).json({success:false, message:"forbidden"})
            }
            else{
              req.decodeToken= decodeToken // storing inside request object to use this globally
            }

            })
            
            return res.status(200).json({ success: true, authToken })
    
        } catch (error) {
            console.error(error.message, error.name)
           return res.status(500).json({success:false , message: "Server Error"})
        }
    }



// ---------------------------------------------------------- exports ----------------------------------------------------------------------
module.exports.userLogin=userLogin   


