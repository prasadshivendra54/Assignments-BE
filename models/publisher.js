const mongoose = require('mongoose')


const publisherSchema = new mongoose.Schema({
    name : String,
    headQuarter : String
},{ timestamps : true});

module.exports = mongoose.model('Assignment-day-4-publisher', publisherSchema);