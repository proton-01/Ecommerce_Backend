const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// import the routes
const authRoute = require("./routes/auth");
const reviewRoute = require("./routes/review");

// cors
const cors = require("cors");

mongoose
  .connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });

// cors
app.use(cors());

// routes
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/review", reviewRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
