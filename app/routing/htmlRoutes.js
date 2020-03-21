var path = require("path");


//Two routes here GET and USE
module.exports = function (app) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}
