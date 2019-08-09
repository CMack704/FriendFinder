const express = require('express');


const app = express();

const PORT = process.env.PORT || 8080;


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

$("#submit-btn").on("click", function () {
  var matchedFriend = "Jessica Jones"


  matchedFriend = matchedFriend.replace(/\s+/g, "").toLowerCase();

  app.get("/api/characters/" + matchedFriend, function (data) {
    console.log(data);
    if (data) {
      $("#friends-name").text(data.name);
      $("#friends-photo").src(data.photo);
    }
  });
})
app.listen(PORT, function () {
  console.log("App is listening on PORT: " + PORT);
})