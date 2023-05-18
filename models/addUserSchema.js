const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    mobile : {
        type : Number,
        required : true
    },
    emaiId : String,
    password : String,
    gender : {
        type : String,
        enum : ["Male", "Female", "LGBT"]
    },
    isDeleted : {
        type : Boolean,
        default : false
    },
    age : Number,
    post : {
        type : [],
        default : []
    }
}, { timestamps : true })

module.exports = mongoose.model("users", userSchema)