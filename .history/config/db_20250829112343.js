import mongodb from "mongoose"



const connectDB = async () => {
    try {
        await mongodb.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

export default connectDB;