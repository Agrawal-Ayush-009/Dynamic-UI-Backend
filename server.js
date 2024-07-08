import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import router from "./routes/layout.routes.js";
dotenv.config();

const port = process.env.PORT;

const app = express();
mongoose
  .connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));

app.use("/layout", router);
