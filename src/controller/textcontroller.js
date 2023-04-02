//---------------------------------------------------------- textToImage api -------------------------------------------------
//---------------------------------------------------------- assignment api --------------------------------------------------




const textToImage = async function(req,res){
    try{
        if(!req.body.text)  return res.status(400).send({status:false, message: "please provide text data in request body"})
        // if text data is not present in the request body which is required according to fixed schema.
         // optional chaining
        const text= req.body.text.replace(/ /g,'-')
        console.log(text)
        // replacing all the white spaces of a string to perform better in a url by
        // converting all the keywords as a query parameter.
        if(!req.body.width) req.body.width = 1200
        if(!req.body.height) req.body.height = 500
        if(!req.body.format) req.body.format  = 'jpg'
        
         req.body.width= parseInt(req.body.width)
         req.body.height = parseInt(req.body.height)
         

        let url = `https://source.unsplash.com/${req.body.width}x${req.body.height}/?${text}&fm=${req.body.format}`
        console.log(url)

        // using tempalate literal es6 feature so that we can concatenate javascript variable value without 
        // using ternary operator.

        const urlExistModule = await import('url-exist')
        // importing url-exist module to find if url is existing or not 

        const exists = await urlExistModule.default(url)
        // we can not use url-exist directly in a module. we can do this and this method return boolean value
        // true is for a existing url and false for a non-existing url
        if(!exists) return res.status(404).send({status:false, message:"the text can not be converted into a image."})
        // if a url is not existing we can simply return the message because image can not be generated in this case.

        req.body.url = url // adding url key and it's value in request.body object
        console.log(req.body)
        // we will log the request body to check what fields request body is containing.

        // 200 for successful response
        return res.status(200).send({status:true, data: req.body.url})
    }
    catch(err){
        const {name, message} = err 
        // destructuring err object

        console.log(name , message) 
        // this statement will log the err that is not handled above.

        return res.status(500).send({status:false, message:err.message, errName: err.name}) 
        // 500 indicates internal server error
    }
}

// ---------------------------------------------- exports -------------------------------------------------
module.exports.textToImage = textToImage