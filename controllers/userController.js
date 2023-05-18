const jwt = require('jsonwebtoken')
const userSchema = require('../models/addUserSchema')

// to add users
const addUser = async (req, res) =>{
    try {
        let userData = req.body
        if(!userData){ // this message is not showing ***
            return res.status(400).send('fill required information')
        }
        let userAdded = await userSchema.create(userData)
        return res.status(201).send({msg : userAdded})

    } catch (error) {
        return res.status(500).send(error.message)
    }
}


// to login user with emailId and Password
const loginUser = async (req, res) =>{
    try {
        let userName = req.body.emaiId
        let userPassword = req.body.password

        if(!userName || !userPassword){
            return res.status(400).send("please enter email and password")
        }
        let user = await userSchema.findOne({emaiId : userName, password : userPassword})
        if(!user){
            return res.status(401).send("id or password is incorrect")
        }

        let token = jwt.sign({ userId : user._id.toString()}, "secret-key")
        return res.status(200).send({token : token})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


// this is for get user
const getUser = async (req, res) =>{
    try {
        let usersId = req.params.userId
        if(!usersId){ // this message is not showing ***
            return res.status(400).send("Please give userId")
        }

        let userDetails = await userSchema.findById(usersId)
        if(!userDetails){
        return res.status(404).send({msg : "User Not Exist"})
        }

        return res.status(201).send({data : userDetails})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



// this is for update
const updateUser = async (req, res) =>{
    try {
        let usersId = req.params.userId
        if(!usersId){ // this message is not showing ***
            return res.status(400).send("Please give userId")
        }
        let usersData = req.body
        let updatedUser = await userSchema.findByIdAndUpdate({_id : usersId}, usersData)
        // Q . how to check user id is vailid or not ??????
        return res.status(201).send({updatedStatus : updatedUser})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


// this is for delete 
const deleteUser = async (req, res) =>{
    try {
        let usersId = req.params.userId
        if(!usersId){ // this message is not showing ***
            return res.status(400).send("Please give userId")
        }
        let deletedUser = await userSchema.findByIdAndUpdate({_id : usersId}, {$set : {isDeleted : true}}, {new : true})
        // Q . how to check user id is vailid or not ???????
        return res.status(201).send({deletedStatus : deletedUser})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


// this is for postData
const postData = async (req, res) =>{
    try {
        let usersId = req.params.userId
        if(!usersId){ // this message is not showing ***
            return res.status(400).send("Please give userId")
        }
        let message = req.body.message
        let user = await userSchema.findById(usersId)
        let posts = user.post
        posts.push(message)

        let userPost = await userSchema.findByIdAndUpdate({_id : usersId}, {post : posts}, {new : true})
        return res.status(201).send({data: userPost})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


// Once, all the apis are working fine, move the authentication related code in a middleware called auth.js
// Add this middleware at route level in the routes where applicable.


module.exports = {addUser, loginUser, getUser, updateUser, deleteUser, postData}