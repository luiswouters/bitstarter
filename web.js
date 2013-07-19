var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    fs.readFile('index.html', function(buf){
	//console.log(buf);
	response.send('Hellow');//buf.toString('utf8', 0, buf.lengh));
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
