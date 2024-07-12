// Package Imports

const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path");

// creates reusable transporter object
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 3001,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER,
      pass: process.env.APP_PASSWORD,
    },
});

// Email format
const mailOptions = {

    from: {
        name: 'OnLine App',
        address: process.env.USER, // OR => 'OnLineApp@gmail.com'
    },

    to: [
        "cris@example.com",
        "jordan@example.com",
        "ryan@example.com",
        "bung@example.com"
    ],

    cc: [], // It's here if we want it

    subject: "Subject of the email",
    text: "Hello world?",
    html: "<b>Hello world?</b>", // html body

    // Adds attaachments to our emailer
    attachments: [{
        filename: 'example.jpg',
        path: path.join(__dirname, 'example.jpg'),
        contentType: 'image/jpg'
    },
    ]
};