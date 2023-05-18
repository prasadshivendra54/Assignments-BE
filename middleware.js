
const assignmentMW = function (req, res, next) {
    let currentdate = new Date(); 
    let datetime = currentdate.getDate() + " " + (currentdate.getMonth() + 1) + " " + currentdate.getFullYear() + " " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":"+ currentdate.getSeconds();
    let ip = req.ip
    let url= req.originalUrl;
    console.log(`${datetime}${ip}${url}`)
    next()
}

module.exports = assignmentMW