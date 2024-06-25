import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const database = () => {
  mongoose
    .connect(process.env.MONGO_RUI)
    .then(() => {
      console.log("MongoDb Connect");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default database;
