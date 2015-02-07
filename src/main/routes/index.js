var express = require('express');
var router = express.Router();

var json = {
	title: 'Steves165\'s Website',
	subtitle: 'Welcome to my Website',
	main: [
		'Hello my name is Stephen Skidmore, I am 23 years old, I studied Computer Science at the University of Surrey and currently work as a web developer for Virgin Holidays LTD.',
		'I have made this website in order to look into and get to grips with <a href="https://material.angularjs.org">DeviantArt</a> as well expressjs used in a Node server. I also wanted to share some of my knowledge of web development especially JavaScript, JQuery and LoDash.',
	],
	form: false
}
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', json);
});

module.exports = router;