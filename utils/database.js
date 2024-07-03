import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.DB_URL);
        console.log(`database connection successfully ${conn.connection.host}`);
    } catch (error) {
        console.log("database connection failed", error);
    }
}

export default connectDB;