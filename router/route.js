const express = require('express')
const route = express.Router()
const controlers = require('../controler/control')


route.post("/addAuthor", controlers.addAuthor);
route.post("/addPublisher", controlers.addPublisher);
route.post("/addBook", controlers.addBook);
route.get("/getBook", controlers.getBook);
route.get("/getOneBook", controlers.getOneBook);

module.exports = route