const mongoose = require("mongoose");

const uri =
  "mongodb+srv://islom:islom123@mosh-node-app.6twhk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

// creating class model and its instance
const Course = mongoose.model("Course", courseSchema);
const course = new Course({
  name: "Nodejs",
  author: "Islom",
  tags: ["nodejs", "backend"],
  isPublished: true,
});

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDb..."))
  .catch((err: any) => console.log(err));
