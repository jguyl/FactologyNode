var _ = require('lodash');
var Fact = require('../models/fact_model.js');

module.exports = function(app){

    /* GET: list of all facts */
    /* This should not be used for every call to generate a fact */
    app.get('/api/facts', function (req, res) {
        Fact.find(function (err, allFacts) {
           if (err)
           {
               res.json({ Data: 'Error was found when querying for all facts.', Error: err });
           }
           else
           {
               res.json({ Data: allFacts, Error: null})
           }
        });
    });

    /* GET: Single Fact */
    app.get('/api/facts/:id', function (req, res) {
        Fact.findById(req.params.id, function (err, fact) {
            if (err)
            {
                res.json({ Data: 'Error was found when querying for the fact with the id: ' + req.params.id, Error: err });
            }
            if (fact)
            {
                res.json({ Data: fact, Error: null });
            }
            else
            {
                res.json({ Data: 'No fact was found with that id.', Error: null });
            }
        });
    });

    app.post('/api/facts', function (req, res) {
        var newFact = new Fact(req.body);
        newFact.save(function (err) {
            if (err)
            {
                res.json({Data: null, Error: err});
            }
            else
            {
                res.json({ Data: 'Fact was successfully saved to the database', Error: null});
            }
        });
    });
};