const express = require("express");
const Task = require("../model/taskModel");
const router = express.Router();

//CREATE A TASK
//app.post("/api/tasks",logger, async (req, res) => {
router.post("/api/tasks", async (req, res) => {
  // console.log(req.body)
  // res.send("Task created")

  //SAVE THE TASK TO THE DATABASE
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//Get/Read Tasks
router.get("/api/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
})

module.exports = router;
