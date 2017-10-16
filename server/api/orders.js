const router = require('express').Router();
const { Order } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  Order.findAll().then(orders => res.json(orders)).catch(next);
});

router.get('/:orderId', (req, res, next) => {
  Order.findById(req.params.orderId).then(order => res.json(order)).catch(next);
});

router.post('/', (req, res, next) => {
  Order.create(req.body) // we should destruct this
    .then(order => res.json(order))
    .catch(next); // send status 201
});

router.put('/:orderId', (req, res, next) => {
  Order.findById(req.params.orderId)
    .then(order => order.update(req.body))
    .then(order => res.json(order))
    .catch(next);
});

router.delete('/:orderId', (req, res, next) => {
  Order.destroy({ where: { id: req.params.orderId } }).then(() => res.sendStatus(204)).catch(next);
});
