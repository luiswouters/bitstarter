var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    fs.readFile('index.html', function(err, buf){
	//console.log(buf);
	response.send(buf.toString('utf8', 0, buf.lengh));
    });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
