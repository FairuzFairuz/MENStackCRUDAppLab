import mongoose from "mongoose";
import Car from "./src/models/cars.js";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./src/db/db.js";
import router from "./src/routes/cars.js";

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/test", (req, res) => {
  res.send("Server is working!");
});
app.set("view engine", "ejs"); // Tell Express to use EJS
app.set("views", "./views"); // Define the views directory
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/api", router);
app.listen(process.env.PORT);
