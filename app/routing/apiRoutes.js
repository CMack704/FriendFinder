

const friendsArray = require("../data/friends.js")


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friendsArray);
    });

    app.get("/api/friends/:friends", function (req, res) {
        var chosen = req.params.friendsArray;

        console.log(chosen);

        for (var i = 0; i < friendsArray.length; i++) {
            if (chosen === friendsArray[i].routeName) {
                return res.json(friendsArray[i]);
            }
        }

        return res.json(false);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
        console.log(newFriend);
        friendsArray.push(newFriend);
        res.json(newFriend);
    });
}
