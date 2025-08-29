import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/db.js";
import logger from "./config/logger.js";

import authRoutes from "./routes/authRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
dotenv.config({ path: '.env.local' });
dotenv.config();

// Validate ENV
if (!process.env.PORT || !process.env.MONGO_URI || !process.env.JWT_SECRET) {
  logger.error("❌ Missing required environment variables");
  process.exit(1);
}

const app = express();
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Routes
app.get("/", (req, res) => res.json({ message: "API is running..." }));
app.use("/api/auth", authRoutes);

// Error Handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`✅ Server is running on port ${PORT}`);
});

// Graceful shutdown
process.on("SIGINT", async () => {
  logger.info("🛑 Server shutting down...");
  process.exit(0);
});
