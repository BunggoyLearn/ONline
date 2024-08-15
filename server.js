require("dotenv").config();
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers/");
const sequelize = require("./config/connection");
// const helpers = require("./utils/helper"); REMOVE this line

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

const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve public and utils directories statically
app.use(express.static(path.join(__dirname, "public")));
app.use("/utils", express.static(path.join(__dirname, "utils")));

// Routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Server is listening on http://localhost:${PORT}`)
  );
});
