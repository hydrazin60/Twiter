import User from "../models/User.Model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
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
// login
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    const RegisterUser = await User.findOne({ email });
    if (!RegisterUser) {
      return res.status(404).json({
        message: "User does not exist",
        success: false,
      });
    }
    const ValidPassword = await bcryptjs.compare(
      password,
      RegisterUser.password
    );
    if (!ValidPassword) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const tokenData = {
      userId: RegisterUser._id,
    };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "360d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 360 * 24 * 60 * 60 * 1000,
      })
      .json({
        message: `Welcome ${RegisterUser.name} you are successfully login `,
        success: true,
      });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

// logout

export const Logout = (req, res) => {
  return res
    .cookie("token", "", { expires: new Date(Date.now()) })
    .json({
      message: "Logged out successfully",
      success: true,
    });
};


 
