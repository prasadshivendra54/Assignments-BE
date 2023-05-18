const express = require('express');
var bodyParser = require('body-parser');
const {router} = require('../api-src/movies/movies.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router, function(req, res){
    res.send('404 Not Found ! Please Set Your path')
});

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
