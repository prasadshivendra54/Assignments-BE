const express = require('express')
const route = express.Router()

route.get('/home', (req, res) => {
    res.send('This is a home page')
})

route.get('/about', (req, res) => {
    res.send('This is a about page')
})

route.get('/contact', (req, res) => {
    res.send('This is a contact page')
})

module.exports = route