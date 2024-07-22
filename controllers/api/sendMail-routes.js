const router = require('express').Router();

// Placeholder route - to be implemented later
router.post('/', (req, res) => {
  res.status(501).json({ message: 'Not Implemented' });
});

module.exports = router;


/*****************************************     *****************************************/
const express = require('express');
const http = require('http');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const server = http.Server(app);
const port = 465;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public/events.js")));

// Routes

app.get("/", function(req, res){
  response.sendFile(path.join(__dirname, "views/events.handlebars"))
});

