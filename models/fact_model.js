var mongoose = require('mongoose');

var factSchema = mongoose.Schema({

    Fact: String,
    Category: String,
    Author: String,

});

module.exports = mongoose.model('Fact', factSchema);