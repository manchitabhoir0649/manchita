require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/students", require("./routes/studentRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/teachers", require("./routes/teacherRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Server Running on ${process.env.PORT}`);
});