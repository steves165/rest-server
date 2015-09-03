var express = require('express');
var router = express.Router();

var json = {
	title: 'The Deceiver\'s Website',
	images: [
		'/images/home-images/space_1.jpg',
		'/images/home-images/space_4.png',
		'/images/home-images/space_3.jpg'
	],
	form: false
}
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', json);
});

module.exports = router;