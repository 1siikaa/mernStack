// ------------------------------------------------------------- imports -----------------------------------------------------------

const joi = require("joi");


// --------------------------------------- perform joi validation -------------------------------------------------
module.exports = {

  textvalidation: joi.object({
    text: joi
    .string()
    .required()
    .messages({"any only": "This text field is not containing valid value for image convertion. e.g=> you can write a image of dog."})
    .regex(/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/),
    format: joi
    .string()
    .messages({"any only":"provide this format field"})
    .regex(/(gif|jpe?g|tiff?|png|webp|bmp)$/i),
    width: joi
    .string()
    .messages({"any only": "image size is too large"})
    .regex(/^(?:[1-9]|\d{2,3}|[1-4]\d{3}|5000)$/),
    height: joi
    .string()
    .messages({"any only": " image size is too large"})
    .regex(/^(?:[1-9]|\d{2,3}|[1-4]\d{3}|5000)$/)

}),


  uservalidation: joi.object({
    name: joi
      .string()
      .required()
      .messages({ "any only": "Name is mandatory field." })
      .regex(/^[a-z ,.'-]+$/i),
    password: joi
      .string()
      .min(8)
      .max(15)
      .regex(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)
      .required()
      .messages({ "any only": "Password is mandatory field." }),
    email: joi
      .string()
      .required()
      .messages({ "any only": "Email is mandatory field." })
      .regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
      address: joi
      .string()
      .required()
      .messages({ "any only": "Address is mandatory field." })
    }),

  loginvalidation: joi.object({
    password: joi
      .string()
      .min(8)
      .max(15)
      .regex(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)
      .required()
      .messages({ "any only": "password is mandatory field." })
      ,
      email: joi
      .string()
      .required()
      .messages({ "any only": "Email is mandatory field." })
      .regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
      
  }),

};