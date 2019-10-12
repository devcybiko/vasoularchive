const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  artist: { type: String, required: true },
  titleA: { type: String, required: true },
  titleB: { type: String, required: true },
  cityRegion: String,
  releaseDate: String,
  comments: String,
  date: { type: Date, default: Date.now },
  image: String
});

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
