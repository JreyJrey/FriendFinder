var path = require('path');

module.exports = function(app){
	app.get("/", function(req, res) {
		console.log("Getting Home.html")
		res.sendFile(path.resolve('./public/home.html'));
	});
	app.get("/survey", function(req, res) {
		console.log(req.params.body);
		res.sendFile(path.resolve('./public/survey.html'));
		console.log("go to Survey.html")
	});

}