var _ = require('lodash');
var Category = require('../models/category_model.js');

module.exports = function(app){

    /* GET: list of all categories */
    app.get('/api/categories', function (req, res) {
        Category.find(function (err, categories) {
            if (err)
            {
                res.json({ Data: 'Error was found when querying for all categories.', Error: err });
            }
            else
            {
                res.json({ Data: categories, Error: null})
            }
        });
    });

    /* GET: Single Category */
    app.get('/api/categories/:id', function (req, res) {
        Category.findById(req.params.id, function (err, fact) {
            if (err)
            {
                res.json({ Data: 'Error was found when querying for the category with the id: ' + req.params.id, Error: err });
            }
            if (fact)
            {
                res.json({ Data: fact, Error: null });
            }
            else
            {
                res.json({ Data: 'No category was found with that id.', Error: null });
            }
        });
    });

    app.post('/api/categories', function (req, res) {
        var newCategory = new Category(req.body);
        newCategory.save(function (err) {
            if (err)
            {
                res.json({Data: null, Error: err});
            }
            else
            {
                res.json({ Data: 'Category was successfully saved to the database', Error: null});
            }
        });
    });
};