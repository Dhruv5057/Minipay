import mongoose from "mongoose";
import env from "./env.js";

const connectToDB = async () => {
    try {
        await mongoose.connect(env.mongoUri);

        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

export default connectToDB;