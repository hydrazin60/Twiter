import express, { json } from "express";
import dotenv from "dotenv";
import database from "./DB/database.js";
import cookieParser from "cookie-parser";
import router from "./routes/auth.route.js";
import TweetRoute from "./routes/tweet.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

database();

//middlewares
app.use(express.json());
app.use(cookieParser());

// Api
app.use("/api/v1/user", router);
app.use("/api/v1/tweet" ,  TweetRoute)

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
