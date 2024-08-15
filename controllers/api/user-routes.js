const express = require('express');
const router = express.Router();
const { User } = require('../../models');

//Get all users
router.get('/', async (req, res) => {
  console.log('yo yo yo yo yo yo yo yo yo yo');
  try {
    const users = await User.findAll();
    res.status(200).json(users);
    res.render('users');
  } catch (err) {
    console.error('error fetching users', err);
    res.status(500).json(err);
  }
});

// Create new user
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = newUser.username;
      res.status(201).json(newUser);
    });
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ message: 'Username or email already exists' });
    } else {
      console.error(err);
      res.status(500).json(err);
    }
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    console.log('Login attempt for:', req.body.email);

    const userData = await User.findOne({
      where: { email: req.body.email },
    });

    if (!userData) {
      console.log('User not found:', req.body.email);
      res.status(400).json({ message: 'Invalid email or password' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      console.log('Invalid password for user:', req.body.email);
      res.status(400).json({ message: 'Invalid email or password' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = userData.username;
      console.log('User logged in:', userData.email);
      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
