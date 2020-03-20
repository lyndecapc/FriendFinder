var friendsData = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };
        var scoresArray = [];
        for (var i = 0; i < req.body.scores.length; i++) {
            scoresArray.push(parseInt(req.body.scores[i]))
        }
        newFriend.scores = scoresArray;

        var scoreComparisonArray = [];
        for (var j = 0; j < newFriend.scores.length; j++) {
            currentComparison += Math.abs(newFriend.scores[j] - friendsData[i].scores[j]);
        }
        scoreComparisonArray.push(currentComparison);

        var bestMatchPosition = 0;
        for (var i = 1; i < scoreComparisonArray.length; i++) {
            if (scoreComparisonArray[i] <= scoreComparisonArray[bestMatchPosition]) {
                bestMatchPosition = i;
            }
        }

        var bestFriendMatch = friendsData[bestMatchPosition];

        res.json(bestFriendMatch);

        friendsData.push(newFriend);

    });
}

//export for use in server.js
