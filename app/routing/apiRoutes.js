

const friendsArray = require("../data/friends.js")


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friendsArray);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
        console.log(newFriend);
        friendsArray.push(newFriend);
        res.json(newFriend);
    });
}
