
const authorModel = require("../models/authormodel");
const bookModel = require("../models/bookmodel.js");
const publisher = require('../models/publisher')

// this is for addAuthor 
let addAuthor  = async (req,res) => {
    let authorDatabase = req.body;
    let addedAuthor  = await authorModel.create(authorDatabase);
    res.send({"latest added author is " : addedAuthor })
}

// this is for add publisher
let addPublisher = async (req, res) => {
    let publisherDatabase = req.body
    let addedPublisher = await publisher.create(publisherDatabase)
    res.send({'latest publisher is ' : addedPublisher})
}

// this is for add books
let addBook = async (req, res) => {
    let bookDatabase = req.body
    if(!bookDatabase.author_id || !bookDatabase.publisher){
        if(!bookDatabase.author_id){
            res.send("Please enter author_id, This is required")
        }else{
            res.send("Please enter publisher_id, This is required")
        }
    }else{
        let findAuthor = await authorModel.findById({_id : bookDatabase.author_id})
        let findPublisher = await publisher.findById({_id : bookDatabase.publisher})
        if(!findAuthor || !findPublisher){
            if(!findAuthor){
                res.send("Please enter valid author_id")
            }else{
                res.send("Please enter valid publisher_id")
            }
        }
        let addedBook = await bookModel.create(bookDatabase) 
        res.send({'latest book is ' : addedBook})
    }
}

// this is for getBook
let getBook = async (req, res) => {
    let getBooks = await bookModel.find().populate("author_id").populate("publisher")
    res.send({'The book is ' : getBooks})
}

// this is for spesific author
let getOneBook = async (req, res) => {
    let oneBook = await bookModel.find().populate('author_id')
    res.send({msg : oneBook})
}

module.exports  = {addAuthor, addPublisher, addBook, getBook, getOneBook} ;