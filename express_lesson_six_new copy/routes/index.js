var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/films', function (req, res, next) {
  models.film
  .findAll({ include: [{ model: models.film }]})
  .then(filmsFound => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(filmsFound));
  });
});

module.exports = router;
