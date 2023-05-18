
const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
    book : String,
    authorId : {
        type : String,
        required : true
    },
    price : Number,
    rating : Number
},{ timestamps : true});

module.exports= mongoose.model('Assignment-day-3-book', bookSchema);