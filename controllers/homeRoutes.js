const router = require("express").Router();
const sequelize = require("../config/connection");
const { Event } = require("../models");
const { User } = require("../models");

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
    const events = eventData.map((event) => event.get({ plain: true }));
    res.render("events", {
      layout: "main",
      loggedIn: true,
      events: events,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/api/events/:id", async (req, res) => {
  try {
    const eventId = req.params.id;
    const result = await Event.destroy({ where: { id: eventId } });

    if (result) {
      res.status(200).json({ message: "Event deleted successfully" });
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/users", async (req, res, next) => {
  try {
    const userData = await User.findAll();
    const users = userData.map((user) => user.get({ plain: true }));
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
