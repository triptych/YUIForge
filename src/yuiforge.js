var express = require('express'),
    app = express();


app.use('/js', express.static(__dirname + '/js') );


app.get('/', function(req,res) {
	res.sendfile('yuiforge.html');
	console.log("Sent yuiforge.html");

});


app.listen(process.env.PORT || 3000);
