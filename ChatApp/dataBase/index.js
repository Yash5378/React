const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const app = express();
const PORT = 5000;
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoute);

mongoose
  .connect("mongodb://localhost:27017/chat")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("error msg" + err);
  });

app.listen(PORT, () => console.log("Server is started"));
