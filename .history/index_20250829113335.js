import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";


dotenv.config();

const app = express();
connectDB();

app.use(express.json())
app.use(cors());

app.use(helmet());





app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});




