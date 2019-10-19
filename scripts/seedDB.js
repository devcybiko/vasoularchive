const mongoose = require("mongoose");
const db = require("../models");

// This file empties the records collection and inserts the records below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/vasoularchive"
);

const discographySeed = [
    {
        artist: "Dickie Wonder",
        titleA: "Nobody Knows",
        titleB: "Story Of My Love",
        recordLabel: "Sound of Soul",
        cityRegion: "Richmond",
        releaseDate: "196x",
        comments: "Locally distributed pressing contains a mix that doesn't have backing female group vocals, while the cameo/parkway distributed pressing contains a different mix with the background vocals.",
        date: new Date(Date.now()),
        image: "soundofsoul.jpg",
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