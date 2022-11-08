const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/ttchanell", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log(`connected to database...🤖`);
  })
  .catch((err) => {
    console.log(err);
  });

const playlistSchema = mongoose.Schema({
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

const Playlist = new mongoose.model("Playlist", playlistSchema);

// ------------------------------------------ > Create Document
const createDocument = async () => {
  try {
    const reactPlaylist = new Playlist({
      name: "React-Js",
      ctype: "Front-End",
      videos: 80,
      author: "Gaurav-Sutar",
      active: true,
    });

    const jsPlaylist = new Playlist({
      name: "Javascript",
      ctype: "Front-End",
      videos: 113,
      author: "Gaurav-Sutar",
      active: true,
    });

    const mongoDB = new Playlist({
      name: "Mongo-Js",
      ctype: "Database",
      videos: 47,
      author: "Gaurav-Sutar",
      active: true,
    });

    const result = await Playlist.insertMany([
      reactPlaylist,
      jsPlaylist,
      mongoDB,
    ]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
//createDocument();
