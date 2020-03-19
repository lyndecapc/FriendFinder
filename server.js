//Node Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Link html and api routes


//create express server


//Set initial PORTs
var app = express();
var PORT = process.env.PORT;

//Data Parsing for Express App
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Server Routing Map


//Listener; Starting the Server
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});