const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const student = require("../controllers/studentController");

router.post("/", auth, student.createStudent);
router.get("/", auth, student.getStudents);
router.get("/:id", auth, student.getStudent);
router.put("/:id", auth, student.updateStudent);
router.delete("/:id", auth, student.deleteStudent);

module.exports = router;