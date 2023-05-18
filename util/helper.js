let time = new Date();

let date = function(){
    return time.getDate();
}

let month = function(){
    return time.getMonth() + 1;
}

let getBatchInfo = function(batchName, week, day, ){
    return `${batchName} ${week} ${day}, The topic for today is Nodejs module system !`
}

module.exports = {date, month, getBatchInfo}