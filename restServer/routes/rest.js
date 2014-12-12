var express = require('express');
var router = express.Router();

var json = {"name":"Las Vegas","type":"mgnl:page","path":"/vhols/destinations/usa","identifier":"e0665e18-ca2f-4017-b929-823ce8cf6fbc","properties":[{"name":"description","type":"String","multiple":false,"values":["<p>Our holidays in America are simply the best. From the vast national parks to the huge theme parks, we offer quality at a fantastic value.</p>\n"]},{"name":"title","type":"String","multiple":false,"values":["USA"]},{"name":"currency","type":"String","multiple":false,"values":["US Dollar"]},{"name":"language","type":"String","multiple":false,"values":["American English"]},{"name":"mood","type":"String","multiple":false,"values":["Happy :D"]},{"name":"localTime","type":"String","multiple":false,"values":["West Coast GMT -7"]},{"name":"vaccines","type":"String","multiple":false,"values":["Yes"]},{"name":"visa","type":"String","multiple":false,"values":["Yes"]}],"nodes":[]};
/* GET users listing. */
router.get('/', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.send(json);
});

module.exports = router;
