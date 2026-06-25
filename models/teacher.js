const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  teacherName: String,
  subject: String
});

module.exports = mongoose.model("Teacher", teacherSchema);