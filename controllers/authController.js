import logger from "../config/logger.js";
import { registerUser, loginUser } from "../services/authService.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const { user, token } = await registerUser({ name, email, password });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: { user, token },
    });
  } catch (error) {
    logger.error(`❌ Register failed: ${error.message}`);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { userData, token } = await loginUser({ email, password })

    logger.info(`✅ User logged in: ${email}`);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      semeSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    })



    res.status(200).json({
      success: true,
      message: "Login successful",
      data: { userData, token },
    })
  } catch (error) {
    logger.error(`❌ login failed: ${error.message}`);
    res.status(400).json({
      success: false,
      message: error.message,
    });

  }

}
