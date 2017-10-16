const Sequelize = require('sequelize');
const db = require('../db');

const ShippingAddress = db.define('shippingAddress', {
  recipient: {
    type: Sequelize.STRING,
    allowNull: false
  },
  streetAddress1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: 2
    }
  },
  zip: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = ShippingAddress;
