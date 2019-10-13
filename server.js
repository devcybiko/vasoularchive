const express = require("express");
// const Record = require("./models");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// const db = require("./models");



app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// app.get("/", express.static(path.join(__dirname, "./client/public/images/records")));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/vasoularchive")
  .then(() => console.log("connected to vasoularchive MongoDB"))
  .catch(err => console.log(err));

// Start the API server
app.listen(PORT, function () {
  console.log(`==> API Server now listening on PORT ${PORT}`);
});
