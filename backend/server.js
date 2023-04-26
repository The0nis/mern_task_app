const express = require("express");
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const taskRoutes = require("./routes/taskRoutes")


const app = express();

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(taskRoutes);


//Routes
app.get("/", (req, res) => {
    res.send("Home Page")
})

const PORT = process.env.PORT || 5000 
 
//CONNECT TO MONGODB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }).catch((err) => console.log(err));
