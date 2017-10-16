const User = require('./user');
const Order = require('./order');
const Product = require('./product');
const Purchase = require('./purchase');
const Review = require('./review');
const ShippingAddress = require('./shippingAddress');

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Purchase.belongsTo(Product);
Product.hasOne(Purchase);
Product.hasMany(Review);
Order.belongsTo(ShippingAddress);
ShippingAddress.hasOne(Order);

User.hasMany(ShippingAddress);
User.hasMany(Review);
User.hasMany(Order);
Order.hasMany(Purchase);

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Order,
  Product,
  Purchase,
  Review,
  ShippingAddress
};
