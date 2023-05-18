const express = require('express')
const route = express.Router()
const controller = require('../controllers/userController')
const middlweare = require('../middleware/middleware')

// these are APIs
route.post('/addUser', controller.addUser)
route.post('/loginUser', controller.loginUser)
route.get('/getUser/:userId', middlweare.tokenValidation, controller.getUser)
route.put('/updateUser/:userId', middlweare.tokenValidation, controller.updateUser)
route.delete('/deleteUser/:userId', middlweare.tokenValidation, controller.deleteUser)
route.post('/postData/:userId', middlweare.tokenValidation, controller.postData)

module.exports = route