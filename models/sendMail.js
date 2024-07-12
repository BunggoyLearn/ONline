// Package Imports
const { log } = require("console");
const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path");

// creates reusable transporter object
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 3001, // Port 587 is used for emails apparently. let's see how it works with 3001
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD,
    },
});

// Email format
const mailOptions = {

    from: {
        name: 'ONline App',
        address: process.env.USER, // OR => 'ONlineApp@gmail.com'
    },

    to: [
        "cris@example.com",
        "jordan@example.com",
        "ryan@example.com",
        "bung@example.com"
    ],

    cc: [], // It's here if we want to use it. Otherwise we coud delete it..

    subject: "Subject of the email",
    text: "This is a test email",
    html: "<b>This is a test email</b>", // html body

    // Adds attachments to our emailer / We can add more in the array
    attachments: [
        {
        filename: 'example.jpg',
        path: path.join(__dirname, 'example.jpg'),
        contentType: 'image/jpg'
        },
    ]
};

// Sends email
const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email has been sent!');
    } catch (error) {
        console.log(error);
    }
}

sendMail(transporter, mailOptions);