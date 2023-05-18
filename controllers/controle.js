const userSchema = require('../models/userSchema')
const productSchema = require('../models/productSchema')
const orderSchema = require('../models/orderSchema')

// This is for create/add Products
let addProduct = async (req, res) => {
    let productData = req.body
    let addedProduct = await productSchema.create(productData)
    res.send({msg : addedProduct})
}


// This is for add Users
const addUser = async (req, res) => {
    let userData = req.body
    let addedUser = await userSchema.create(userData)
    res.send({mag : addedUser})
}


// This is for orders
// const addOrder = async (req, res) => {
//     let headerOne = req.headers.isFreeAppUser
//     let userId = req.body.User_Id
//     let productId = req.body.Product_Id
    
//     let findUser = await userSchema.findById(userId)
//     let findProduct = await productSchema.findById(productId)

//     let updatedBalence = findUser.Balance - findProduct.Price

//     if(headerOne == 'false'){
//         if(updatedBalence > 0){
//             let saveBalance = await userSchema.findByIdAndUpdate(userId, {$set : {Balance : updatedBalence}}, {new : true})
//             req.body.Balance = req.Price
//             let orderData = req.body
//             let orderPlaced = await orderSchema.create(orderData)
//             res.send({msg : "OrderPlaced Successfully", OrderDetails : orderPlaced})
//         }else{
//             res.send('No sufficient Balance')
//         }
//     }else{
//         req.body.Balance = 0
//         let orderData = req.body
//         let orderPlaced = await orderSchema.create(orderData)
//         let populate = await orderSchema.find().populate("Users")
//         res.send({msg : populate})
//     }
// }

const addOrder = async (req, res) => {
    let userID = req.body.User_Id
    let productId = req.body.Product_Id
    
    let isFreeAppUser = req.header("isFreeAppUser")

    let findUser = await userSchema.findById(userID)
    let findProduct = await productSchema.findById(productId)
    // console.log(findProduct)

    let value = findUser.Balance - findProduct.Price

    if(isFreeAppUser == 'false'){
        if(value >= 0){
            req.body.Amount = findProduct.Price
            let updateUser = await userSchema.findByIdAndUpdate(
                userID,
                {$set : {Balance : value}}
            )
            let orderPlaced = await orderSchema.create(req.body)
            return res.send(orderPlaced)
        }
        if(value < 0){
            res.send("No Sufficient balence")
        }
    }else{
        req.body.Amount = 0
        let orderPlaced = await orderSchema.create(req.body)
        return res.send(orderPlaced)
    }
}

const getOrderList = async (req, res) => {
    let data = await orderSchema.find()
    return res.send(data)
}


module.exports = {addProduct, addUser, addOrder, getOrderList}