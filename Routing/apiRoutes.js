var path = require('path');
var friends = require("../app/data/friends.js")


module.exports = function(app) {
    //Get Request to show all Friends in JSON format:
    app.get("/api/friends", function(req, res) {
        console.log("Getting friends")
        res.json(friends);
    });
    //Post new user survey reults and compare to get match:
    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
        console.log("Post to Friends Complete")
        //Create the best Match Variable to update while looping.
        var bestMatch = {
            name: "",
            image: "",
            matchDifference: 10000
        };

        var totalDifference = 0;

        //Start the looping thru every object on the Friends Array. Put a "-1" in the loop to negate the new users score:
        for (var i = 0; i < friends.length - 1; i++) {
            //totalDifference will be update while going thru the next loop.
            totalDifference = 0;

            //Loop thru each friend's scores
            for (var j = 0; j < friends[i].scores.length; j++) {
                // Calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(req.body.scores[j]) - parseInt(friends[i].scores[j]));
                // If the sum of differences is less then the differences of the current "best match"
                if (totalDifference <= bestMatch.matchDifference) {

                    // Reset the bestMatch to be the new friend. 
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.matchDifference = totalDifference;
                }
            }
        }



        res.json(bestMatch);

        // res.sendFile(path.resolve('./public/home.html'));
    });
};