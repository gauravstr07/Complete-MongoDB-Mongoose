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
      name: "Node-Js",
      ctype: "Back-End",
      videos: 73,
      author: "Gaurav-Sutar",
      active: true,
    });

    const result = await reactPlaylist.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
//createDocument();
