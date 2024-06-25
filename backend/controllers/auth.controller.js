import User from "../models/User.Model.js";
import bcryptjs from "bcryptjs";

export const SignUp = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    if (!name || !username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required!",
        success: false,
      });
    }

    const RegisterUser = await User.findOne({ email });
    if (RegisterUser) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    const hashPassword = await bcryptjs.hash(password, 10);
    const newUser = await User.create({
      name,
      username,
      email,
      password: hashPassword,
    });

    return res.status(201).json({
      message: "SignUp successfully",
      success: true,
      data: newUser,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};
