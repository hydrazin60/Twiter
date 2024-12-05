import UserModel from "../../DB/models/user.models.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { sendVerificationEmail } from "../../utils/sendVerificationEmail.js";
import { measureMemory } from "vm";
import { error } from "console";
import jwt from "jsonwebtoken";
export const Register = async (req, res) => {
  try {
    const { FullName, email, password, phoneNumber } = req.body;

    // Validate required fields
    if (!FullName || !password) {
      return res.status(400).json({
        message: "Full name and password are required.",
        success: false,
      });
    }

    // Validate email or phone number logic
    if ((!email && !phoneNumber) || (email && phoneNumber)) {
      return res.status(400).json({
        message: "Provide either an email or phone number, not both.",
        success: false,
      });
    }

    // Check if the user already exists
    const isUserExist = await UserModel.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({
        message: "User already exists.",
        success: false,
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const username = "@" + FullName.replace(/\s/g, "").toLowerCase();
    const varificationToken = crypto.randomBytes(20).toString("hex"); // This doesn't update `newUser`

    const newUser = new UserModel({
      username,
      FullName,
      email,
      password: hashedPassword,
      phoneNumber,
      varificationToken,
    });

    await newUser.save();

    await sendVerificationEmail(newUser.email, newUser.varificationToken);
    const userData = newUser.toObject();
    delete userData.password;
    delete userData.varificationToken;
    return res.status(201).json({
      message: `Welcome ${FullName} to our community!`,
      success: true,
      data: userData,
    });
  } catch (error) {
    console.error(`Error in Register: ${error.message}`);
    return res.status(500).json({
      message: "Server error. Please try again later.",
      success: false,
    });
  }
};
export const emailVerification = async (req, res) => {
  try {
    const token = req.params.token;
    const user = await UserModel.findOne({ varificationToken: token });
    if (!user) {
      return res.status(404).json({
        message: "User not found.",
        success: false,
      });
    }
    const userData = user.toObject();
    delete userData.password;
    user.isemailVerified = true;
    user.varificationToken = null;
    await user.save();

    return res.status(200).json({
      message: `Welcome ${userData.FullName} to our community! Your email has been verified.`,
      success: true,
      data: userData.FullName,
    });
  } catch (error) {
    console.error(`Error in emailVerification: ${error.message}`);
    return res.status(500).json({
      message: "Server error. Please try again later.",
      success: false,
    });
  }
};
export const Login = async (req, res) => {
  try {
    const { email, password, phoneNumber } = req.body;
    if (!password) {
      return res.status(401).json({
        message: "!please Enter a password",
        success: false,
        error: true,
      });
    }
    if ((!email && !phoneNumber) || (email && phoneNumber)) {
      return res.status(401).json({
        message: "Provide either an email or phone number, not both.",
        success: false,
        error: true,
      });
    }
    const isUserRegister = await UserModel.findOne({ email });
    if (!isUserRegister) {
      return res.status(401).json({
        message: "you are not Register! please first go to Register page ",
      });
    }
    const isPasswordMatch = await bcrypt.compare(
      password,
      isUserRegister.password
    );
    if (!isPasswordMatch) {
      return res.status(4001).json({
        message: "incorrect Password!! try Again",
      });
    }
    const Token = await jwt.sign(
      { userId: isUserRegister._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    const userData = isUserRegister.toObject();
    delete userData.password;
    return res
      .cookie("token", Token, {
        httpOnly: true,
        success: true,
        samesite: "none",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        message: "Login Successfully",
        success: true,
        data: userData,
      });
  } catch (error) {
    console.log(`Error in Login: ${error.message}`);
    return res.status(500).json({
      message: "Server error. Please try again later.",
      success: false,
      error: true,
    });
  }
};
export const Logout = async (req, res) => {
  try {
    return res
      .clearCookie("token", {
        httpOnly: true,
        success: true,
        samesite: "none",
        secure: true,
      })
      .json({
        message: "Logout Successfully",
        success: true,
      });
  } catch (error) {
    console.log(`Error in Logout: ${error.message}`);
    return res.status(500).json({
      message: "Server error. Please try again later.",
      success: false,
      error: true,
    });
  }
};
