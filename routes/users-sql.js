const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await db.newUseruser.create({ username, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
