const jwt = require('jsonwebtoken')
const userSchema = require('../models/addUserSchema')

// to add users
const addUser = async (req, res) =>{
    let userData = req.body
    let userAdded = await userSchema.create(userData)
    res.send({msg : userAdded})
}



// to login user with emailId and Password
const loginUser = async (req, res) =>{
    let userName = req.body.emaiId
    let userPassword = req.body.password

    let user = await userSchema.findOne({emaiId : userName, password : userPassword})
    if(!user){
        return res.send({
            status : false,
            msg : "userName or password is not corect"
        })
    }

    let token = jwt.sign({ userId : user._id.toString()}, "secret-key")
    res.send({status : true, token : token})
}


// this is for get user
const getUser = async (req, res) =>{
    let usersId = req.params.userId
    let userDetails = await userSchema.findById(usersId)
    if(!userDetails){
        return res.send({status : false, msg : "User Not Exist"})
    }

    res.send({status : true, data : userDetails})
}



// this is for update
const updateUser = async (req, res) =>{
    let usersId = req.params.userId

    let usersData = req.body
    let updatedUser = await userSchema.findByIdAndUpdate({_id : usersId}, usersData)
    
    // Q . how to check user id is vailid or not ??????

    return res.send({updatedStatus : updatedUser})
}


// this is for delete 
const deleteUser = async (req, res) =>{
    let usersId = req.params.userId

    let deletedUser = await userSchema.findByIdAndUpdate({_id : usersId}, {$set : {isDeleted : true}}, {new : true})

    // Q . how to check user id is vailid or not ???????
    
    return res.send({deletedStatus : deletedUser})
}


// this is for postData
const postData = async (req, res) =>{
    let usersId = req.params.userId
    let message = req.body.message

    let user = await userSchema.findById(usersId)
    let posts = user.post
    posts.push(message)

    let userPost = await userSchema.findByIdAndUpdate({_id : usersId}, {post : posts}, {new : true})
    return res.send({status : true, data: userPost})
}


// Once, all the apis are working fine, move the authentication related code in a middleware called auth.js
// Add this middleware at route level in the routes where applicable.


module.exports = {addUser, loginUser, getUser, updateUser, deleteUser, postData}