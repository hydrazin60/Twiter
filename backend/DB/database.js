import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const database = () => {
  mongoose
    .connect(process.env.MONGO_RUI)
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

export default database;
