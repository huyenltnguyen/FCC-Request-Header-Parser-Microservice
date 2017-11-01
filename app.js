var express = require('express');
var app = express();

//===========
// CONFIG
//===========
app.enable('trust proxy');
app.use(express.static('public'));

//===========
// ROUTES
//===========
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', function(req, res) {
	var ip = req.ip;
	var lang = req.headers["accept-language"].match(/.*?(?=,)/).join('');
	var os = req.headers["user-agent"].match(/\((.*?)\)/)[1];
	res.json({
		"ipaddress": ip,
		"language": lang,
		"os": os
	});
});

app.listen(3000, function() {
	console.log('App is running on port 3000');
});