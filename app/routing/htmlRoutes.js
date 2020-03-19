var path = require("path");


//Two routes here GET and USE
function htmlRoutes(app) {

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    app.use(function(req,res) {
        res.sendFile(path.join(__dirname + "/../public.home.html"));
    });
}






//export will be used in server.js file
module.exports = htmlRoutes;