const express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
    models.film
    .findAll({})
    .then(filmFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(filmFound));
    });
});

router.get('/:id', function(req, res, next) {
    models.film
    .findByPk(parseInt(req.params.id), {
     })
     .then(filmFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(filmFound));
     });
});

router.put('/:id', function(req, res, next) {
    let filmId = parseInt(req.params.id);
    models.film
    .update(req.body, { where: { film_id: filmId} })
    .then(result => res.redirect('/films/' + filmId))
    .catch(err => {
        res.status(400);
        res.send("Dude, you like, totally threw an error!");
    });
});

module.exports = router;