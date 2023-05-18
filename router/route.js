const express = require('express')
const route = express.Router()
const controlers = require('../controler/control')


route.post("/createBook", controlers.createBook);
route.post("/createAuthor", controlers.createAuthor);
route.get("/getData", controlers.getElementById);
route.get("/updataData", controlers.updataData);
route.get("/getBook", controlers.getBook);

module.exports = route