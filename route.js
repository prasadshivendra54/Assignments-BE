const express = require('express')
const router = express.Router()


// Q.  Write a POST /players api that creates a new player ( i.e. that saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data

let players = [
    {
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
       "swimming"
        ]
    },
    {
    "name": "gopal",
    "dob": "1/09/1995",
    "gender": "male",
    "city": "delhi",
    "sports": [
        "soccer"
    ]
    },
    {
    "name": "lokesh",
    "dob": "1/1/1990",
    "gender": "male",
    "city": "mumbai",
    "sports": [
        "soccer"
    ]
    },
]

router.post('/players', function (req, res) {
    let data = req.body
    for(let a = 0; a < players.length; a++){
        if(players[a].name == data.name){
            return res.send('Player Already Exist')
        }
    }
    players.push(data)
    return res.send(players)
})

module.exports = {router};