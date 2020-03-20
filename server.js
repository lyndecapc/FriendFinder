//Node Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
require("dotenv").config();

//create express server
//Set initial PORTs
var app = express();
var PORT = process.env.PORT || 3060;

//Data Parsing for Express App
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

//Server Routing Map
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Listener and Starting the Server
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});