const express = require('express');
const router = express.Router();

const moviesArray = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]

const likeMovies = [ 
    {
    id: 1,
    name1: "The Date"
   },
    {
    id: 2,
    name1: "PK"
   },
    {
    id: 3,
    name1: "Jail"
   },
    {
    id: 4,
    name1: "Drisyam2"
   }]


// Problem 1. 
router.get('/get/movies', function(req, res){
    res.send(moviesArray);
})


//problem 2 and problem 3
router.get('/get/movies/:id', function(req,res){
    const id1 = req.params.id
    if (id1 > moviesArray.length - 1  || id1 < 0){
        res.send(`Not Availbel !`)
    }else{
        res.send(moviesArray[id1])
    }
})


// problem 4
router.get('/get/allfilms', function(req,res){
    res.send(likeMovies);
})


//problem 5
router.get('/get/films/:filmId',function (req,res){
    const id2 = req.params.filmId;
    if (id2 > likeMovies.length || id2 < 0 || id2 == likeMovies.length){
        res.send('Not Availbel !')
    } else{
        res.send(likeMovies[id2])
    }
})

module.exports = {router}
