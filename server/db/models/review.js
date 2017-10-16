const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
  rating: {
    type: Sequelize.INTEGER
  },
  content: {
    type: Sequelize.TEXT,
    validate: {
      len: [5, 500]
    }
  }
});

module.exports = Review;
