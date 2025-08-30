import jwt from "jsonwebtoken";
import { createError } from "../utils/customError";

// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) return res.status(401).json({ message: "No token, authorization denied" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };



const authMiddleware = (req, res, next) => {
  try {
    // ✅ Get token from cookie
    const token = req.cookies.token;
    if (!token) {
      return next(createError("Not authorized, no token", 401));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // user payload from JWT
    next();
  } catch (error) {
    next(createError("Not authorized, token invalid", 401));
  }
}

export default authMiddleware;
