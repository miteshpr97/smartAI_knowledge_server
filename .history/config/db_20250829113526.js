import mongoose from "mongoose";
import logger from "./logger";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        logger.info("✅ MongoDB connected");
    } catch (error) {
        logger.error("❌ MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

export default connectDB;
