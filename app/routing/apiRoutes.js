var friendsData = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
    var totalDifference = 0;
    
    
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var b = userScores.map(function(item) {
            return parseInt(item, 10);
        });

         userData = {
             name: req.body.name,
             photo: req.body.photo,
             scores: b
         };

       console.log("Name: : " + userName);
       console.log("Best match friend diff " + bestMatch.friendDifference);
       console.log("==================================");

       for (var i = 0; i < friendsData.length; i++) {
           console.log(friendsData[i].name);
           totalDifference = 0;
           console.log("Total Diff " + totalDifference);
           console.log("Best match friend diff " + bestMatch.friendDifference);

        var bfriendScore = friendsData[i].scores.reduce((a,b) => a + b, 0);
        console.log("Total friend score " + bfriendScore);
        totalDifference += Math.abs(sum - bfriendScore);
        console.log("==================> " + totalDifference);

        if (totalDifference <= bestMatch.friendDifference) {
            bestMatch.name = friendsData[i].name;
            bestMatch.photo = friendsData[i].photo;
            bestMatch.friendDifference = totalDifference;
        }
         console.log(totalDifference + " Total Difference");  
       }
        console.log(bestMatch);

        friendsData.push(userData);
        console.log("New user added");
        console.log(userData);
        res.json(bestMatch);

    });
};


