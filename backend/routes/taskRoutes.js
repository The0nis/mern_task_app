const express = require("express");
const Task = require("../models/taskModel");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");
const router = express.Router();

router.post("/api/tasks", createTask);
router.get("/api/tasks", getTasks);
router.get("/api/tasks/:id", getTask);
router.delete("/api/tasks/:id", deleteTask);
//when using PUT all required filed must be filled, but  when using 
//patch you  can specify the only one you want  to change
//Using put
router.put("/api/tasks/:id", updateTask);

//Using Patch
//router.patch("/api/tasks/:id", updateTask);

module.exports = router;
