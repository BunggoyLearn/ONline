/* const router = require('express').Router();

// Placeholder route - to be implemented later
router.post('/', (req, res) => {
  res.status(501).json({ message: 'Not Implemented' });
});

module.exports = router;
 */

/*****************************************     *****************************************/
const router = require('express').Router();
const express = require('express');
const http = require('http');
const path = require('path');
const nodemailer = require('nodemailer');
require("dotenv").config();

const app = express();
const server = http.Server(app);
const port = 465;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public/events.js")));

// Routes

app.get("/", function (req, res) {
  response.sendFile(path.join(__dirname, "views/events.handlebars"))
});


app.post("/", function (req, res) {
  var title = req.body.title;
  var to = req.body.to;
  var date = req.body.date;
  var time = req.body.time;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465, // Port 587 is used for emails apparently. let's see how it works with 465
    secure: true, // Use `true` for port 465, `false` for all other ports (port 465 is a secure port for emails)
    auth: {
      user: process.env.DB_DEV_USER,
      pass: process.env.DB_DEV_PASS,
    },
  });

  const mailOptions = {

    from: {
      name: 'ONline App',
      address: process.env.DB_DEV_USER,
    },

    to: to,

    //cc: [], // It's here if we want to use it. Otherwise we coud delete it..

    subject: "ONline Event Created!",

    text: `You've created an event with ONline on ${date} on ${time}!`,


    // Adds attachments from this repo to our email / We can add more in the array
    attachments: [
      /* {
      filename: 'example.jpg',
      path: path.join(__dirname, 'example.jpg'),
      contentType: 'image/jpg'
      }, */
    ]
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log("Email send: " + info.response)
    }
    response.redirect("/dashboard")
  })
})

// initialize 

server.listen(port, function () {
  console.log(port)
})

module.exports = router;