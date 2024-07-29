const express = require('express');
const http = require('http');
const path = require('path');
const nodemailer = require('nodemailer');
require("dotenv").config();

const app = express();
const server = http.Server(app);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "views/events.handlebars")));

// Routes

app.get("*/*", function (req, res) {
  response.sendFile(path.join(__dirname, "views/events.handlebars"))
})


app.post("/events", function (req, response) {
  var title = req.body.title;
  var to = req.body.to;
  var date = req.body.date;
  var time = req.body.time;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465, // Port 587 is used for emails apparently. let's see how it works with 465
    secure: true, // Use `true` for port 465, `false` for all other ports (port 465 is a secure port for emails)
    auth: {
      user: "online.app.project@gmail.com",
      pass: "hlns godk icrk orgm",
    },
  });

  var mailOptions = {

    from: 'ONline App',

    to: to,

    subject: "ONline Event Created!",

    text: `You've created an event with ONline on ${date} on ${time}!`,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log("Email send: " + info.response)
    }
    response.redirect("/dashboard")
  });
});
