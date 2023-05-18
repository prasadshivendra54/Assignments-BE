/* ASSIGNMENT :-
Write a middleware that logs (console.log) some data everytime any API is hit
Data to be logged:-the current timestamp(as date time) , the IP of the user and the route being requested).
For this first figure out how to get the route location being request, how to get current timestamp and how to get the IP.
NOTE: ip of local computer will come as ::1 so dont get disturbed by seeing this)
 
e.g: you should be logging something like this on each line:
time , IP, Route should be printed on each line in terminal( every time an api is hit)
2010-08-19 14:00:00 , 123.459.898.734 , /createUser
 
SOLUTION:
 
//create a middleware using app.use(functionName) so that this piece of code gets called everytime any api is called
 
const assignmentMW= function (req, res, next) {
    var currentdate = new Date(); 
    var datetime =  currentdate.getDate() + " "
                    + (currentdate.getMonth()+1)  + " " 
                    + currentdate.getFullYear() + "  "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
 
    let ip= req.ip
    let url= req.originalUrl
    console.log(`${datetime}  ${ip}  ${url}`)
    next()    
}
 
app.use( assignmentMW )
*/

const express = require('express')
const route = require('./route')
const assignmentMW = require('./middleware')
const app = express()

// This is a Application Level Middleware
app.use(assignmentMW)

app.use('/', route)

let PORT = 5000
app.listen(PORT, () => {
    console.log('App is running on ' + PORT)
})