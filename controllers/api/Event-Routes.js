const router = require('express').Router();
const { Event } = require('../../models');

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
    res.render('events');
  } catch (err) {
    console.error('error fetching events', err);
    res.status(500).json(err);
  }
});

//Get one event by ID
router.get('/:id', async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id);
    const event = eventData.get({ plain: true })
    res.render('event', event);
  } catch (err) {
    console.error('error fetching events', err);
    res.status(500).json(err);
  }
});

// Create a new event
router.post('/', async (req, res) => {
  try {
    const newEvent = await Event.create({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      time: req.body.time
    });
    res.status(201).json(newEvent);
  } catch (err) {
    console.error('error creating an event', err);
    res.status(500).json(err);
  }
});

// Update an event
router.put('/:id', async (req, res) => {
  try {
    const updatedEvent = await Event.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json(edits),
      res.render('edits');
    if (!updatedEvent) {
      res.status(404).json({ message: 'No event found with this id!' });
      return;
    }
    res.status(200).json(updatedEvent);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Delete an event
router.delete('/:id', async (req, res) => {
  try {
    const deletedEvent = await Event.destroy({
      where: { id: req.params.id }
    });
    if (!deletedEvent) {
      res.status(404).json({ message: 'No event found with this id!' });
      return;
    }
    res.status(200).json(deletedEvent);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
