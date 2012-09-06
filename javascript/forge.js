// forge.js
YUI().use("node","app-base", function(Y){

	Y.log("YUI is ready");

	var app = new Y.App({
		// app config here soon
	});

	// handle request for root

	app.route('/',function(){
		Y.one('h1').set('text', 'YUIForge - home');
	});

	// handle all other requests right now.

	app.route('*', function(req){
		Y.one('h1').set('text', 'YUIForge - ' + req.path);
	});

	app.render().dispatch();

});
