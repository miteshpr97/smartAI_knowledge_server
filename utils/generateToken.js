import jwt from "jsonwebtoken";
import redisClient from "../config/redis.js";

export const generateToken = async (userId) => {
  const accessToken = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "15m" });
  const refreshToken = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

  // Store refresh token in Redis for invalidation support
  await redisClient.setEx(`refresh:${userId}`, 7 * 24 * 60 * 60, refreshToken);

  return { accessToken, refreshToken };
};
