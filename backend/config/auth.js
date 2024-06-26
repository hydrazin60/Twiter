import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const isAuthentication = async (req, res, next) => {
  try {
    const { token } = res.cookies;
    console.log(token);
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated.",
        success: false,
      });
    }
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(decode);
    req.user = decode.id;
    next();
  } catch (error) {
    console.log(error);
  }
};
