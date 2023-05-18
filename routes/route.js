const express = require('express')
const route = express.Router()
const controller = require('../controllers/controle')
const middleware = require('../middlewares/midlleware')


route.post('/addProduct', controller.addProduct) // Problem no 1 
route.post('/addUser', controller.addUser) // Problem no 2
// route.post('/addOrder',  middleware.middlewareOne, middleware.middlewareTwo, middleware.middlewareThree, controller.addOrder) // Problem no 3
route.post("/addOrder", middleware.addorder, controller.addOrder)
route.get('/getOrderList', controller.getOrderList)
module.exports = route