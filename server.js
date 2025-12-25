require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const articleRoute = require("./routes/articles");
const authRoute = require("./routes/auth");

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/articles", articleRoute);
app.use("/api/v1/auth", authRoute);

// ejs
app.set("view engine", "ejs");

// main endpoint
app.get("/", (req, res) => {
  res.render("articles");
});

// database and port
mongoose
  .connect(process.env.Database_URL, { dbName: "middleware" })
  .then(() => {
    console.log("database connected");
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log("Listenig to port: ", { port });
    });
  })
  .catch(() => {
    console.log("db connection failed");
  });
