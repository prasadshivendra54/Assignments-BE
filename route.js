const express = require('express')
const router = express.Router();

// router.get('/get', function(req, res){
//     res.send('This is a get method')
// })

// you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
// take input in query param as votingAge..and for all the people above that age, change votingStatus as true
// also return an array consisting of only the person that can vote

let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
]


let list = []

router.post("/voterlist", function(req, res){
   let data = req.query.votingAge;
   for (let i = 0; i < persons.length; i++){
      persons[i].votingStatus = persons[i].age >= data ? "true" : "false" ; 
      if(persons[i].votingStatus == "true"){
        list.push(persons[i]);
      }
   }
   res.send({list});

})
module.exports = {router}