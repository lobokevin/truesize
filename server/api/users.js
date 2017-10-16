const router = require('express').Router();
const { User, Order } = require('../db/models');
module.exports = router;


router.get('/', (req, res, next) => {
  User.findAll({
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next);
});

router.get('/:userId', (req, res, next) => {
  User.findOne({
    where: { id: req.params.userId },
    attributes: ['id', 'email']
  })
    .then(user => res.json(user))
    .catch(next);
});

router.get('/:userId/orders', (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => user.getOrders())
    .then(orders => res.json(orders))
    .catch(next);
});

router.post('/:userId/orders', (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => Order.create(req.body).setUser(user))
    .then(order => res.json(order))
    .catch(next);
});

router.get('/:userId/shippingAddresses', (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => user.getShippingAddress())
    .then(shippingAddress => res.json(shippingAddress))
    .catch(next);
});

router.get('/:userId/reviews', (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => user.getReviews())
    .then(reviews => res.json(reviews))
    .catch(next);
});

router.post('/', (req, res, next) => {
  User.create(req.body).then(user => res.json(user)).catch(next);
});

router.put('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => {
      return user.update(req.body);
    })
    .then(user => {
      return res.json(user);
    })
    .catch(next);
});

router.delete('/:userId', (req, res, next) => {
  User.destroy({ where: { id: req.params.userId } }).then(() => res.sendStatus(204)).catch(next);
});
