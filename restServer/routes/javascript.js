var express = require('express');
var router = express.Router();

var json = {
	title: 'Steves165\'s Website',
	subtitle: 'JavaScript Projects',
	main: [
		'On this page are links to all of the JavaScript projects that I have created, each one links to a demonstration of the JavaScript. The code for the JavaScript is also given, I will be doing some tutorials in the future that will also be posted here.'
	],
	links: {
		cd1: {
			text: 'Calculator Design 1',
			link: 'http://www.steves165.co.uk/dist/index.html',
			listShow: true
		}
	},
	form: false
}

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', json);
});

module.exports = router;