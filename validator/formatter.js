
let data = '   functionUp  '

let trimData = function(data){
    return (`Data Trimed !` + data.trim())
}

let upperCaseData = function(data){
    return (data.toUpperCase())
}

let lowerCaseData = function(data){
    return (data.toLowerCase())
}

module.exports = {trimData, upperCaseData, lowerCaseData}




