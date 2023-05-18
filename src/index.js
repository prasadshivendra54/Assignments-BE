const express = require('express')
const bodyparser = require('body-parser')
const {default: mongoose} = require('mongoose')
const route = require('../router/route')
const app = express()

mongoose.connect("mongodb+srv://tshivendra07:6sWDbb2xoYJ5IZ0N@cluster0.3dhywqg.mongodb.net/shivendra123second?retryWrites=true&w=majority",{
    useNewUrlParser : true
})
.then (() => console.log("SHIVENDRA your mongoDB is connected now"))
.catch(err => console.log(err))

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use('/', route)

const PORT = 5000
app.listen(PORT, function(){
    console.log('Hey.. SHIVENDRA your app is running on port  ' + PORT)
})