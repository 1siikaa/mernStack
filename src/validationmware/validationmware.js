const validation = require("../validationmware/validation");

module.exports = {
  textvalidation: (req, res, next) => {
const {error} = validation.textvalidation.validate(req.body);
if(error){
  console.log(error)
  return res.status(400).send({status: false, message:error.message});
  
}
else next();
  },
  uservalidation: (req, res, next) => {
    const { error } = validation.uservalidation.validate(req.body);
    if (error) {
      console.log(error)
      return res.status(400).send({ status: false, message: error.message });
    } else next();
  },


  loginvalidation: (req, res, next) => {
    const { error } = validation.loginvalidation.validate(req.body);
    if (error) {
      return res.status(400).send({ status: false, message: error.message });
    } else next();
  },
};