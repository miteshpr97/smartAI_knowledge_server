import mongodb from "mongoose"



const connectDB = async () => {
    try {
        await mongodb.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("✅ MongoDB connected");
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error.message);
        process.exit(1); // Exit process if DB fails
    }
}

export default connectDB;