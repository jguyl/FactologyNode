var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({

    catName: String,

});

module.exports = mongoose.model('Category', categorySchema);