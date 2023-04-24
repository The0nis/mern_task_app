const mongoose = require("mongoose")

//CREATE SCHEMA
const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a task"]
        },
        completed: {
            type: Boolean,
            required: true,
            default: false
        },
        
    },
    {
        timestamps: true,
    }

)

//CREATE A MODEL TO PUT THE SCHEMA
const Task = mongoose.model("Task", taskSchema)

module.exports = Task

