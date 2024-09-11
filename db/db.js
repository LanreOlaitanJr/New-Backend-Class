// Connecting to database logic is written here
const mongose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
    try {
        const connect = await mongose.connect(process.env.MONGO_URI)
        console.log(`mongoDB connected successfully on: ${connect.connection.host}`);
        
    } catch (error) {
        throw new Error(`error: ${error.message}`)
    }
}

module.exports = connectDB