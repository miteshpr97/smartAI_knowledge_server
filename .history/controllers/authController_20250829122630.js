import logger from "../config/logger";
import { registerUser } from "../services/authService";






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
            message: error.message
        });
    }
}