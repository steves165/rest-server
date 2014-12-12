var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('youtube', {title: 'Steves165\'s Website'});
});

module.exports = router;