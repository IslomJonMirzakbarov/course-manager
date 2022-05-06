const mongoose = require("mongoose");

const uri =
  "mongodb+srv://islom:islom123@mosh-node-app.6twhk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDb...")) 
  .catch((err: any) => console.log(err));
