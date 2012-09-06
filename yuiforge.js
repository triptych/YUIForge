var express = require('express'),
    app = express();


app.use('/javascript', express.static(__dirname + '/javascript') );


app.get('/', function(req,res) {
	res.sendfile('yuiforge.html');
	console.log("Sent yuiforge.html");

});

// all other requests are handled by redirecting the browser back to the
// root path and tacking on the URL's path as the fragment;
// e.g. "/foo/" => "/#/foo/".

app.get('*', function (req, res){
	res.redirect(302, "/#" + req.url);
});


app.listen(process.env.PORT || 3000);
