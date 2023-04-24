const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const Task = require("./model/taskModel");
const taskRoutes = require("./routes/taskRoutes")


//const connectDB = require("./config/connectDB")

const app = express();

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(taskRoutes);
// const logger = (req, res, next) => {
//     console.log("Middleware ran")
//     console.log(req.method);
//     next()
// }

//Routes
app.get("/", (req, res) => {
    res.send("Home Page")
})

const PORT = process.env.PORT || 5000 
 
//METHOD 2 TO  CONNECT TO MONGODB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => console.log(err));

    //METHOD 1

    // const startServer = async () => {
    //     try {
    //        await connectDB(); 
    //        app.listen(PORT, () => {
    //         console.log(`Server running on port ${PORT}`);
    //     });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    
    // startServer();