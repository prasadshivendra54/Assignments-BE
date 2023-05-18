const express = require('express')
const route = express.Router()
const controlers = require('../controler/control')


route.post("/createBook", controlers.createBookData);
route.get("/bookList", controlers.bookList);
route.post("/getBooksInYear", controlers.getBooksInYear);
route.post("/getParticularBooks", controlers.getParticularBooks)
route.get("/getXINRBooks", controlers.getXINRBooks)
route.get("/getRandomBooks", controlers.getRandomBooks);


module.exports = route

