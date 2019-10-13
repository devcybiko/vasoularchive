const mongoose = require("mongoose");
const db = require("../models");

// This file empties the records collection and inserts the records below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/vasoularchive"
);

const discographySeed = [
    {
        artist: "Little Tommy",
        titleA: "I'm Still Hurt",
        titleB: "Baby Can't You See",
        recordLabel: "Sound of Soul",
        cityRegion: "Richmond",
        releaseDate: "196x",
        comments: "comment",
        date: new Date(Date.now()),
        image: "",
        _v: "0",
        }
]



db.Record
    .remove({})
    .then(() => db.Record.collection.insertMany(discographySeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });