const express = require("express");

const app = express();

let current_hour = new Date().getHours();

app.use(
  (addRequestTime = (req, res, next) => {
    if (current_hour > 8 && current_hour < 17) {
      next();
    } else {
      res.sendFile(__dirname + "/public/out-of-service.html");
    }
  })
);

app.use(express.static(__dirname + "/public"));

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/ourservices", (req, res) => {
  res.sendFile(__dirname + "/public/ourservices.html");
});

app.listen(3000, (err) => {
  if (err) console.log("Server is not running !!!");
  else console.log("Server is running on port 3000");
});
