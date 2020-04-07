var mongoose = require("mongoose");
var TaskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
    unique: true
  },
  taskContent: {
    type: String,
    required: true,
  },
  isVisible:{
      type: Boolean,
      default: true
  },
  created:{
      type: Date,
      default: Date.now
  }
});

module.exports = mongoose.model('Task', TaskSchema)
