const Course = require("../models/Course");

exports.createCourse = async(req,res)=>{
 const data = await Course.create(req.body);
 res.json(data);
};

exports.getCourses = async(req,res)=>{
 const data = await Course.find();
 res.json(data);
};

exports.updateCourse = async(req,res)=>{
 const data = await Course.findByIdAndUpdate(
 req.params.id,
 req.body,
 {new:true}
 );

 res.json(data);
};

exports.deleteCourse = async(req,res)=>{
 await Course.findByIdAndDelete(req.params.id);

 res.json({
  msg:"Deleted"
 });
};