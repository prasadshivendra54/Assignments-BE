const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    UserName : {
        type : String,
        required : true
    },
    Balance : Number,
    Address : String,
    Age : Number,
    Gender : {
        type : String,
        enum : ["Male",  "Female", "Other"]
    },
    isFreeAppUser : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model("Users", userSchema)