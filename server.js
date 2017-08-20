var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();
var htmlroutes = require("./routing/htmlRoutes.js");
var apiroutes = require("./routing/apiRoutes.js")
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));
// require("./routing/apiRoutes.js")(app);

apiroutes(app);
htmlroutes(app);



app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});