const router = require('express').Router();
const sequelize = require('../config/connection');
const { Event } = require('../models');
const { User } = require('../models');

router.get("/", (req, res, next) => {
  try {
    res.render("home", { layout: "main", loggedIn: req.session.loggedIn });
  } catch (error) {
    next(error);
  }
});

router.get("/login", (req, res, next) => {
  try {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
    res.render("login", { layout: "main", loggedIn: false });
  } catch (error) {
    next(error);
  }
});

router.get("/signup", (req, res, next) => {
  try {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
    res.render("signup", { layout: "main", loggedIn: false });
  } catch (error) {
    next(error);
  }
});

router.get("/aboutus", (req, res, next) => {
  try {
    res.render("aboutus", { layout: "main", loggedIn: false });
  } catch (error) {
    next(error);
  }
});

router.get("/events", async (req, res, next) => {
  try {
    const eventData = await Event.findAll();
    const events = eventData.map(event => event.get({ plain: true }));
    res.render("events", {
      layout: "main",
      loggedIn: true,
      events: events
    });
  } catch (error) {
    next(error);
  }
});

router.get('/events/:id', async (req, res, next) => {
  try {
    const eventData = await Event.findOne();
    const singleEvent = eventData.map(event => event.get({ plain: true }));
    res.render("events/:id", {
      layout: "main",
      loggedin: true,
      singleEvent: singleEvent
    })
      .then()
  } catch (error) {
    next(error);
  }
})

router.get('/users', async (req, res, next) => {
  try {
    const userData = await User.findAll();
    const users = userData.map(user => user.get({ plain: true }));
    res.render("users", {
      layout: "main",
      loggedIn: true,
      users: users,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;