// Package Imports
const { log } = require("console");
const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path");

// creates reusable transporter object
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

// Email format
const mailOptions = {

    from: {
        name: 'ONline App',
        address: process.env.DB_DEV_USER, 
    },

    to: [
        "salgado.chris.m@gmail.com",
    ],

    //cc: [], // It's here if we want to use it. Otherwise we coud delete it..


    subject: "Subject of the email",
    text: "This is a test email",
    html: "<b>This is a test email</b>", // html body


    // Adds attachments from this repo to our email / We can add more in the array
    attachments: [
        /* {
        filename: 'example.jpg',
        path: path.join(__dirname, 'example.jpg'),
        contentType: 'image/jpg'
        }, */
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