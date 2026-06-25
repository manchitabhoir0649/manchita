const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const course = require("../controllers/courseController");

router.post("/", auth, course.createCourse);
router.get("/", auth, course.getCourses);
router.put("/:id", auth, course.updateCourse);
router.delete("/:id", auth, course.deleteCourse);

module.exports = router;