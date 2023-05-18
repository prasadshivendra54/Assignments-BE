const mongoose = require('mongoose')


const authorSchema = new mongoose.Schema({
    authorName : String,
    age : Number,
    address : String,
    rating : Number
},{ timestamps : true});

module.exports = mongoose.model('Assignment-day-4-author', authorSchema);