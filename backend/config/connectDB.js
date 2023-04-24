const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)

        console.log(`mongodb connected: ${connect.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = mongoose.connectDB

//USE THIS FUNCTION IN SERVER.JS TO CONNECT TO MONOGODDB

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