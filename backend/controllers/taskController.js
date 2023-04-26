const Task = require("../models/taskModel");
//controller is where we save our callback functions so it can be use aanywhere in the application

//Create a  task  controller
const  createTask = async (req, res) => {
       //SAVE THE TASK TO THE DATABASE
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

//Get all task controller
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

module.exports = {
    createTask,  
    getTasks,
};