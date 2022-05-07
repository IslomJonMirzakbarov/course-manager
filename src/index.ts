const mongoose = require("mongoose");

const uri =
  "mongodb+srv://islom:islom123@mosh-node-app.6twhk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDb..."))
  .catch((err: any) => console.log(err));

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

// creating class model and its instance
const Course = mongoose.model("Course", courseSchema);

const createCourse = async () => {
  const course = new Course({
    // name: "react",
    author: "Islom",
    tags: ["react", "frontend"],
    isPublished: true,
  });

  try {
    const result = await course.save();
    console.log(result);
  } catch (ex: any) {
    console.log(ex.message);
  }
};

const getCourses = async () => {
  const courses = await Course.find({ author: /.*Islom.*/i }).sort({
    name: -1,
  });
  console.log(courses);
};

createCourse();
