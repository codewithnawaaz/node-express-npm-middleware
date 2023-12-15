// var a = 4;
// var b = 5;

// var d = a + b;

// module.exports = d; // Iska matlab hai ki mene d ko export kar diya or me ise kahi bhi require karke use me le skta hu for eg -  see script.js
const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("middlewARE chal rhah hai");
  next();
});

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/profile", function (req, res) {
  res.send("hi i m profile");
});

app.listen(3000);
