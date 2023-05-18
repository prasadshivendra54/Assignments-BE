// 

const mongoose = require('mongoose')
const userSchema = require('../models/userSchema')
const productSchema = require('../models/productSchema')


// const middlewareOne = (req, res, next) => {
//     let headerOne = req.headers["isFreeAppUser"]
//     let bodyOne = req.body
//     if(!headerOne){
//         res.send("Something is missing")
//     }else{
//         req.body.isFreeAppUser = headerOne
//         next()
//     }
// }

// const middlewareTwo = (req, res, next) => {
//     let bodyTwo = req.body
//     let userId = bodyTwo['User_Id']
//     let productId = bodyTwo['Product_Id']
    
//     if(!mongoose.isValidObjectId(userId)){
//         res.send('User ID Not valid')
//     }else if(!mongoose.isValidObjectId(productId)){
//         res.send('Product ID Not Valid')
//     }else{
//         next()
//     }
// }

// const middlewareThree = async (req, res, next) => {
//     let userId = req.body.User_Id
//     let productId = req.body.Product_Id

//     let findUser = await userSchema.findById(userId)
//     let findProduct = await productSchema.findById(productId)

//     if(!findUser || !findProduct){
//         if(!findUser){
//             res.send('User not Exist')
//         }else{
//             res.send('Product Not Exist')
//         }
//     }else{
//         next()
//     }
// }

const addorder = async function(req,res,next){
    let isFreeAppUsers = req.header("isFreeAppUser")
    if(!isFreeAppUsers){
        return res.send("Header is missing")
    }
    req.body.isFreeAppUser = isFreeAppUsers
    console.log(req.body)
    let userid = req.body.User_Id
    let productid = req.body.Product_Id

    let findUser = await userSchema.findById(userid)
    let findProduct = await productSchema.findById(productid)

    if(!findUser || !findProduct){
        res.send("Please Give Valid User ID or Product ID")
    }
    next()
}

// module.exports = {middlewareOne, middlewareTwo, middlewareThree}

module.exports = {addorder}