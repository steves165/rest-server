var express = require('express');
var router = express.Router();

var json = {"name":"usa","type":"mgnl:page","path":"/vhols/destinations/usa","identifier":"e0665e18-ca2f-4017-b929-823ce8cf6fbc","properties":[{"name":"description","type":"String","multiple":false,"values":["<p>Our holidays in America are simply the best. From the vast national parks to the huge theme parks, we offer quality at a fantastic value.</p>\n"]},{"name":"title","type":"String","multiple":false,"values":["USA"]},{"name":"currency","type":"String","multiple":false,"values":["US Dollar"]},{"name":"language","type":"String","multiple":false,"values":["American English"]},{"name":"whyChoose","type":"String","multiple":true,"values":["Because reasons?","It's nice?","Sad ending?"]},{"name":"mood","type":"String","multiple":false,"values":["Exstatic!!"]},{"name":"visa","type":"String","multiple":false,"values":["Yes"]},{"name":"vaccines","type":"String","multiple":false,"values":["Yes"]},{"name":"localTime","type":"String","multiple":false,"values":["West Coast GMT -7"]}],"nodes":[]};

/* GET users listing. */
router.get('/', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.send(json);
});

module.exports = router;
