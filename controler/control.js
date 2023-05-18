
const authorModel = require("../models/authormodel.js");
const bookModel = require("../models/bookmodel.js");

// this is for createBook
let createBook = async (req,res) => {
    let currentBook = req.body;
    let addedBook = await bookModel.create(currentBook);
    res.send({"latest added book is " : addedBook})
}

// this is for createAuthor
let createAuthor = async (req,res) => {
    let currentBook = req.body;
    let addedBook = await authorModel.create(currentBook);
    res.send({"latest added book is " : addedBook})
}

// this is for read/get
let getElementById = async (req, res) => {
    let data = await authorModel.find({authorName : "chetan Bhagt"})
    let allData = await bookModel.find({authorId : "2"})
    res.send(allData)
}

// this is for update
let updataData = async (req, res) => {
    let oneUpdate = await bookModel.findOneAndUpdate(
        {book : "Two states 2"},
        {$set : {price : 100}},
        {new : true}
    )
    res.send(oneUpdate)
}

// this is for getBook data by his cost
let getBook = async (req, res) =>{
    let costbook = await bookModel.find({price : {$gt : 50, $lt : 100}}).select({authorId : 1, book : 1, authorName : 1})
    res.send(costbook)
}


module.exports.createBook = createBook;
module.exports.createAuthor = createAuthor;
module.exports.getElementById = getElementById;
module.exports.updataData = updataData;
module.exports.getBook = getBook;

