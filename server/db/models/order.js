const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  time: {
    type: Sequelize.DATE,
    defaultValue: new Sequelize.NOW()
  }
}, {
  getterMethods: {
    date() {
      return this.time.getMonth() + ' / ' + this.time.getDate() + ' / '
      + this.time.getFullYear();
    }
  }
});

module.exports = Order;
