const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    User_Id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users"
    },
    Product_Id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Products"
    },
    Date : String
})

module.exports = mongoose.model("Orders", orderSchema)