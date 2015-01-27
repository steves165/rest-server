var express = require('express');
var router = express.Router();

var json = {
	title: 'Steves165\'s Website',
	subtitle: 'Custom PC Building Projects',
	main: [
		'This page will be added to soon.',
		'<img src="/images/1_gif.gif"/>',
		'For now please be content with this Licking GIF picture. FYI it\'s not mine it is a GIF version of this DeviantArt flash game (<a href="http://tranzopus.deviantart.com/art/Kitty-Licking-55090217">DeviantArt</a>) i\'m just using it because it\'s awesome!! :D :P'
	],
	form: false
}
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', json);
});

module.exports = router;