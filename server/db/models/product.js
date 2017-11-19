const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  size: {
    type: Sequelize.ENUM('S', 'M', 'L', 'XL'),
    defaultValue: 'M'
  },
  inventoryQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(6, 2),
    allowNull: false
  },
  category: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'http://suitsandmoregh.com/wp-content/uploads/2016/12/wNDuXqrQOs_yosemite_shirt_0_original.jpg'
  }
});

module.exports = Product;
