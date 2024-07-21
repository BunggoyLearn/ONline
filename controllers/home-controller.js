const express = require("express");
const { User, Event, sendMail } = require("../models");
const router = express.Router();

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

module.exports = router;
