const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const {name, doSomething} = require('./common')
const {welcome} = require('../logger/logger.js')
const {date, month, getBatchInfo} = require('../util/helper.js')
const {trimData, upperCaseData, lowerCaseData} = require('../validator/formatter.js')

router.get('/test-me', function (req, res) {
    res.send('This should be working!')
});

router.get('/test-you', function (req, res) {
    console.log('This is the constant I created', name)
    res.send('Hello there, welcome to this application!')
});

// call common.js function
router.get('/test-we', function (req, res) {
    res.send('Hello welcome to my new application ! ' + doSomething())
});


// Module 1
// call logger.js function
router.get('/test-welcome', function (req, res) {
    res.send(welcome('SHIVENDRA'))
});


// Module 2
// call helper.js function
router.get('/test-date', function (req, res) {
    res.send('Today Date is  ' + date())
});

router.get('/test-month', function (req, res) {
    res.send('The month is '+ month())
});

router.get('/test-info', function (req, res) {
    res.send(getBatchInfo("Technetium", "W3", "D4"))
});


// Module 3
// called formatter.js
let data = ' functionUp '
router.get('/test-trim', function (req, res) {
    res.send(trimData(data))
});

router.get('/test-uppercase', function (req, res) {
    res.send(upperCaseData(data))
});

router.get('/test-lowercase', function (req, res) {
    res.send(lowerCaseData(data))
});


// Module 4

// 1. 
// Requiring the lodash module in the script
const lodash = require("lodash"); // import lodash from lodash

let arr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
// Making chunks of size 4
console.log(lodash.chunk(arr, 4))

// 2.
let num = [1,3,5,7,9,11,13,15,17,19]
let newNum = lodash.tail(num);
console.log(newNum);

// 3.
let numArray = [12,45,12,55,45]
let merged = lodash.union(numArray);
console.log(merged)

// 4.
let abcArray = [["horror","The Shining"], ["drama","Titanic"], ["thriller","Shutter Island"], ["fantasy","Pans Labyrinth"]]
let getObj = lodash.fromPairs(abcArray);
console.log(getObj);



module.exports = router;