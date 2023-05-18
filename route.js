const express = require('express')
const router = express.Router()

// router.get('/get', function(req, res){
//     res.send('Hello..')
// })


// Q.1
// router.get("/sol1", function (req, res) {
//     let arr = [1,2,3,5,6,7]
//     let sum = 0;
//     arr.forEach(element => { 
//         sum = sum + element 
//     });
//     let firstEelement = arr[0]
//     let lastElement = arr[arr.length-1]

//     let NumOfElements = (lastElement - firstEelement + 1)
//     let result  = (NumOfElements / 2) * (firstEelement + lastElement);

//     const missingNumber = (result - sum);

//     return res.send({"data" : missingNumber});
// });


// Q.2
// router.get('/sol2', function(req, res){
//     let arr = [33,34,35,37,38,39]
//     let sum = 0;
//     arr.forEach(element => { 
//         sum = sum + element 
//     });
//     let firstEelement = arr[0]
//     let lastElement = arr[arr.length-1]

//     let NumOfElements = (lastElement - firstEelement + 1)
//     let result  = (NumOfElements / 2) * (firstEelement + lastElement);

//     const missingNumber = (result - sum);

//     return res.send({"data" : missingNumber});
// })



// ________________________________________________________

// router.post('/postdata/:id', function(req, res){
//    if(req.body.username){
//     res.send(req.params)
//    }
// })

// router.get('/get', function(req, res){
//     res.send("hello")
// })

module.exports = {router};