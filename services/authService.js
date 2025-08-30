
import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = async ({ name, email, password }) => {
  // Check if user exists by email
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  // Create new user
  const user = await User.create({ name, email, password });

  // Generate JWT
  const token = generateToken(user);

  return { user, token };
};



export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid  user");

  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new Error("Invalid credentials");
  

  const token = generateToken(user);



   // Exclude password when returning data
  const userData = await User.findById(user._id).select("-password");

  return { userData, token };

}