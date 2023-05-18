const mongoose = require('mongoose')


const authorSchema = new mongoose.Schema({
    authorName : String,
    authorId : {
        type : String,
        required : true,
        unique : true
    },
    age : Number,
    address : Number
},{ timestamps : true});

module.exports = mongoose.model('Assignment-day-3-author', authorSchema);