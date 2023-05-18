const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    ProductName : {
        type : String,
        required : true
    },
    Category : {
        type : String,
        required : true
    },
    Price : {
        type : Number,
        required  : true
    }
})

module.exports = mongoose.model("Products", productSchema)