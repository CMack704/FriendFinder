const express = require('express');


const app = express();

const PORT = process.env.PORT || 8080;


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App is listening on PORT: " + PORT);
});