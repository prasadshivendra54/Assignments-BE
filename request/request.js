const express = require('express');
const request = express.Router();
const myModel = require("../models/model.js")
const mycontroller = require("../controlers/control.js")


request.post("/createNewBook", mycontroller.createNewBook)

request.get("/getBook", mycontroller.getBook)

module.exports = request;
