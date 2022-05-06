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
  // comparison operators:
  // eq (equal)
  // ne (not equal)
  // gt (greater than)
  // lt (less than)
  // gte (greater than or equal)
  // lte (less than or equal)
  // in
  // nin (not in)

  // logical operators

  const courses = await Course
    .find()
    .or([{author: 'Islom'}, {isPublished: true}])
    // .find({price: {$in: [10, 14, 20]}})
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
};

getCourses();
