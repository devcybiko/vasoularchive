const express = require("express");
const mongoose = require("mongoose");
var mongojs = require("mongojs");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var databaseUrl = "vasoularchive";
var collections = ["records"];
var db = mongojs(databaseUrl, collections);

db.on("error", function(error) {
  console.log("Database Error:", error);
});


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
} else {
  app.use(express.static("./recordimages"));
}
app.use(express.static("./recordimages"));

// Add routes, both API and view
app.use(routes);

// app.get("/", express.static(path.join(__dirname, "./client/public/images/records")));

// Connect to the Mongo DB

// Start the API server
app.listen(PORT, function () {
  mongoose.connect("mongodb://localhost/vasoularchive" || "mongodb+srv://abushman:bncustom1@vasouldb-kxfyq.mongodb.net/test?retryWrites=true&w=majority")
  .then(() => console.log("connected to vasoularchive MongoDB"))
  .catch(err => console.log(err));
  console.log(`==> API Server now listening on PORT ${PORT}`);
});
