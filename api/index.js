import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));
const app = express();

app.listen(3000, () => {
  console.log("app is listening to the port 300 !!!");
});

app.use("api/user", userRouter);
