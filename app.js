var express = require('express');
var bodyParser = require('body-parser');
var countries = require('./countries.json');

for(var i=0; i<countries.length; i++){
	countries[i]['traveled'] = false;
}

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/countries', function(req,res){
	res.send(countries);
})

app.get('/search', function(req, res){
	var searchCountry = countries.filter(function(obj){
		return  obj.name === req.query.country;
	});

	res.send(searchCountry);
})

var server = app.listen(4821, function() {
	console.log('Express server listening on port ' + server.address().port);
});
