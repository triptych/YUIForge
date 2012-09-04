var express = require('express'),
    app = express();

app.get('/', function(req,res) {
	res.sendfile('yuiforge.html');
	console.log("Sent yuiforge.html");

});


app.listen(process.env.PORT || 3000);
