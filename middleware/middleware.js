const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const tokenValidation = (req, res, next) =>{
    let token = req.header("x-auth-token")
    try {
        if(!token){
            return res.send("access token is not present")
        }

        let decodedtoken = jwt.verify(token, "secret-key")

        // Q . How to check decodedtoken is valid or not  ?????

        // console.log(token);
        // console.log(decodedtoken);
        // console.log(req.params)

        // this is for authorization
        // if(decodedtoken.userId != req.params.userId){
        //     return res.send("you have no authorization")
        // }

        next ();
        
    } 
    catch (error){console.log(error)
        
    }
}

module.exports = {tokenValidation};
