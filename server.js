require('dotenv').config();
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const eventRoutes = require('./routes/api/events');
const sequelize = require("./config/connection");
const helpers = require("./utils/helper");
const { log } = require('console');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(express.json());

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(routes);

// Event route
app.get('/events', (req, res) => {
  Event.findAll().then(events => {
    res.render('events', { events, loggedIn: req.session.loggedIn });
  }).catch(err => {
    console.error(err);
    res.status(500).json(err);
  });
});

app.post('/events', (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { 
      user: process.env.DB_DEV_USER,
      pass: process.env.DB_DEV_PASS,
    }
  })
  const mailOptions = {

    from: 'ONline App',

    to: req.body.email,

    subject: req.body.subject,

    text: `You've created an event with ONline on ${eventDate} at ${eventTime}!`,

  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {

      console.log(error);
      res.send('error');
      
    } else {
      console.log('Email has been sent!' + info.response);
      res.send('success')
      
    }
  })
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Server is listening on http://localhost:${PORT}`)
  );
});
