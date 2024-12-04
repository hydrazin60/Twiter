import express, { json } from "express";
import dotenv from "dotenv";
import database from "./DB/database.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/userAuth.routes.js";
import bodyParser from "body-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/X_clone/jbn/auth", authRouter);

database();
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
