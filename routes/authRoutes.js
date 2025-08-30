import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();


// new user register
router.post("/register", register);

// user login
router.post("/login", login )


export default router;
