const mongoose = require("mongoose");

const uri =
  "mongodb+srv://islom:islom123@mosh-node-app.6twhk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDb..."))
  .catch((err: any) => console.log(err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

// creating class model and its instance
const Course = mongoose.model("Course", courseSchema);

const createCourse = async () => {
  const course = new Course({
    name: "react",
    author: "Islom",
    tags: ["react", "frontend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
};

const getCourses = async () => {
  // pagination
  const pageNumber = 2;
  const pageSize = 10;
  // /api/courses?pageNumber=2?pageSize=10

  const courses = await Course.find({ author: /.*Islom.*/i })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name: 1 })
    .count();
  console.log(courses);
};

getCourses();
