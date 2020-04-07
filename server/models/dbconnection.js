var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/node-vue-task", { useNewUrlParser: true , useUnifiedTopology: true ,   useCreateIndex: true,});
var db = mongoose.connection;
db.on("error", () => {
  console.log("There is connection problem with MongoDB");
});
db.once("open", () => {
  console.log("You are connection at MongoDB");
});
module.exports = mongoose;