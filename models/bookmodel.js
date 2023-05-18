
const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    author_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Assignment-day-4-author'
    },
    bookName : String,
    price : Number,
    ratings : Number,
    publisher : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Assignment-day-4-publisher'
    }
},{ timestamps : true});

module.exports= mongoose.model('Assignment-day-4-book', bookSchema);