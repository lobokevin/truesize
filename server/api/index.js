const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/orders', require('./orders'));
router.use('/products', require('./products'));
router.use('/purchases', require('./purchases'));
router.use('/reviews', require('./reviews'));

router.use((req, res, next, err) => {
  const error = new Error('Not Found', err);
  console.error(err);
  res.status(404).send(error);
});
