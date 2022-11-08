const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/ttchannel", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log(`connected to database...🤖`);
  })
  .catch((err) => {
    console.log(err);
  });

const playListSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Playlist = new mongoose.model("Playlist", playListSchema);
