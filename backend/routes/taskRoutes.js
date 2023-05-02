const express = require("express");
const Task = require("../models/taskModel");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");
const router = express.Router();

//router.route("/").get(getTask).post(createTask)
//router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
//when using PUT all required filed must be filled, but  when using 
//patch you  can specify the only one you want  to change
//Using put
router.put("/api/tasks/:id", updateTask);

//Using Patch
//router.patch("/api/tasks/:id", updateTask);

module.exports = router;
