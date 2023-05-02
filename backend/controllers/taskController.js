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

//GET A SINGLE TASK
const getTask =  async (req, res) => {
  try {
    const {id} =  req.params;
    const task = await Task.findById(id)

    if(!task){
      return res.status(404).json(`No Task  with id: ${id}`)
    }

    res.status(200).json(task)

  } catch (error) {
    res.status(500).json({msg: error.message})
  }
  // console.log(req.params);
  // res.send("Get Single Task")
}

//DELETE TASK
const deleteTask  =  async (req, res) => {
  try {
    const {id} = req.params

    const task = await Task.findByIdAndDelete(id);
    if(!task){
      return res.status(404).json(`No Task  with id: ${id}`)
    }

    res.status(200).send("Task Deleted")

  } catch (error) {
    res.status(500).json({msg: error.message})
  }
}

//UPDATE A TASK
//when using PUT all required filed must be filled, but  when using 
//patch you  can specify the only one you want  to change

//Using UPDATE
const updateTask = async (req, res) => {
  try {
    const {id} = req.params

    const task  = await Task.findByIdAndUpdate(
      {_id: id}, req.body, {new: true, runValidators: true}
    )

    if(!task){
      return res.status(404).json(`No Task  with id: ${id}`)
    }

    res.status(200).join(task)

  } catch (error) {
    res.status(500).json({msg: error.message})
  }
}


module.exports = {
    createTask,  
    getTasks,
    getTask,
    deleteTask,
    updateTask,
};