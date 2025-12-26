require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const roleRoute = require("./routes/roles");
const authRoute = require("./routes/auth");
const articleRoute = require("./routes/articles");
const addArticleRoute = require("./routes/addArticle");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/api/v1/roles", roleRoute);
app.use("/api/v1/auth", authRoute);
app.use("/articles", articleRoute);
app.use("/addArticle", addArticleRoute);

// ejs
app.set("view engine", "ejs");

// main endpoint
app.get("/", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// database and port
mongoose
  .connect(process.env.Database_URL, { dbName: "middleware" })
  .then(() => {
    console.log("database connected");
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log("Listenig to port: ", { port });
    });
  })
  .catch(() => {
    console.log("db connection failed");
  });
