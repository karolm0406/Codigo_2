// Import dependencies
const express = require("express");
const session = require("express-session");

// Create Express app
const app = express();

// Configure session middleware
app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
  })
);

// Route to set session data
app.get("/setSession", (req, res) => {
  req.session.username = "johnDoe";
  res.send("Session data set");
});