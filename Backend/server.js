const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const connectDb = require("./config/db");
const cookieParser = require("cookie-parser");

const rootRouter = require("./routes/index");

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to server");
});

app.use("/api/v1", rootRouter);

connectDb()
  .then(() => {
    console.log("Connection to database established");
    app.listen(process.env.PORT || 3000, () => {
      console.log(
        `Server established connection on port ${process.env.PORT || 3000}`
      );
    });
  })
  .catch((error) => {
    console.log("Could not establish connection to db", error);
    process.exit(1);
  });
