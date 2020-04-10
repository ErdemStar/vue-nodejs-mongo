var mongoose = require("mongoose");
//buraya isim olarak mongodb://container(mongodb) ismini verdim. Burayı docker-compose'dan alıyor
mongoose.connect("mongodb://mongodb:27017/node-vue-task", { useNewUrlParser: true , useUnifiedTopology: true ,   useCreateIndex: true,});
var db = mongoose.connection;
db.on("error", () => {
  console.log("There is connection problem with MongoDB");
});
db.once("open", () => {
  console.log("You are connection at MongoDB");
});
module.exports = mongoose;