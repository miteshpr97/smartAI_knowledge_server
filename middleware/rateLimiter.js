// middleware/rateLiniter.js

import redisClient from "../config/redis.js";

const rateLimiter = (limit, windowInSeconds) => {
  return async (req, res, next) => {
    const key = `rate:${req.ip}`;
    const requests = await redisClient.incr(key);

    if (requests === 1) {
      await redisClient.expire(key, windowInSeconds);
    }

    if (requests > limit) {
      return res.status(429).json({ message: "Too many requests, try later" });
    }

    next();
  };
};

export default rateLimiter;
