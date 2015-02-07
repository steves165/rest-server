var express = require('express');
var router = express.Router();

var defaultImages = {
	licking: {
		link: '/images/1_gif.gif',
		alt: 'Licking cat GIF'
	}
}

var json = {};

json['home'] = {
	subtitle: 'Welcome to my Website',
	links: {
		md: {
			text: 'Angular Material design',
			link: 'https://material.angularjs.org',
			listShow: false
		}
	},
	main: [
		'Hello my name is Stephen Skidmore, I am 23 years old, I studied Computer Science at the University of Surrey and currently work as a web developer for Virgin Holidays LTD.',
		'I have made this website in order to look into and get to grips with <a href={{json.links.md.link}}>{{json.links.md.text}}</a> as well expressjs used in a Node server. I also wanted to share some of my knowledge of web development especially JavaScript, JQuery and LoDash.',
		'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
		'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere',
		'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then'
	],
	form: false
};

json['js'] = {
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
};

json['cpb'] = {
	subtitle: 'Custom PC Building Projects',
	links: {
		da: {
			text: 'DeviantArt',
			link: 'http://tranzopus.deviantart.com/art/Kitty-Licking-55090217',
			listShow: false
		}
	},
	images: {
		defaultImages: defaultImages
	},
	main: [
		'This page will be added to soon.',
		'<img src={{json.images.defaultImages.licking.link}} alt={{json.images.defaultImages.licking.alt}}/>',
		'For now please be content with this Licking GIF picture. FYI it\'s not mine it is a GIF version of this DeviantArt flash game (<a href={{json.links.da.link}}>{{json.links.da.text}}</a>) i\'m just using it because it\'s awesome!! :D :P'
	],
	form: false
};

json['profile'] = {
	subtitle: 'My Profile',
	links: {
	},
	images: {
		defaultImages: defaultImages,
		me: {
			alt: 'Me',
			link: '/images/me.jpg'
		}
	},
	main: [
		'<div><img class="me-pic" src={{json.images.me.link}} alt={{json.images.me.alt}}/></div><h2>Name</h2><p class="paragraph-padding">Stephen Skidmore</p>',
		'<div><h2 class="paragraph-padding">Date of Birth</h2><p class="paragraph-padding">22<em>nd</em> Feburary 1991</p></div>',
		'<div><h2 class="paragraph-padding">Personal Profile</h2><p class="paragraph-padding">I am currently studying for my final year at university and I am seeking a career in Computer Science or IT. I have a considerable knowledge of Computer Hardware, Web Development and Software Engineering. Equally so, I have experience in technical support from sorting out friends and families systems. In my free time I am a volunteer skilled instructor in the scouting association and have an enhanced CRB for them. I have worked for Sainsbury\'s as a Butcher and Fishmonger for over 5 years in a part time capacity and this has given me a great deal of customer service experience.</p></div>',
		'<div><h2 class="paragraph-padding">Interests</h2><p class="paragraph-padding">I have a keen interest in Art, History and Architecture and particularly enjoy visiting Italy to sample their culture. I am a keen skier and have skied in a number of countries over the last 11 years</p></div>',
		'<div><h2 class="paragraph-padding">Qualifications</h2><p class="paragraph-padding">Degree - Computer Science BSc <p>A Levels - Double Applied IT, Environmental Science and Design &amp; Technology</p><p>GCSE\'s - 4 x A\'s, 1 x B\'s and 6 x C\'s</p></p></div>'
	],
	form: false
};

json['contact'] = {
	subtitle: 'Contact Me',
	links: {},
	images: {
		defaultImages: defaultImages
	},
	main: [],
	form: true
};

json['youtube'] = {
	subtitle: 'My Youtube Channel',
	links: {},
	images: {
		defaultImages: defaultImages
	},
	main: [
		'This page is devoted to me experimenting with the use of the Youtube API. The page currently shows the most recent video on my youtube channel. My youtube channel mainly consists of reviews of tech products that I have used. It will also contain a list of videos on the channel soon.'
	],
	form: false,
	youtube: true
}

router.post('/main', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	res.send(json[req.query.page]);
});

module.exports = router;