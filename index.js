const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const route = require('./routes/route')


const app = express()

mongoose.connect("mongodb+srv://tshivendra07:6sWDbb2xoYJ5IZ0N@cluster0.3dhywqg.mongodb.net/shivendra123-authorisation?retryWrites=true&w=majority", {
    useNewUrlParser : true
})
.then(() => console.log("Hey.. Shivendra Your DataBase Is Connected Now"))
.catch(err => console.log(err))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use('/', route)

const PORT = 6000
app.listen(PORT, function(){
    console.log('Hey.. SHIVENDRA your app is running on port  ' + PORT)
})