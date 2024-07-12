// Package Imports

const nodemailer = require("nodemailer");
require("dotenv").config();

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