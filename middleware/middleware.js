const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const tokenValidation = (req, res, next) =>{
    let token = req.header("x-auth-token")
    try {
        if(!token){
            return res.status(401).send("access token is not present")
        }

        let decodedtoken = jwt.verify(token, "secret-key")

        // Q . How to check decodedtoken is valid or not  ?????

        // this is for authorization
        if(decodedtoken.userId != req.params.userId){
            return res.status(401).send("you have no authorization")
        }

        next ();
        
    } 
    catch (error){
        // console.log(error)
        return res.status(500).send(error.message)
    }
}

module.exports = {tokenValidation};
