const router = require('express').Router();
const { Review } = require('../db/models');
module.exports = router;

router.get('/product/:productId', (req, res, next) => {
  Review.findAll({ where: { productId: req.params.productId } })
    .then(reviews => res.json(reviews))
    .catch(next);
});

router.get('/user/:userId', (req, res, next) => {
  Review.findAll({ where: { userId: req.params.userId } })
    .then(reviews => res.json(reviews))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Review.create(req.body).then(review => res.json(review)).catch(next);
});

router.put('/:reviewId', (req, res, next) => {
  Review.findById(req.params.reviewId)
    .then(review => review.update(req.body))
    .then(review => res.json(review))
    .catch(next);
});

router.delete('/:reviewId', (req, res, next) => {
  Review.destroy({ where: { id: req.params.reviewId } })
    .then(() => res.sendStatus(204))
    .catch(next);
});
