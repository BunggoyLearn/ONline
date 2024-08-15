const { Event } = require('../models');

const eventdata = [
  {
    "id": "72f926bf-8923-469c-bfc5-bbea18cd3ea9",
    "title": "Please come to my Birthday Party",
    "description": "We have cake and we have pie and we have soda and we have wine and we have drinks and we have suds and we have the very very best of buds.",
    "date": 20240809,
    "time": 1700
  },
  {
    "id": "6613d402-b755-4cbd-b263-67bfc52c28d4",
    "title": "I wanna play Halo with my bros real bad tbh",
    "description": "Please hang out I wanna BXR you so baaad.",
    "date": 20241222,
    "time": 500
  },
  {
    "id": "df69e111-c22d-4a25-b521-a19473f35d07",
    "title": "Let's hang and chill allllll day",
    "description": "Vibin tbh lets party.",
    "date": 20250105,
    "time": 1800
  }
];

const seedEvents = () => Event.bulkCreate(eventdata);

module.exports = seedEvents;