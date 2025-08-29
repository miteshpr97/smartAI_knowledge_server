import User from "../models/User.js"
import jwt from "jsonwebtoken";



const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    )
}






export const registerUser = async ({ name, email, password }) => {

    const existingUser = await User.findOne();

    if (!existingUser) throw new Error("User already exists")
    const user = await user.craete({ name, email, password });
    const token = generateToken(user)

    return { user, token };
}