const Sequelize = require('sequelize');
const db = require('../db');

const Purchase = db.define('purchase', {
  price: {
    type: Sequelize.DECIMAL(6, 2),
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
});

module.exports = Purchase;
