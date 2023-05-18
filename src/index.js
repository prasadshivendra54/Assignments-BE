const express = require('express')
// const import { express } from " express"; // ES6 Import
const bodyparser = require('body-parser')
const { default: mongoose } = require('mongoose')
const route = require("../request/request.js")
const app = express();

mongoose.connect("mongodb+srv://tshivendra07:6sWDbb2xoYJ5IZ0N@cluster0.3dhywqg.mongodb.net/shivendra123first?retryWrites=true&w=majority",{
    useNewUrlParser : true
})
.then (() => console.log("SHIVENDRA your mongoDB is connected now"))
.catch(err => console.log(err))

// 6sWDbb2xoYJ5IZ0N

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use('/', route);

const PORT = 4000;

app.listen(PORT, function(){
    console.log('Hey.. SHIVENDRA your app is running on port  '+ PORT)
}); 
