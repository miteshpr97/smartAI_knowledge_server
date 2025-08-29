import User from "../models/User.js"
import jwt from "jsonwebtoken";
import { generateToken } from "../utils/generateToken.js";









export const registerUser = async ({ name, email, password }) => {

    const existingUser = await User.findOne();

    if (!existingUser) throw new Error("User already exists")
    const user = await user.craete({ name, email, password });
    const token = generateToken(user)

    return { user, token };
}