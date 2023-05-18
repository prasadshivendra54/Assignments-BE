const express = require('express')
const bodyParser = require('body-parser')
const {router} = require('./route.js')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extends: true }))

app.use('/', router, function(req, res){
    res.send('404 Page Not Found ! Please set your path')
})

app.listen(process.env.PORT || 3000, function(){
    console.log('Express app running on port ' + (process.env.PORT || 3000))
})