import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const isAuthentication = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    console.log(token);
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated.",
        success: false,
      });
    }
    const verifyToken = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(verifyToken);
    req.user = verifyToken.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

export default isAuthentication;
