import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const database = () => {
  mongoose
    .connect( process.env.MONGO_RUI , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDb Connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default database;
