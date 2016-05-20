var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Factology');
var db = mongoose.connection;

db.once('open', function () {
    console.log('Connected to Database.');

});

// ROUTES
var facts = require('./routes/facts.js')(app);
var categories = require('./routes/categories.js')(app);


app.get('/', function (req, res) {
   res.send('Need to implement a landing documentation page.');
});

/* Begin listening on requested port. */
var server = app.listen(3000, function () {
   console.log('Listening on http://127.0.0.1:3000/');
});