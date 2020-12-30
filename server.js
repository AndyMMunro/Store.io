// const { Router } = require("express");
// const { Router } = require("express");
const express = require("express");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// models sync
const db = require("./models");
// const router = require("./routes/api");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// routes
require("./routes/api/products")(app);
require("./routes/api/cart")(app);
// require("./routes/api/users")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});