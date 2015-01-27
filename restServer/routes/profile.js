var express = require('express');
var router = express.Router();

var json = {
	title: 'Steves165\'s Website',
	subtitle: 'My Profile',
	main: [
		'</div><h2>Name</h2><p class="paragraph-padding">Stephen Skidmore</p>',
		'<div><h2 class="paragraph-padding">Date of Birth</h2><p class="paragraph-padding">22<em>nd</em> Feburary 1991</p></div>',
		'<div><h2 class="paragraph-padding">Personal Profile</h2><p class="paragraph-padding">I am currently studying for my final year at university and I am seeking a career in Computer Science or IT. I have a considerable knowledge of Computer Hardware, Web Development and Software Engineering. Equally so, I have experience in technical support from sorting out friends and families systems. In my free time I am a volunteer skilled instructor in the scouting association and have an enhanced CRB for them. I have worked for Sainsbury\'s as a Butcher and Fishmonger for over 5 years in a part time capacity and this has given me a great deal of customer service experience.</p></div>',
		'<div><h2 class="paragraph-padding">Interests</h2><p class="paragraph-padding">I have a keen interest in Art, History and Architecture and particularly enjoy visiting Italy to sample their culture. I am a keen skier and have skied in a number of countries over the last 11 years</p></div>',
		'<div><h2 class="paragraph-padding">Qualifications</h2><p class="paragraph-padding">Degree - Computer Science BSc <p>A Levels - Double Applied IT, Environmental Science and Design &amp; Technology</p><p>GCSE\'s - 4 x A\'s, 1 x B\'s and 6 x C\'s</p></p></div>'
	],
	form: false
}
/* GET home page. */
router.get('/', function(req, res) {
  res.render('profile', json);
});

module.exports = router;