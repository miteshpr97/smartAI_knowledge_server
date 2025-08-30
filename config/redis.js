
// import { createClient } from "redis";

// const redisHost = process.env.REDIS_HOST || "localhost";
// const redisPort = process.env.REDIS_PORT || 6379;

// const client = createClient({
//   url: `redis://${redisHost}:${redisPort}`,
// });

// client.on("error", (err) => {
//   console.error("❌ Redis error:", err);
// });

// await client.connect();

// export default client;






// config/ redis.js


import { createClient } from "redis";
import logger from "./logger.js";

const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://127.0.0.1:6379",
});

redisClient.on("connect", () => logger.info("✅ Redis connected"));
redisClient.on("error", (err) => logger.error("❌ Redis error:", err));

await redisClient.connect();

export default redisClient;
