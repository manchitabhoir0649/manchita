const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const teacher = require("../controllers/teacherController");

router.post("/", auth, teacher.createTeacher);
router.get("/", auth, teacher.getTeachers);
router.put("/:id", auth, teacher.updateTeacher);
router.delete("/:id", auth, teacher.deleteTeacher);

module.exports = router;